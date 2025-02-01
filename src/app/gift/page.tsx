import React from 'react';
import styles from './gift.module.css';
import Image from 'next/image';
import one from '/public/one.webp'
import two from '/public/two.webp'
import three from '/public/three.webp'
import four from '/public/four.webp'
import five from '/public/five.webp'
import six from '/public/six.webp'
import seven from '/public/seven.webp'
import eight from '/public/eight.webp'

const Gift = () => {
  return (
    <div className={styles.giftContainer}>
      <h2>GIFTS BY OCCASION</h2>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
         <Image src={one} alt='' />
          <p className={styles.description}>Birthday Gift</p>
        </div>
        <div className={styles.gridItem}>
          <Image src={two} alt=''/>
          <p className={styles.description}>Valentine&apos;s Day Gifts</p>
        </div>
        <div className={styles.gridItem}>
        <Image src={three} alt='' />
          <p className={styles.description}>Pint Club</p>
        </div>
        <div className={styles.gridItem}>
        <Image src={four} alt='' />
          <p className={styles.description}>New Parent Gifts</p>
        </div>
        <div className={styles.gridItem}>
        <Image src={five} alt='' />
          <p className={styles.description}>Thank You Gifts</p>
        </div>
        <div className={styles.gridItem}>
        <Image src={six} alt='' />
          <p className={styles.description}>Gift Cards</p>
        </div>
        <div className={styles.gridItem}>
        <Image src={seven} alt='' />
          <p className={styles.description}>Corporate Gifts</p>
        </div>
        <div className={styles.gridItem}>
        <Image src={eight} alt='' />
          <p className={styles.description}>Merch</p>
        </div>
        
      </div>
    </div>
  );
};

export default Gift;
