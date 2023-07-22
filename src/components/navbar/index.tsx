import FaceBook from "@/icons/facebook"
import styles from './navbar.module.css'
import LinkedIn from "@/icons/linkedin"
import Instagram from "@/icons/instagram"

const NavBar = () => {
    return <div className={styles.navContainer}>
        <div className={styles.subNav}>
            <p className={styles.navLinks}>Who we are</p>
            <p className={styles.navLinks}>Our Business</p>
            <p className={styles.navLinks}>Reviews</p>
        </div>
        <div>
            <img className={styles.logo} src="/images/Logo.png"/>
        </div>
        <div className={styles.subNav}>
        <p className={styles.navLinks}>News & Media</p>
        <p className={styles.navLinks}>Contact us</p>
            <FaceBook />
            <LinkedIn/>
            <Instagram/>
        </div>
    </div>
}

export default NavBar