import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import { Posts} from '../../dumydata';

const Feed = () => {
    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
               {
                   Posts.map((data,index) => {
                       
                    return <Post post={data} key={index}/>
                   })
               }
            </div>
        </div>
    )
}

export default Feed;