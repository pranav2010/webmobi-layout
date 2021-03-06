import React, { useState } from "react";
import {
  IoMdChatboxes,
  IoIosCloseCircleOutline,
  IoMdLock,
} from "react-icons/io";
import { RiArrowDropUpLine } from "react-icons/ri";
import details from "./settingdetails";

function CenterBox() {
  //////////// toggle component

  function Toggle(props) {
    return (
      <div class="form-check form-switch" style={{ marginBottom: "0px" }}>
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
        />
      </div>
    );
  }

  ///state of questionn number
  const [qstnClicked, setQstnclicked] = useState(1);
  // function for individual settings
  function handleDetails(content) {
    return (
      <div className="individual-settings">
        <div>
          <p style={{ fontSize: "16px" }}>{content.maintext} </p>
          <p style={{ fontSize: "12px", color: "#6b6b6b" }}>
            {content.subtext}
          </p>
          {content.key === 6 && (
            <div className="question-boxs">
              <div
                onClick={() => {
                  setQstnclicked(1);
                }}
                className={qstnClicked === 1 ? "boxs-clicked" : "boxs"}
              >
                <p>160</p>
              </div>
              <div
                onClick={() => {
                  setQstnclicked(2);
                }}
                className={qstnClicked === 2 ? "boxs-clicked" : "boxs"}
              >
                <p>240</p>
              </div>
              <div
                onClick={() => {
                  setQstnclicked(3);
                }}
                className={qstnClicked === 3 ? "boxs-clicked" : "boxs"}
              >
                <p>300</p>
              </div>
            </div>
          )}
        </div>
        <div className="toggle-switch">
          <Toggle />
        </div>
      </div>
    );
  }

  /// function for click
  const [settingClick, setSettingClick] = useState(3);

  return (
    <div className="center-box">
      {/* Setting names in left of center box  */}
      <div className="setting-name">
        <h5
          style={{
            color: "#727272",
            fontWeight: "normal",
            fontSize: "19px",
            padding: "6px 15px",
            margin: ".2rem 0",
          }}
        >
          Event Settings
        </h5>
        <hr style={{ color: "gray", size: "100", margin: "8px 8px 19px" }}></hr>
        <p
          onClick={() => {
            setSettingClick(1);
          }}
          className={settingClick === 1 ? "p-after" : "p-before"}
        >
          General
        </p>
        <p
          onClick={() => {
            setSettingClick(2);
          }}
          className={settingClick === 2 ? "p-after" : "p-before"}
        >
          Privacy
        </p>
        <p
          onClick={() => {
            setSettingClick(3);
          }}
          className={settingClick === 3 ? "p-after" : "p-before"}
        >
          Features
        </p>
        <p
          onClick={() => {
            setSettingClick(4);
          }}
          className={settingClick === 4 ? "p-after" : "p-before"}
        >
          Customization
        </p>
        <p
          onClick={() => {
            setSettingClick(5);
          }}
          className={settingClick === 5 ? "p-after" : "p-before"}
        >
          Integration
        </p>
        <p
          onClick={() => {
            setSettingClick(6);
          }}
          className={settingClick === 6 ? "p-after" : "p-before"}
        >
          Session Settings{" "}
          <IoMdLock style={{ color: "#6b6b6b", paddingBottom: "2px" }} />
        </p>
        <p
          onClick={() => {
            setSettingClick(7);
          }}
          className={settingClick === 7 ? "p-after" : "p-before"}
        >
          My plans
        </p>
      </div>

      {/* right side of center box */}
      <div className="setting-content">
        <div className="settings-heading my-4">
          <div
            style={{
              padding: "10px 30px 0px 30px",
              color: "#8f00ff",
              overflowX: "auto",
            }}
          >
            <IoMdChatboxes size="30px" />
            <span style={{ marginLeft: "6px", fontWeight: "bolder" }}>
              Audience Q&A
            </span>
            <div className="toggle-switch-main">
              <Toggle />
            </div>
            <RiArrowDropUpLine size="37px" />

            <hr style={{ width: "70%", margin: "8px" }}></hr>
          </div>
          {details.map(handleDetails)}
          <div className="save-btn pb-4">
            <button type="button" class="btn btn-primary">
              Save
            </button>
          </div>
        </div>

        <div className="close-icon">
          <IoIosCloseCircleOutline size="33px" />
        </div>
      </div>
    </div>
  );
}

export default CenterBox;
