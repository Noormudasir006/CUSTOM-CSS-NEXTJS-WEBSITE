import React from 'react'
import styles from './story.module.css'
import Image from 'next/image'
import one from '/public/one.webp'
//  '../src/app/HeroSection.module.css'
const Story = () => {
  return (
    <div>  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <div className={styles.card}>
        {/* <h2>Signature flavors</h2> */}
        <h3>Who we are</h3>
        <h4>We are a creative-led, community-spirited company on a mission to make better ice creams and bring people together.</h4>
        {/* <button className={styles.ctaButton}>SHOP ALL FLAVOURS</button> */}
      </div>
    </div>
  </section>
  <div className={styles.standardIceCream}>
      <h2>A NEW STANDARD IN ICE CREAM</h2>
      <p>
        We build ice creams completely from scratch using a unique recipe honed and perfected over more than 20 years 
        by our founder, Jeni Britton. Our ice creams have a uniquely smooth texture and buttercream body, with bright 
        flavor and clean finish. We&apos;re here to set new standards for ice cream classics and to create our own. At Jeni&apos;s, 
        you&apos;ll find flavors inspired by our curiosities—art, history, pop culture, and beyond—that simply don&apos;t exist 
        anywhere else.
      </p>
    </div>
    <div className={styles.flexCenter}>
     <Image src={one} alt=''/>
    <div className={styles.content}>
          <h2>Meet Jeni</h2>
          {/* <h3>PINT CLUB</h3> */}
          <p className={styles.description}>
          Our founder literally wrote the book on ice cream—and she has the James Beard Award to prove it. With her ahead-of-the-trend vision, Jeni revolutionized the ice cream industry, forever changing the way ice cream is made.
          </p>
          <button className={styles.button}>THE JENI&apos;S STORY</button>
        </div>
        </div>
</div>
  )
}

export default Story;