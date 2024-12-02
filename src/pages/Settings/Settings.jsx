import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("searching");
  const handleChangeTab = (e) => {
    setTab(e.target.getAttribute("value"));
    navigate(`/${e.target.getAttribute("value")}`);
  };
  return (
    <div className="settings">
      <div className="settings-tabs">
        <div
          className={`settings-tabs-item ${
            tab === "searching" ? "active" : ""
          }`}
          value="searching"
          onClick={handleChangeTab}
        >
          搜索
        </div>
        <div
          className={`settings-tabs-item ${tab === "setting" ? "active" : ""}`}
          value="setting"
          onClick={handleChangeTab}
        >
          设置
        </div>
      </div>
      <div className="settings-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
