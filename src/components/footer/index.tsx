import { useEffect, useState } from "react";
import styles from "../footer/footer.module.css";

import FooterFaceBook from "@/icons/FooterFaceBook";
import Footertwitter from "@/icons/Footertwitter";
import FooterInsta from "@/icons/FooterInsta";

import ArrowDown from "@/icons/ArrowDown";
import FooterOffice from "@/icons/FooterOffice";

const Footer = () => {
  const [Links, setLinks] = useState(false);
  const [office, setOffice] = useState(false);

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

  const handleLinksBtn = () => {
    setLinks(!Links);
  };

  const handleOfficeBtn = () => {
    setOffice(!office);
  };

  return (
    <div className={styles.footer}>
      <footer className={styles.container}>
        {/* logo */}
        <div>
          <div>
            <img className={styles.logo} src="/images/Logo.png" />
          </div>
          <p className={styles.slogo}>
            Contribute Positively to the communities we serve
          </p>
          <a href="mailto:support@hygesyndicate.com" className={styles.mail}>
            support@hygesyndicate.com
          </a>
          <p className={styles.terms}>Terms&conditions</p>
        </div>
        {/* office */}
        <div>
          <div>
            <div className={styles.accordionWrapper}>
              <div className={styles.iconWrapper}>
                <FooterOffice />
                <p className={styles.officeHeading}>Office</p>
              </div>
              <button onClick={handleOfficeBtn} className={styles.arrowIcon}>
                <ArrowDown />
              </button>
            </div>
            {(office || !isMobile) && (
              <div>
                <div>
                  <p className={styles.titles}>
                    International Quartier Général
                  </p>
                  <p className={styles.address}>
                    No 152A,15th floor, Al Musalla Towers, Kalid Bin Al Waleed
                    road, Al Hamriya, Dubai, UAE, (Tele : 043554408, PO Box :
                    44320)
                  </p>
                </div>
                <div>
                  <p className={styles.titles}>Indian Quartier Général</p>
                  <p className={styles.address}>
                    Tidel Park, Dot Cowork 1st Floor, D Block, Tharamani,
                    Chennai 600113
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* links */}
        <div>
          <div className={styles.accordionWrapper}>
            <p className={styles.titles}>Links</p>
            <button onClick={handleLinksBtn} className={styles.arrowIcon}>
              <ArrowDown />
            </button>
          </div>
          {(Links || !isMobile) && (
            <ul
              className={`${styles.ul} ${Links && isMobile ? "showLinks" : ""}`}
            >
              <li className={styles.links}>
                <a>Home</a>
              </li>
              <li className={styles.links}>
                <a>Services</a>
              </li>
              <li className={styles.links}>
                <a>Resources</a>
              </li>
              <li className={styles.links}>
                <a>Organization</a>
              </li>
              <li className={styles.links}>
                <a>Contact us</a>
              </li>
            </ul>
          )}
        </div>
        {/* last */}
        <div>
          <p className={styles.titles}>Get in touch</p>
          <div>
            <div className={styles.iconContainer}>
              <FooterFaceBook />
              <p>Facebook</p>
            </div>
            <div className={styles.iconContainer}>
              <Footertwitter />
              <p>Twitter</p>
            </div>
            <div className={styles.iconContainer}>
              <FooterInsta />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </footer>
      {/* copyrights */}
      <div>
        <p className={styles.copytext}>
          © 2023 <span className={styles.span}>Hyge Syndicate</span>.All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
