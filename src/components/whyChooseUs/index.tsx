import Book from "@/icons/book";
import Bulb from "@/icons/bulb";
import Direction from "@/icons/direction";

import HandShake from "@/icons/handShake";
import Plus from "@/icons/plus";
import UserGear from "@/icons/userGear";

import styles from "./whyChooseUs.module.css";
import Heading from "../common/heading";
import PlusRight from "@/icons/plusRight";
import PlusLeft from "@/icons/PlusLeft";
import CircleLeft from "@/icons/CircleLeft";

const Item = ({ icon, label }: any) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.itemLabel}>{label}</div>
    </div>
  );
};
const WhyChooseUs = () => {
  return (
    <div className={styles.container}>
      <CircleLeft className={styles.CircleLeft} />
      <PlusRight className={styles.plusRight} />
      <PlusLeft className={styles.plusLeft} />
      <div className={styles.content}>
        <Heading text="Why choose us" />
        <p className={styles.subHeading}>
          We are best in business for all your multiple business ventures from
          medical coding to travel and investment. We proudly provide the best
          services across 11+ industries.
        </p>
        <img
          className={styles.imageStyles}
          src="/images/bg-chooseUs.jpg"
          alt="chooseUs"
        />
      </div>
      <div className={styles.offering}>
        <Item
          label="Dynamic Adaptivity"
          icon={<Direction className={styles.icon} fill="#FFFFFF" />}
        />
        <Item
          label="Multiple Services"
          icon={<Plus className={styles.icon} fill="#FFFFFF" />}
        />
        <Item
          label="Well-Trained Experts"
          icon={<Book className={styles.icon} fill="#FFFFFF" />}
        />
        <Item
          label="World-Class Opportunities"
          icon={<Bulb className={styles.icon} fill="#FFFFFF" />}
        />
        <Item
          label="Smooth Management"
          icon={<UserGear className={styles.icon} fill="#FFFFFF" />}
        />
        <Item
          label="Fully Reliable"
          icon={<HandShake className={styles.icon} fill="#FFFFFF" />}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
