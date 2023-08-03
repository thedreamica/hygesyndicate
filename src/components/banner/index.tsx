import styles from "./banner.module.css";
import Up from "@/icons/up";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {/* first */}
        <div className={styles.sliderDiv1}>
          <div className={styles.contentDiv}>
            <p className={styles.heading}>
              Unlocking{" "}
              <strong className={styles.headHighLight}>
                Business Opportunities
              </strong>{" "}
              Across Multiple Industries
            </p>
            <p className={styles.subHeading}>
              Our diverse portfolio spans various industries, offering
              exceptional growth and investment opportunities.
            </p>
            <button className={styles.button}>
              Contact us &nbsp;
              <Up fill="#fff" />
            </button>
          </div>
        </div>
        {/* second */}
        <div className={styles.sliderDiv2}>
          <div className={styles.contentDiv}>
            <p className={styles.heading}>
              Countless{" "}
              <strong className={styles.headHighLight}>Investment Plans</strong>{" "}
              And Limitless Solutions
            </p>
            <p className={styles.subHeading}>
              Stay ahead in this digital world with our diverse portfolio
              spanning multiple industries.
            </p>
            <button className={styles.button}>
              Contact us &nbsp;
              <Up fill="#fff" />
            </button>
          </div>
        </div>
        {/* third */}
        <div className={styles.sliderDiv3}>
          <div className={styles.contentDiv}>
            <p className={styles.heading}>
              Enabling{" "}
              <strong className={styles.headHighLight}>Diversity </strong>{" "}
              Through Inclusive Service Portfolio{" "}
            </p>
            <p className={styles.subHeading}>
              Stay ahead in this digital world with our diverse portfolio
              spanning multiple industries.
            </p>
            <button className={styles.button}>
              Contact us &nbsp;
              <Up fill="#fff" />
            </button>
          </div>
        </div>
        {/* fourth */}
        <div className={styles.sliderDiv4}>
          <div className={styles.contentDiv}>
            <p className={styles.heading}>
              Enabling Adapting Sustainability For A{" "}
              <strong
                style={{ color: "#789D17" }}
                className={styles.headHighLight}
              >
                Brighter Future
              </strong>
            </p>
            <p className={styles.subHeading}>
              We can create a future where industries and businesses flourish
              with the pinch of sustainability
            </p>
            <button className={styles.button}>
              Contact us &nbsp;
              <Up fill="#fff" />
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
