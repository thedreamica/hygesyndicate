"use client";
import { useState } from "react";
import styles from "./ourBusiness.module.css";
import Modal from "./Modal";

const Item = ({ img = "", label, itemId, onItemClick }: any) => {
  return (
    <div
      key={itemId}
      onClick={() => onItemClick(itemId)}
      className={styles.item}
    >
      <img className={styles.image} src={img} />
      <p className={styles.label}>{label}</p>
    </div>
  );
};
const OurBusiness = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null); // State to track the selected item

  const handleItemClick = (itemId: number) => {
    setSelectedItemId(itemId); // Set the selected item when clicked
  };
  return (
    <div className={styles.divWrapper}>
      <div className={styles.carouselItem}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>oUR bUSINESSES</p>
          <button className={styles.btn}>our Businesses</button>
        </div>
        <div className={styles.itemWrapper}>
          <Item
            onItemClick={handleItemClick}
            itemId={2}
            img="/images/infotech.png"
            label="Hyge Infotech"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={7}
            img="/images/rentals.png"
            label="Hyge Rentals"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={1}
            img="/images/paradise.png"
            label="Hyge Paradise INN"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={5}
            img="/images/clapperboard.png"
            label="Hyge Clapper Board"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={3}
            img="/images/royale.png"
            label="Hyge Royale"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={6}
            img="/images/finance.png"
            label="Hyge Finance"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={4}
            img="/images/construction.png"
            label="Hyge Construction"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={10}
            img="/images/export.png"
            label="Hyge Exports"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={9}
            img="/images/clinic.png"
            label="Hyge Clinic"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={8}
            img="/images/lease.png"
            label="Hyge Lease"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={13}
            img="/images/h2o.png"
            label="Hyge H20"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={12}
            img="/images/hodophile.png"
            label="Hyge Hodophile"
          />
          <Item
            onItemClick={handleItemClick}
            itemId={11}
            img="/images/invest.png"
            label="Hyge Invest"
          />
        </div>
      </div>
      <Modal
        selectedItemId={selectedItemId}
        onClose={() => setSelectedItemId(null)}
      />
    </div>
  );
};

export default OurBusiness;
