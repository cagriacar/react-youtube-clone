import React from "react";
import "./style/Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Anasayfa" />
      <SidebarRow Icon={WhatshotIcon} title="Trendler" />
      <SidebarRow Icon={SubscriptionsIcon} title="Abonelikler" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Kitaplık" />
      <SidebarRow Icon={HistoryIcon} title="Geçmiş" />
      <SidebarRow Icon={OndemandVideoIcon} title="Videolarınız" />
      <SidebarRow Icon={WatchLaterIcon} title="Daha sonra izle" />
      <SidebarRow Icon={ThumbUpOutlinedIcon} title="Beğendiğim videolar" />
      <SidebarRow Icon={ExpandMoreIcon} title="Daha fazla göster" />
      <hr />
    </div>
  );
}

export default Sidebar;
