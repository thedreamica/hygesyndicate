import styles from "./commitments.module.css";
import Up from "@/icons/up";
import Heading from "../common/heading";

const Item = ({ metric, text }: any) => {
  return (
    <div className={styles.itemWrapper}>
      <p className={styles.itemHeading}>{metric}</p>
      <p className={styles.itemContent}>{text}</p>
    </div>
  );
};
const Commitments = () => {
  return (
    <div className={styles.commitmentWrapper}>
      <div className={styles.itemsWrapper}>
        <Item metric="11+" text="Industries Served" />
        <Item metric="100%" text="Reliable Solutions" />
        <Item metric="100%" text="Customer Support" />
        <Item metric="15%+" text="Revenue Recovery" />
      </div>
      <div className={styles.contentWrapper}>
        <Heading text="Commitments" />
        <p className={styles.contentData}>
          At Hyge Syndicate, we envision being a beacon of excellence and
          innovation. We aim to create meaningful experiences for our customers
          while positively impacting our communities. At Medical Coding Hyge
          Syndicate, we are a leading provider of accurate and Efficient medical
          coding services.
        </p>
        <div>
          <div className={styles.learnWrapper}>
            <p className={styles.learnMore}>Learn more</p>
            <Up fill="#3461FF" className={styles.upIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitments;
