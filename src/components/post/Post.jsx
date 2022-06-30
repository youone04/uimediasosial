import './post.css';
import { MoreVert } from '@material-ui/icons';
// import { Users } from '../../dumydata';
import { useState , useEffect } from 'react';
import axios from 'axios';
import {format} from 'timeago.js';


const Post = ({post}) => {
    const [like , setLike] = useState(post.likes.length);
    const [isLiked , setIsLiked] = useState(false);
    const [user , setUser] = useState({});

    const likeHandler = () => {

        setLike(isLiked ? like -1 : like + 1);
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        getUser();
 
     },[post.userId])
 
     const getUser = async() => {
       try{
         const response =  await axios.get(`/users/${post.userId}`);
         setUser(response.data)
         // console.log(response)
       }catch(error){
         console.log(error)
       }
     }

    //  console.log(user.data.userName)
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postToptLeft">
                        <img className="postProfileImg" src={user?.data?.profilePicture || "/assets/person/no_avatar.png" } alt="person" />
                        <span className="postUsername">
                            {
                               user?.data?.userName
                            }
                        </span>
                        <span className="postDate">
                         {format(post?.createdAt)}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post?.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="potBottomLeft">
                        <img onClick={likeHandler} className="likeIcon" src="/assets/like.png" alt="like" />
                        <img onClick={likeHandler} className="likeIcon" src="/assets/heart.png" alt="heart" />    
                        <span className="postLikeCounter">{like} people like it</span>                    
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;