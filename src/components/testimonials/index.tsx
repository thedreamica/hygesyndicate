import styles from "./testimonials.module.css";
import Heading from "../common/heading";
import Testimonial from "@/icons/testimonial";
import CircleLeft from "@/icons/CircleLeft";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Item = ({ content, name }: any) => {
  return (
    <div className={styles.item}>
      <div className={styles.testIcon}>
        <Testimonial />
        <Testimonial />
      </div>
      <p className={styles.itemContent}>{content}</p>
      <p className={styles.itemName}>{name}</p>
    </div>
  );
};
const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Heading text="Success Tales" />
      {/* <CircleLeft className={styles.Circle} /> */}
      <p className={styles.subHeading}>
        Listen to what our clients are saying about us. Join them by consuming
        our services from multiple industries.
      </p>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          <Item
            content="Hyge Construction was the best partner in our construction project. The company created our dream office building with the best quality material and with total transparency in the process."
            name="UI soup"
          />
          <Item
            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
            name="UI soup"
          />
          <Item
            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
            name="UI soup"
          />
          <Item
            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
            name="UI soup"
          />
          <Item
            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
            name="UI soup"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
