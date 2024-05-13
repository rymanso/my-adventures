import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.png";
import { isMobile } from "react-device-detect";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [expandedSidebar, setExpandedSidebar] = useState(false);
  return (
    <>
      <div className={styles.banner}>
        <img
          src={logo}
          className={styles.logo}
          alt="Logo"
          onClick={() => navigate("/")}
        />

        <div className={styles.nav}>
          {isMobile ? (
            <RxHamburgerMenu onClick={() => setExpandedSidebar(true)} />
          ) : (
            <>
              <span>
                <a href="/my-dive">My Dive</a>
              </span>
              <span>
                <a href="/">Contact Us</a>
              </span>
            </>
          )}
        </div>
      </div>
      <div
        className={`${styles.sidebar} ${
          expandedSidebar ? styles.sidebarExpanded : ""
        }`}
      >
        <div className={styles.closeSidebar}>
          <RxCross1 onClick={() => setExpandedSidebar(false)} />
        </div>
        <a href="/my-dive-school">My Dive School</a>

        <a href="/">Contact Us</a>
      </div>
    </>
  );
};
