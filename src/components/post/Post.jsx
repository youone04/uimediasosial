import './post.css';
import { MoreVert } from '@material-ui/icons';

const Post = () => {
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postToptLeft">
                        <img className="postProfileImg" src="/assets/person/1.jpeg" alt="person" />
                        <span className="postUsername">
                            yudi gunawan
                        </span>
                        <span className="postDate">
                           5 mins ago
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! its my first post</span>
                    <img className="postImg" src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="potBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" alt="like" />
                        <img className="likeIcon" src="/assets/heart.png" alt="heart" />    
                        <span className="postLikeCounter">32 people like it</span>                    
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;