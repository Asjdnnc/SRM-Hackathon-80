import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <>
      {(isCollapsed) ? (
        <div className={styles.sidebar}>
          <div className={styles.controls}>
            <div
              className={styles.collapseSidebar}
              onClick={()=> {
                setIsCollapsed(prev=>!prev);
              }}
            >
              <img src="../../../src/assets/Hamburger.svg" alt="Hamburger" draggable="false" />
              <p>Collapse Sidebar</p>
            </div>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/Home.svg" alt="Home" draggable="false" />
              <p>Home</p>
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/thumbs-up.svg" alt="liked videos" draggable="false" />
              <p>Liked Videos</p>
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/clock-rewind.svg" alt="History" draggable="false" />
              <p>History</p>
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/MyContent.svg" alt="My Content" draggable="false" />
              <p>My Content</p>
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/folder.svg" alt="Collection" draggable="false" />
              <p>Collection</p>
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/Subscribers.svg" alt="Subscribers" draggable="false" />
              <p>Subscribers</p>
            </NavLink>
          </div>
          <div className={styles.settings}>
            <NavLink to="#" className={styles.navlink}>
              <img
                src="../../../src/assets/help-circle.svg"
                alt="About Developer"
                draggable="false"
              />
              <p>About Developer</p>
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/Settings.svg" alt="Settings" draggable="false" />
              <p>Settings</p>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className={styles.sidebarShrunk}>
          <div className={styles.controls}>
            <div
              className={styles.collapseSidebar}
              onClick={()=>setIsCollapsed((prev) => !prev)}
            >
              <img src="../../../src/assets/Hamburger.svg" alt="Hamburger" draggable="false" />
            </div>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/Home.svg" alt="Home" draggable="false" />
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/thumbs-up.svg" alt="liked videos" draggable="false" />
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/clock-rewind.svg" alt="History" draggable="false" />
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/MyContent.svg" alt="My Content" draggable="false" />
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/folder.svg" alt="Collection" draggable="false" />
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/Subscribers.svg" alt="Subscribers" draggable="false" />
            </NavLink>
          </div>
          <div className={styles.settings}>
            <NavLink to="#" className={styles.navlink}>
              <img
                src="../../../src/assets/help-circle.svg"
                alt="About Developer"
                draggable="false"
              />
            </NavLink>
            <NavLink to="#" className={styles.navlink}>
              <img src="../../../src/assets/Settings.svg" alt="Settings" draggable="false" />
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
