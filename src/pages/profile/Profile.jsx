import Feed from "../../components/feed/Feed"
import Rigthbar from "../../components/rightbar/Rigthbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import './profile.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Profile = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(() => {
        getUser();
      }, []);
    
      const getUser = async () => {
        try {
          const response = await axios.get(`/users/user?username=${params?.username}`);
          setUser(response.data);
        //   console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };

   
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${PF}/cover/${user?.data?.coverPicture}` || "https://tokystorage.s3.amazonaws.com/images/default-cover.png"} alt="top" />
                            <img className="profileUserImg" src={`${PF}/person/${user?.data?.profilePicture}` || "https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png"} alt="top" />
                        </div>
                        <div className="profileInfo">
                        <h2 className="profilInfoName">{user?.data?.userName}</h2>
                            <span className="profileInfoDesc">{'test'}</span>
                        </div>
                    </div>

                    <div className="profileRightBottom">
                        <Feed username={params?.username}/>
                        <Rigthbar user={user?.data}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;