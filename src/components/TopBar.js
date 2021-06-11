import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";

function TopBar() {
  return (
    <div className="topbar">
      <BiMenuAltLeft
        style={{
          padding: "2px 0px",
          marginLeft: "7px",
          transform: "translateY(-1px)",
        }}
        size="33px"
      />
      <span>Admin Dashboard</span>
    </div>
  );
}

export default TopBar;
