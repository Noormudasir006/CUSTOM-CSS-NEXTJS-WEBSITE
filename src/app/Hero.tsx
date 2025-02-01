
import styles from './HeroSection.module.css'; 

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.card}>
          <h2>Signature flavors</h2>
          <h3>The Classics</h3>
          <h4>These are the show stopping, unforgettable flavors that make Jeni&apos;s, Jeni&apos;s.</h4>
          <button className={styles.ctaButton}>SHOP ALL FLAVOURS</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

