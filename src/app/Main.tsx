import Image from "next/image";
import styles from "./Main.module.css";
import one from '/public/one.webp'
import two from '/public/two.webp'
import three from '/public/three.webp'
import four from '/public/four.webp'
import five from '/public/five.webp'
import six from '/public/six.webp'
import seven from '/public/seven.webp'
import eight from '/public/eight.webp'
import nine from '/public/nine.avif'
import ten from '/public/ten.jpeg'
// import { TbWorld } from "react-icons/tb";

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Flavour is everything</h1>
        <p className={styles.subHeading}>
          We make unforgettable, crave-worthy flavors that bring people
          together.
        </p>
        <button className={styles.Button}>Explore the flavours</button>
        <div className={styles.flex}>
          <div>
           <Image src={one} alt=""/>
          </div>
          <div className={styles.textContent}>
            <h4 className={styles.subtitle}>Their new favorite gift</h4>
            <h2 className={styles.title}>Best Sellers Collection</h2>
            <p className={styles.description}>
              Sending ice cream to a soon-to-be fan? Start here. The five
              all-time most popular flavors we&apos;ve been making and perfecting for
              decades.
            </p>
            <button className={styles.ctaButton}>Shop the collection</button>
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <h3 className={styles.heading}>ICE CREAM FOR EVERY OCCASION</h3>
        <button className={styles.button}>Shop Now</button>
      </div>

      <div className={styles.productList}>
        <div className={styles.product}>
        <Image src={four} alt=""/>

          <h3 className={styles.productTitle}>Best Seller Collection</h3>
          <h4 className={styles.productSubtitle}>Popular for good reason.</h4>
          <h5 className={styles.productPrice}>$58.00</h5>
        </div>

        <div className={styles.product}>
        <Image src={three} alt=""/>

          <h3 className={styles.productTitle}>Crowd Pleaser Collection</h3>
          <h4 className={styles.productSubtitle}>Jeni&apos;s is in the house!</h4>
          <h5 className={styles.productPrice}>$68.00</h5>
        </div>

        <div className={styles.product}>
        <Image src={four} alt=""/>

          <h3 className={styles.productTitle}>Happy Birthday Collection</h3>
          <h4 className={styles.productSubtitle}>
            Is it even a birthday without ice cream?
          </h4>
          <h5 className={styles.productPrice}>$68.00</h5>
        </div>
      </div>

      <div className={styles.flexCenter}>
        <div className={styles.content}>
          <h2>Subscribe to Jeni&apos;s</h2>
          <h3>PINT CLUB</h3>
          <p className={styles.description}>
            Put surprise and delight on repeat with the gift of Pint Club. Every
            month, lucky members receive a curated box of four ice creams
            (usually including a sneak peek or two).
          </p>
          <button className={styles.button}>Join the Club</button>
        </div>
        <Image src={five} alt=""/>

      </div>

      <div className={styles.flexCenter}>
      <Image src={six} alt=""/>

        <div className={styles.content}>
          <h2>Subscribe to Jeni&apos;s</h2>
          <h3>PINT CLUB</h3>
          <p className={styles.description}>
            Put surprise and delight on repeat with the gift of Pint Club. Every
            month, lucky members receive a curated box of four ice creams
            (usually including a sneak peek or two).
          </p>
          <button className={styles.button}>Join the Club</button>
        </div>
      </div>

      <div className={styles.flexCenter}>
        <div className={styles.content}>
          <h2>Subscribe to Jeni&apos;s</h2>
          <h3>PINT CLUB</h3>
          <p className={styles.description}>
            Put surprise and delight on repeat with the gift of Pint Club. Every
            month, lucky members receive a curated box of four ice creams
            (usually including a sneak peek or two).
          </p>
          <button className={styles.button}>Join the Club</button>
        </div>
        <Image src={seven} alt=""/>

      </div>

      <div className={styles.instagramSection}>
        <h2 className={styles.heading}>Follow us on Instagram</h2>
        <h3 className={styles.subheading}>@jenisicecreams</h3>
        <div className={styles.imageGrid}>
          <div>
          <Image src={eight} alt=""/>

          </div>
          <div>
          <Image src={nine} alt=""/>

          </div>
          <div>
          <Image src={ten} alt=""/>

          </div>
          <div>
          <Image src={two} alt=""/>

          </div>
        </div>
      </div>




      
    </>
  );
};

export default Main;
