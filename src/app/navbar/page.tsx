import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import './Navbar.css'; // Custom CSS file
import Link from 'next/link';
import one from '/public/one.webp'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
     <Image src={one} alt=''/>
      </div>
      <ul className="navbar-links">
      <Link href='/'>  <li>Home</li></Link>
        {/* <li>Delivery</li> */}
        
        {/* <li>Scoop Shops</li> */}
        <Link href='/gift'><li>Gift</li></Link>

        <Link href='/story'><li>Our Story</li></Link>
      </ul>
      <div className="navbar-icons">
        <IoIosSearch className='text-semibold text-2xl'/>
        <h4 className='font-semibold'>Rewards</h4>
        <IoCartOutline className='text-semibold text-2xl' />
      </div>
    </div>
  );
};

export default Navbar;
