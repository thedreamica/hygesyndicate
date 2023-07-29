import CircleLeft from "@/icons/CircleLeft";
import Heading from "../common/heading";
import styles from "../connectWithUs/connect.module.css";
import PlusLeft from "@/icons/PlusLeft";
import PlusRight from "@/icons/plusRight";
import CircleBottom from "@/icons/CircleBottom";

const ConnectWithUs = () => {
  return (
    <div className={styles.container}>
      <CircleLeft className={styles.Circle} />
      <PlusLeft className={styles.plusLeft} />
      <PlusRight className={styles.plusRight} />
      <CircleBottom className={styles.CircleBottom} />
      <p className={styles.title}>CONTACT US</p>
      <Heading text="Connect With Us" />
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
