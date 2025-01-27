import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import './Footer'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="list-items">
          <img
          className='netflix-logo'
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt=""
          />
          <ul>
            <li>Home</li>
            <li>Series</li>
            <li>Films</li>
            <li>My list</li>
          </ul>
        </div>
        <div className="search-avatar">
          <SearchIcon fontSize="large" className="icons"/>
          
          <p >Children</p>
          <NotificationsActiveIcon fontSize="large" className="icons"/>
          <div className="search-profile">
            <Avatar sx={{ bgcolor: `#D81F26` }} variant="square" className="profile">
              A
            </Avatar>
          </div>
            <ArrowDropDownIcon fontSize="large"  />
        </div>
      </div>
    </>
  );
};

export default Navbar;
