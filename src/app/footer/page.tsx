import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h3>Shop</h3>
        <ul>
          <li>All Flavors</li>
          <li>Collections</li>
          <li>Pint Club</li>
          <li>Merch</li>
          <li>Corporate Gifts</li>
          <li>Gift Cards</li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>Our Story</li>
          <li>Jeni Britton</li>
          <li>Join Our Team</li>
          <li>Fundraising</li>
          <li>Scoop Shops</li>
          <li>Flavor Vault</li>
        </ul>
      </div>
      <div>
        <h3>Customer Service</h3>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Shipping & Returns</li>
          <li>Ingredients & Nutrition</li>
          <li>Wholesale</li>
          <li>The Delivery Box</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
