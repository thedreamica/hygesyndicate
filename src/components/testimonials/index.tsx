import styles from "./testimonials.module.css";
import Heading from "../common/heading";
import Testimonial from "@/icons/testimonial";

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
      <p>{name}</p>
    </div>
  );
};
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
const Testimonials = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
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
      <Heading text="Testimonials" />
      <p className={styles.subHeading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis nostrud
        exercitation
      </p>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
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
