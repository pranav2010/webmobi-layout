import React from "react";
import "./Teams.css";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import CenterDiv from "../components/CenterDiv";

function Teams() {
  return (
    <div className="container-fluid">
      <LeftSidebar />
      <CenterDiv />
      <RightSidebar />
    </div>
  );
}

export default Teams;
