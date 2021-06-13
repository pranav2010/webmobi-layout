import React, { useState } from "react";
import { BsFillBellFill } from "react-icons/bs";
import { IoIosPeople, IoMdAnalytics } from "react-icons/io";
import { GoMailRead } from "react-icons/go";
import { RiBarChartBoxFill } from "react-icons/ri";

function LeftSidebar() {
  const [iconClick, setIconclick] = useState(1);

  function handleClick() {
    setIconclick();
  }

  return (
    <div className="left-side-bar">
      <div className="webmobi-logo"></div>
      <div
        onClick={() => {
          setIconclick(1);
        }}
        className={
          iconClick === 1 ? "left-icons-clicked mx-3" : "left-icons mx-3"
        }
      >
        <RiBarChartBoxFill size="28px" />
        <p>Events</p>
      </div>

      <div
        onClick={() => {
          setIconclick(2);
        }}
        className={
          iconClick === 2 ? "left-icons-clicked mx-3" : "left-icons mx-3"
        }
      >
        <IoIosPeople size="28px" />
        <p>Teams</p>
      </div>
      <div
        onClick={() => {
          setIconclick(3);
        }}
        className={
          iconClick === 3 ? "left-icons-clicked mx-3" : "left-icons mx-3"
        }
      >
        <IoMdAnalytics size="28px" />
        <p>Analytics</p>
      </div>
      <div
        onClick={() => {
          setIconclick(4);
        }}
        className={
          iconClick === 4 ? "left-icons-clicked mx-3" : "left-icons mx-3"
        }
      >
        <GoMailRead size="28px" />
        <p>Results</p>
      </div>
    </div>
  );
}

export default LeftSidebar;
