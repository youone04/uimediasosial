import "./post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from '../../dumydata';
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const {user:currentUser} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const likeHandler = async() => {
    try{
      await axios.put(`/post/${post._id}/like`,{userId: currentUser._id});

    }catch(error){

    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
  },[currentUser._id, post.likes])

  useEffect(() => {
    getUser();
  }, [post.userId]);

  const getUser = async () => {
    try {
      const response = await axios.get(`/users/user?userId=${post.userId}`);
      setUser(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(post)

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postToptLeft">
            <Link to={`/profile/${user?.data?.userName}`} style={{textDecoration:'none'}}>
              <img
                className="postProfileImg"
                src={
                  `${PF}/person/${user?.data?.profilePicture }`|| "/assets/person/no_avatar.png"
                }
                alt="person"
              />
            </Link>
            <span className="postUsername">{user?.data?.userName}</span>
            <span className="postDate">{format(post?.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={`${PF}/${post?.img}`} alt="" />
        </div>
        <div className="postBottom">
          <div className="potBottomLeft">
            <img
              onClick={likeHandler}
              className="likeIcon"
              src="/assets/like.png"
              alt="like"
            />
            <img
              onClick={likeHandler}
              className="likeIcon"
              src="/assets/heart.png"
              alt="heart"
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
