import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import { Posts} from '../../dumydata';
import { useState , useEffect } from 'react';
import axios from 'axios';

const Feed = () => {
    const [post , setPost] = useState([]);
    const[text, setText] = useState([]);

    useEffect(() => {
       getTimeLine();

    },[])

    const getTimeLine = async() => {
      try{
        const response =  await axios.get(`/post/timeline/62bc4dccbfbd4d2f45e1f097`);
        setPost(response.data)
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
                   post.map((data,index) => {
                       
                    return <Post post={data} key={index}/>
                   })
               }
            </div>
        </div>
    )
}

export default Feed;