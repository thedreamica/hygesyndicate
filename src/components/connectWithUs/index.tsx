import styles from "../connectWithUs/connect.module.css";

const ConnectWithUs = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>CONTACT US</p>
      <p className={styles.heading}>Connect With Us</p>
      <form className={styles.form} action="">
        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder="First Name" />
          <input className={styles.input} placeholder="Last Name" />
        </div>
        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder="Contact Number" />
          <input className={styles.input} placeholder="Email Address" />
        </div>
        <input className={styles.message} placeholder="Message" />
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default ConnectWithUs;