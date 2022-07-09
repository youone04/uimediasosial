import './share.css';
import { 
    PermMedia,
    Label,
    Room,
    EmojiEmotions
} from '@material-ui/icons';
import { useContext , useRef, useState } from 'react';
import { AuthContext } from "../../context/AuthContext"

const Share = () => {
    const{user} = useContext(AuthContext);
    const desc = useRef();
    const[file , setFile] = useState(null)

    console.log(user)

    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePicture?user.profilePicture :"/assets/person/no_avatar.png"} alt="person" />
                    <input ref={desc} placeholder={`What's in your mind ${user.userName}?`} type="text" name="text" id="text" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <form className="shareBottom" onSubmit={() => {}}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input style={{display:'none'}} type='file' id="file" accept='.png , .jpeg , .jpg' onChange={(e) => setFile(e.target.files[0])}/>
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </form>
            </div>
        </div>
        
    )
}
export default Share;