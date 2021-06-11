import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { IoIosPeople, IoMdAnalytics } from "react-icons/io";
import { GoMailRead } from "react-icons/go";

function LeftSidebar() {
  return (
    <div className="left-side-bar">
      <div className="left-icons mx-3">
        <BsFillBellFill size="28px" />
        <p>Events</p>
      </div>

      <div className="left-icons mx-3">
        <IoIosPeople size="28px" />
        <p>Teams</p>
      </div>
      <div className="left-icons mx-3">
        <IoMdAnalytics size="28px" />
        <p>Analytics</p>
      </div>
      <div className="left-icons mx-3">
        <GoMailRead size="28px" />
        <p>Results</p>
      </div>
    </div>
  );
}

export default LeftSidebar;
