import styles from "./ourBusiness.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Item = ({ img = "", label }: any) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={img} />
      <p className={styles.label}>{label}</p>
    </div>
  );
};
const OurBusiness = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={styles.divWrapper}>
      <Slider {...settings}>
        {/* first */}
        <div className={styles.carouselItem}>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>our Businesses</button>
          </div>
          <div className={styles.itemWrapper}>
            <Item img="/images/paradise.png" label="Hyge Paradise INN" />
            <Item img="/images/rentals.png" label="Hyge Rentals" />
            <Item img="/images/infotech.png" label="Hyge Infotech" />
            <Item img="/images/clapperboard.png" label="Hyge Clapper Board" />
            <Item img="/images/royale.png" label="Hyge Royale" />
            <Item img="/images/finance.png" label="Hyge Finance" />
            <Item img="/images/construction.png" label="Hyge Construction" />
            <Item img="/images/export.png" label="Hyge Exports" />
            <Item img="/images/clinic.png" label="Hyge Clinic" />
            <Item img="/images/lease.png" label="Hyge Lease" />
            <Item img="/images/h2o.png" label="Hyge H20" />
            <Item img="/images/hodophile.png" label="Hyge Hodophile" />
            <Item img="/images/invest.png" label="Hyge Invest" />
          </div>
        </div>
        <div className={styles.carouselItem2}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Paradise INN</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Paradise INN</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              With the best location, get the opportunity to experience comfort
              and familiarity with Hyge Paradise In. Get indulged in local
              culture and lifestyle with home-like facilities.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Infotech</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Infotech</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Experience a seamless fusion of digital marketing with healthcare
              and IT service. Our holistic approach ensures the best service in
              healthcare IT, analytics, AI, and DevOps solution along with
              digital marketing.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem4}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Royale</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Royale</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Our goal is to create an unforgettable experience for you. Enjoy
              your vacation by staying at our resorts with all luxury and
              comfort amenities.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem5}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Construction</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Construction</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Get the service of construction management from the beginning to
              the end with Hyge Construction. Our team is well-trained and
              professional in commercial as well as residential construction
              with remodeling.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem6}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Clapper Board</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Clapper Board</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Catering all your creative needs. We aim to convert your vision
              into action. Hyge Clapper Board offer creative service from
              documentary and short films to creating and making a campaign for
              your business.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem7}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Finance</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Finance</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Trusted platform for all your loan requirements. Easy to
              understand and reliable loan services for your convenience. We
              also provide financial literacy to make the decision-making
              process easier for you.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem8}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Rental</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Rental</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Hyge Rental provides all types of rental services in one place.
              Looking to rent a house, car, resort, or heavy vehicle? We have
              got all these at the best prices for you.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem9}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Lease</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Lease</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Discover a seamless leasing experience for your dream home. Our
              dedicated team simplifies the process, offering a wide selection
              of quality properties, and flexible lease options.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem10}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Clinic</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Clinic</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Experience top-notch dental services in a warm and welcoming
              environment. Our skilled team of professionals is dedicated to
              provide comprehensive oral care, from routine check-ups to
              advanced treatments.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem11}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Export</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Export</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Expand your brand&apos;s reach and conquer international markets
              with our expert export solutions. We provide opportunities to
              businesses to tap into the international market and provide
              increased opportunities.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem12}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Invest</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Invest</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Improve your financial stability and asset with Hyge Invest. We
              help individuals explore investment options in the market that can
              lead to long-term wealth gain and overall financial security.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem13}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge Hodophile</button>
          </div>
          <p className={styles.carouselTitle}>Hyge Hodophile</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Travel more for less with our affordable bus fares that don&apos;t
              compromise on quality or comfort. Experience reliable
              transportation with ample legroom, and advanced amenities.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
        <div className={styles.carouselItem14}>
          {/* heading */}
          <div className={styles.titleWrapper}>
            <p className={styles.title}>oUR bUSINESSES</p>
            <button className={styles.btn}>Hyge H2O</button>
          </div>
          <p className={styles.carouselTitle}>Hyge H2O</p>
          {/* contents */}
          <div className={styles.contentWrapper}>
            <p className={styles.para}>
              Take one step towards sustainability with our premium quality
              drinking water. Get complete customer service like online
              ordering, quick delivery, and more. Select Hyge H2O for purity and
              sustainability.
            </p>
            <button className={styles.button}>learn More</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OurBusiness;
