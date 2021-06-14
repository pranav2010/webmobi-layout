import React from "react";
import { MdSettingsApplications } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { IoNotificationsCircleSharp } from "react-icons/io5";

function RightSidebar() {
  return (
    <div className="right-side-bar">
      <div className="profile-pic">
        <div className="online"></div>
      </div>
      <div className="right-icons">
        <MdSettingsApplications size="30px" />
      </div>
      <div className="right-icons">
        <IoIosChatbubbles size="30px" />
      </div>
      <div className="right-icons">
        <IoNotificationsCircleSharp size="30px" />
      </div>
    </div>
  );
}
export default RightSidebar;
