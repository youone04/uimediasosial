import "./rigthbar.css";
import { Users } from "../../dumydata";
import Online from "../online/Online";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {Add, Remove} from "@material-ui/icons"

const Rigthbar = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const{user:currentUser , dispatch} = useContext(AuthContext);
  const[follow , setFollow] = useState(currentUser.followings.includes(user?._id));

  useEffect(() => {
    setFollow(currentUser.followings.includes(user?._id))
  },[currentUser , user?._id]);


  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(`/users/friends/${user?._id}`);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user?._id]);

  const handleCick = async() => {
    try{

        if(follow){
            await axios.put("/users/"+user._id+"/unfollow" , {
                userId :  currentUser._id
            });
            dispatch({type :'UNFOLLOW' , payload : user._id})
        }else{
            await axios.put("/users/"+user._id+"/follow" , {
                userId :  currentUser._id
            });
            dispatch({type :'FOLLOW' , payload : user._id})
        }      

    }catch(error){
        console.log(error)
    }
    setFollow(!follow)
  }

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="birthday" />
          <span className="birthdayText">
            <b>Yuna</b> and <b>3 other friends</b> have ad birthday today
          </span>
        </div>
        <img className="rigthbarAd" src="assets/ad.png" alt="ad" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((data, index) => {
            return <Online user={data} key={index} />;
          })}
        </ul>
      </>
    );
  };


  const ProfileRightBar = () => {
    return (
      <>
      {user.userName !== currentUser.userName && (
        <button className="rightbarFollowButton" onClick={handleCick}>
            {
                follow? "Unfollow": "Follow"
            }
            {
                follow? <Remove /> : <Add/>
            }

        </button>
      ) }
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City :</span>
            <span className="rightBarInfoValue">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From :</span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship :</span>
            <span className="rightBarInfoValue">{user.relationship}</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          {friends.map((friend) => {
            return (
              <Link style={{textDecoration:'none'}} to={"/profile/"+friend.userName}>
                <div className="rightbarFollowing">
                  <img
                    src={
                      friend.profilePicture
                        ? PF +"/person/"+friend.profilePicture
                        : PF + "person/no_avatar.png"
                    }
                    alt=""
                    className="rightBarFollowingImg"
                  />
                  <span className="rightBarFollowingName">
                    {friend.userName}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="rigthbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};
export default Rigthbar;
