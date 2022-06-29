import Feed from "../../components/feed/Feed"
import Rigthbar from "../../components/rightbar/Rigthbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import './profile.css';

const Profile = () => {

   
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/post/3.jpeg" alt="top" />
                            <img className="profileUserImg" src="assets/person/7.jpeg" alt="top" />
                        </div>
                        <div className="profileInfo">
                        <h2 className="profilInfoName">Yudi Gunawan</h2>
                            <span className="profileInfoDesc">Hello My Friends</span>
                        </div>
                    </div>

                    <div className="profileRightBottom">
                        <Feed />
                        <Rigthbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;