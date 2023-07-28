import styles from "./ourBusiness.module.css";

const Item = ({ img = "", label }: any) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={img} />
      <p className={styles.label}>{label}</p>
    </div>
  );
};
const OurBusiness = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dotsWrapper}>
        <button className={styles.btn}>our Businesses</button>
      </div>
      <p className={styles.title}>oUR bUSINESSES</p>
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
  );
};

export default OurBusiness;
