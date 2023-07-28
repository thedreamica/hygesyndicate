import Up from "@/icons/up";
import styles from "../news/news.module.css";

const Item = ({ img, heading, content }: any) => {
  return (
    <div>
      <img className={styles.image} src={img} />
      <div className={styles.headDiv}>
        <p className={styles.heading}>{heading}</p>
        <Up className={styles.upIcon} />
      </div>
      <p className={styles.para}>{content}</p>
    </div>
  );
};
const News = () => {
  return (
    <div className={styles.container}>
      <Item
        img="/images/news-1.png"
        heading="Latest news"
        content="Get TO kNOW THE LATEST news & UPDATES about various industries"
      />
      <Item
        img="/images/news-2.png"
        heading="Blog"
        content="Insightful articles AND LATEST TRENDS FOR YOU"
      />
      <Item
        img="/images/news-3.png"
        heading="Sustainability"
        content="Driving positive change for a sustainable and thriving future"
      />
    </div>
  );
};

export default News;
