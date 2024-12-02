import { useState } from "react";
import Settings from "../Settings/Settings";
import "./Home.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="shear-plate">
      {/* 添加蒙版 */}
      {isOpen && <div className="overlay" onClick={handleOpen}></div>}
      <div className="shear-plate-header">
        <div className="fixed-moving-bar"></div>
      </div>
      <div className="shear-plate-content">
        <div className="card-grid"></div>
        <div className="card-grid"></div>
        <div className="card-grid"></div>
      </div>
      <div
        className={`sidebar-trigger ${isOpen ? "open" : ""}`}
        onClick={handleOpen}
      >
        <span className="arrow-icon">›</span>
      </div>
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <Settings />
      </div>
    </div>
  );
};

export default Home;
