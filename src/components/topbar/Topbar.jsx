import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to={"/"} style={{textDecoration:'none'}}>
          <span className="logo">CawaApps</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, post or video"
            type="text"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbariconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbariconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbariconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImage" />
      </div>
    </div>
  );
};
export default Topbar;
