import React from "react";
import styles from "./navBar.module.scss";
import { FaHome, FaUserCircle, FaClock, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <ul className={styles.navItems}>
        <li
          className={styles.navItem}
          title="Home"
          onClick={() => navigate("/")}
        >
          <FaHome />
        </li>
        <li className={styles.navItem} title="My Profile">
          <FaUserCircle />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
