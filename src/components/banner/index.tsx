import styles from "./banner.module.css";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Up from "@/icons/up";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
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
        <Up fill="#fff" />
      </button>
      <div className={styles.carouselWrapper}>
        <Slider {...settings}>
          <img className={styles.image} src="/images/bannerImage.png" />
          <img className={styles.image} src="/images/banner2.png" />
          <img className={styles.image} src="/images/bannerImage.png" />
          <img className={styles.image} src="/images/banner2.png" />
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
