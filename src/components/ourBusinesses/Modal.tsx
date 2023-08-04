import React from "react";
import styles from "../ourBusinesses/ourBusiness.module.css";

const modalData = [
  {
    id: 1,
    img: "https://i.postimg.cc/vZM8fRnz/business2.png",
    title: "Hyge Paradise INN",
    desc: "With the best location, get the opportunity to experience comfort and familiarity with Hyge Paradise In. Get indulged in local culture and lifestyle with home-like facilities.",
    link: "",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/FzJ8nKML/business3.png",
    title: "Hyge Infotech",
    desc: "Experience a seamless fusion of digital marketing with healthcare and IT service. Our holistic approach ensures the best service in healthcare IT, analytics, AI, and DevOps solution along with digital marketing.",
    link: "",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/gcC2cLk1/business4.png",
    title: "Hyge Royale",
    desc: "Our goal is to create an unforgettable experience for you. Enjoy your vacation by staying at our resorts with all luxury and comfort amenities.",
    link: "",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/xqDhr2QF/business5.png",
    title: "Hyge Construction",
    desc: "Get the service of construction management from the beginning to the end with Hyge Construction. Our team is well-trained and professional in commercial as well as residential construction with remodeling.",
    link: "",
  },
  {
    id: 5,
    img: "https://i.postimg.cc/MGpW3ydf/business6.png",
    title: "Hyge Clapper Board",
    desc: "Catering all your creative needs. We aim to convert your vision into action. Hyge Clapper Board offer creative service from documentary and short films to creating and making a campaign for your business.",
    link: "",
  },
  {
    id: 6,
    img: "https://i.postimg.cc/Rhd4hr9d/business7.png",
    title: "Hyge Finance",
    desc: "Trusted platform for all your loan requirements. Easy to understand and reliable loan services for your convenience. We also provide financial literacy to make the decision-making process easier for you.",
    link: "",
  },
  {
    id: 7,
    img: "https://i.postimg.cc/SxpF3WNN/business8.png",
    title: "Hyge Rental",
    desc: "Hyge Rental provides all types of rental services in one place. Looking to rent a house, car, resort, or heavy vehicle? We have got all these at the best prices for you.",
    link: "",
  },
  {
    id: 8,
    img: "https://i.postimg.cc/3J2JkrkN/business9.png",
    title: "Hyge Lease",
    desc: "Discover a seamless leasing experience for your dream home. Our dedicated team simplifies the process, offering a wide selection of quality properties, and flexible lease options.",
    link: "",
  },
  {
    id: 9,
    img: "https://i.postimg.cc/sXxt7mKK/business10.png",
    title: "Hyge Clinic",
    desc: "Experience top-notch dental services in a warm and welcoming environment. Our skilled team of professionals is dedicated to provide comprehensive oral care, from routine check-ups to advanced treatments.",
    link: "",
  },
  {
    id: 10,
    img: "https://i.postimg.cc/76RjVzW4/business11.png",
    title: "Hyge Export",
    desc: "Expand your brand's reach and conquer international markets with our expert export solutions. We provide opportunities to businesses to tap into the international market and provide increased opportunities.",
    link: "",
  },
  {
    id: 11,
    img: "https://i.postimg.cc/rpZqBKPn/business12.png",
    title: "Hyge Invest",
    desc: "Improve your financial stability and asset with Hyge Invest. We help individuals explore investment options in the market that can lead to long-term wealth gain and overall financial security.",
    link: "",
  },
  {
    id: 12,
    img: "https://i.postimg.cc/gcX0PHdv/business13.png",
    title: "Hyge Hodophile",
    desc: "Travel more for less with our affordable bus fares that don't compromise on quality or comfort. Experience reliable transportation with ample legroom, and advanced amenities.",
    link: "",
  },
  {
    id: 13,
    img: "https://i.postimg.cc/jSXxh8Qr/business14.png",
    title: "Hyge H2O",
    desc: "Take one step towards sustainability with our premium quality drinking water. Get complete customer service like online ordering, quick delivery, and more. Select Hyge H2O for purity and sustainability.",
    link: "",
  },
];
const Modal = ({ selectedItemId, onClose }: any) => {
  const modalItem = modalData.find((item) => item.id === selectedItemId);
  const handleClose = () => {
    onClose();
  };
  if (!modalItem) {
    return null;
  }

  const { id, img, title, desc, link } = modalItem;
  return (
    <div onClick={handleClose} className={styles.modalContainer}>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          key={id}
          style={{
            backgroundImage: `url(${img})`,
          }}
          className={styles.ModalItem}
        >
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <p className={styles.btn}>{title}</p>
          </div>
          <p className={styles.carouselTitle}>{title}</p>
          <div className={styles.contentWrapper}>
            <p className={styles.para}>{desc}</p>
            <a href={link} className={styles.ModalLink}>
              learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;