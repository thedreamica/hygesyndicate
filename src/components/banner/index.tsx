import Up from "@/icons/up";
import styles from "./banner.module.css";

import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        Your{" "}
        <strong className={styles.headHighLight}>All-in-One Solution</strong>{" "}
        for Investment and Excellence
      </p>
      <p className={styles.subHeading}>
        Our diverse portfolio spans various industries, offering exceptional
        growth and investment opportunities.
      </p>
      <button className={styles.button}>
        Contact us &nbsp;
        <Up />
      </button>
      <div className={styles.carouselWrapper}>
        <Slider {...settings}>
          <img className={styles.image} src="/images/bannerImage.png" />
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
