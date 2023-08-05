import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Menu from "@/icons/menu";

import FaceBook from "@/icons/facebook";
import LinkedIn from "@/icons/linkedin";
import Instagram from "@/icons/instagram";
import Close from "@/icons/Close";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setIsMobile(window.innerWidth <= 600);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.navContainer}>
      {(showNav || !isMobile) && (
        <div className={styles.subNav}>
          <p className={styles.navLinks}>Who we are</p>
          <p className={styles.navLinks}>Our Business</p>
          <p className={styles.navLinks}>Reviews</p>
          <p className={styles.MobnavLinks}>News & Media</p>
          <p className={styles.MobnavLinks}>Contact us</p>
        </div>
      )}
      <div>
        <img className={styles.logo} src="/images/Logo.png" />
      </div>
      <button onClick={handleNav} className={styles.menuWrapper}>
        {showNav ? (
          <Close fill="white" className={styles.closeIcon} />
        ) : (
          <Menu fill="white" className={styles.menu} />
        )}
      </button>
      <div className={styles.subNavContact}>
        <p className={styles.navLinks}>News & Media</p>
        <p className={styles.navLinks}>Contact us</p>
        <FaceBook />
        <LinkedIn />
        <Instagram />
      </div>
    </div>
  );
};

export default NavBar;
