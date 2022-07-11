import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
// import { Posts} from '../../dumydata';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Feed = ({username}) => {
    const [post , setPost] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
       getTimeLine();

    },[username,user._id]);

    // console.log(post)

    const getTimeLine = async() => {
      try{
        const response = username? await axios.get(`/post/profile/${username}`) : await axios.get(`/post/timeline/${user._id}`);
        setPost(response.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt)
        }))
        // console.log(response)
      }catch(error){
        console.log(error)
      }
    }

    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
               {
                   post.length > 0 ?post.map((data,index) => {
                       
                    return <Post post={data} key={index}/>
                   }):''
               }
            </div>
        </div>
    )
}

export default Feed;