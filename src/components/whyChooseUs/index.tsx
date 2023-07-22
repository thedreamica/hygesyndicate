import Book from "@/icons/book";
import Bulb from "@/icons/bulb";
import Direction from "@/icons/direction";
import HandShake from "@/icons/handShake";
import Plus from "@/icons/plus";
import UserGear from "@/icons/userGear";
import Heading from "../common/heading";

import styles from './whyChooseUs.module.css'

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
      <div className={styles.content}>
        <Heading text="Why choose us" />
        <p className={styles.subHeading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis
          nostrud exercitation
        </p>
        <div>
          <img src="/images/whyChooseUs.png " />
        </div>
      </div>                    
      <div className={styles.offering}>
        <Item label="Versatility and Adaptability" icon={<Direction className={styles.icon} fill="#FFFFFF"/>} />
        <Item label="Wide Range of Services" icon={<Plus className={styles.icon} fill="#FFFFFF"/>}/>
        <Item label="Shared Knowledge" icon={<Book className={styles.icon}  fill="#FFFFFF"/>}/>
        <Item label="Synergistic Opportunities" icon={<Bulb className={styles.icon} fill="#FFFFFF"/>} />
        <Item label="Simplified Management" icon={<UserGear className={styles.icon} fill="#FFFFFF"/>} />
        <Item label="Trust and Reliability" icon={<HandShake className={styles.icon} fill="#FFFFFF"/>} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
