import FaceBook from "@/icons/facebook";
import styles from "./navbar.module.css";
import LinkedIn from "@/icons/linkedin";
import Instagram from "@/icons/instagram";
import Menu from "@/icons/menu";
import { useEffect, useState } from "react";

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
        </div>
      )}
      <div>
        <img className={styles.logo} src="/images/Logo.png" />
      </div>
      <button onClick={handleNav} className={styles.menuWrapper}>
        <Menu fill="white" className={styles.menu} />
      </button>
      {(showNav || !isMobile) && (
        <div className={styles.subNavContact}>
          <p className={styles.navLinks}>News & Media</p>
          <p className={styles.navLinks}>Contact us</p>
          <FaceBook />
          <LinkedIn />
          <Instagram />
        </div>
      )}
    </div>
  );
};

export default NavBar;
