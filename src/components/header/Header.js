import React,{useState} from "react";
import "./style/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import  { Link } from 'react-router-dom'

function Header() {
const [inputSearch, setInputSearch] = useState('');

const handle = () => {
  document.getElementById('search').value="";
}

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon fontSize="small" />
        <Link to="/" >
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
          title="YouTube Ana Sayfası"
        />
        </Link>
        <span>TR</span>
      </div>

      <div className="header__center">
        <input 
        id="search"
        value={inputSearch}
        onChange={e=> setInputSearch(e.target.value)}
        type="text" 
        placeholder="  Ara" />
        
        <Link className="link" to={`/search/${inputSearch}`}>
        <SearchIcon onClick={handle} fontSize="small" className="header__inputButton" title="Ara" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallIcon  className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon  className="header__icon" />
        <Avatar
        fontSize="small"
          src="https://avatars2.githubusercontent.com/u/50380623?s=460&u=8cce52252e9db58e3df6b003b07a64d05e714b76&v=4"
          alt="Cagri Acar"
        />
      </div>
    </div>
  );
}

export default Header;