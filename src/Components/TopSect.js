import React from "react";
import { FaSearch } from "react-icons/fa";


function TopSect() {

  return (
    <div className="top-section">
      <div className="user-info">
        <div className="user-img">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
        </div>
        <p className="user-name">Welcome Manvendra</p>

      </div>

      

      <div className="search-box">
        <input type="text" placeholder="Search food..." />
        <i>
          <FaSearch />
        </i>
      </div>
    </div>
  );
}

export default TopSect;
