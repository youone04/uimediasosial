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
                   <li className="sidebarFriend">
                       <img src="/assets/person/2.jpeg" alt="person" className="sidebarFriendImg" />
                       <span className="sidebarFriendName">Raden AJeng Patah</span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/person/2.jpeg" alt="person" className="sidebarFriendImg" />
                       <span className="sidebarFriendName">Rika Aulia</span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/person/2.jpeg" alt="person" className="sidebarFriendImg" />
                       <span className="sidebarFriendName">Nanang Santoso</span>
                   </li>
               </ul>
           </div>
        </div>
    )
}
export default Sidebar;