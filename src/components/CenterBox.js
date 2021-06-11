import React from "react";
import { IoMdChatboxes, IoIosCloseCircleOutline } from "react-icons/io";
import details from "./settingdetails";

function CenterBox() {
  function handleDetails(content) {
    return (
      <div className="individual-settings">
        <p style={{ fontSize: "16px" }}>{content.maintext}</p>
        <p style={{ fontSize: "12px" }}>{content.subtext}</p>
      </div>
    );
  }

  return (
    <div className="center-box">
      <div className="setting-name">
        <p style={{ color: "#e1e8eb" }}>Event Settings</p>
        <hr style={{ color: "gray", size: "100" }}></hr>
        <p style={{ fontWeight: "normal", padding: "6px 6px" }}>General</p>
        <p style={{ fontWeight: "normal", padding: "6px 6px" }}>Privacy</p>
        <p style={{ fontWeight: "normal", padding: "6px 6px" }}>Features</p>
        <p style={{ fontWeight: "normal", padding: "6px 6px" }}>
          Customization
        </p>
        <p style={{ fontWeight: "normal", padding: "6px 6px" }}>Integration</p>
        <p style={{ fontWeight: "normal", padding: "6px 6px" }}>
          Session Settings
        </p>
        <p style={{ fontWeight: "normal", padding: "6px 6px" }}>My plans</p>
      </div>

      <div className="setting-content">
        <div className="settings-heading my-4">
          <div style={{ padding: "10px 30px 0px 30px" }}>
            <IoMdChatboxes size="30px" />
            <span style={{ marginLeft: "6px", fontWeight: "bolder" }}>
              Audience Q&A
            </span>
            <hr style={{ width: "70%", margin: "8px" }}></hr>
          </div>
          {details.map(handleDetails)}
        </div>

        <div className="close-icon">
          <IoIosCloseCircleOutline size="33px" />
        </div>
      </div>
    </div>
  );
}

export default CenterBox;
