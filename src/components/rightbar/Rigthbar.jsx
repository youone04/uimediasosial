import './rigthbar.css';

const Rigthbar = () => {
    return(
        <div className="rigthbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="birthday" />
                    <span className="birthdayText"><b>Yuna</b> and <b>3 other friends</b> have ad birthday today</span>
                </div>
                <img className="rigthbarAd" src="assets/ad.png" alt="ad" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="person" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Asep Saputra</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Rigthbar;