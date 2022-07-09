import './rigthbar.css';
import {Users} from '../../dumydata';
import Online from '../online/Online';

const Rigthbar = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightBar = () => {
        return(
            <>
             <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="birthday" />
                    <span className="birthdayText"><b>Yuna</b> and <b>3 other friends</b> have ad birthday today</span>
                </div>
                <img className="rigthbarAd" src="assets/ad.png" alt="ad" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                  {
                      Users.map((data , index) => {
                          return(
                            <Online user={data} key={index}/>
                          )
                      })
                  }
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return(
           <>
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
                <div className="rightbarFollowing">
                    <img src={PF+"/person/1.jpeg"} alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={PF+"/person/2.jpeg"} alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={PF+"/person/3.jpeg"} alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">John Carter</span>
                </div>
            </div>
           </>
        )
    }

    return(
        <div className="rigthbar">
            <div className="rightbarWrapper">
               {user?<ProfileRightBar/>:<HomeRightBar/>}               
            </div>
        </div>
    )
}
export default Rigthbar;