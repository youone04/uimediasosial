import './sidebar.css';
import { RssFeed ,
         Bookmark,
         HelpOutline,
         WorkOutline,
         Event,
         School,
         Chat,
         Camera,
         Group
         } from '@material-ui/icons';
import { Users } from '../../dumydata';
import CloseFriend from '../closeFriend/CloseFriend';

const Sidebar = () => {
    return(
       <div className="sidebar">
           <div className="sidebarWrapper">
               <ui className="sidebarList">
                   <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                   </li>
                   <li>
                   <Chat className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chats</span>
                   </li>
                   <li>
                   <Camera className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                   </li>
                   <li>
                   <Group className="sidebarIcon"/>
                    <span className="sidebarListItemText">Group</span>
                   </li>
                   <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmark</span>
                   </li>
                   <li className="sidebarListItem">
                    <HelpOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                   </li>
                   <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                   </li>
                   <li className="sidebarListItem">
                    <Event className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                   </li>
                   <li className="sidebarListItem">
                    <School className="sidebarIcon"/>
                    <span className="sidebarListItemText">Cousrses</span>
                   </li>
               </ui>
               <button className="sidebarButton">Show More</button>
               <hr className="sidebarHr"/>
               <ul className="sidbarFriendList">
                  {
                      Users.map((data , index) => {
                          return(
                              <CloseFriend key={index} user={data}/>
                          )
                      })
                  }
               </ul>
           </div>
        </div>
    )
}
export default Sidebar;