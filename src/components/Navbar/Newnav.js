import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaBeer, FaTwitter } from "react-icons/fa";

import { links, social } from "./data";
import { Link } from "react-router-dom";

import Logo from '../../assets/images/LogoHome-01.png'

import CartWidget from "../CartWidget/CartWidget";

import "./NewNav.scss";


// import styles from "./NewNav.module.css";

const Newnav = ({ count, setCount }) => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={"/"}>
            <img src={Logo} alt='Logo Home' className="homeLogo" />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <Link to={url} key={id}>
                  {text}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="accountNav">
          <ul className="links">
            {/* <Link to="/account">Account</Link> */}

            <Link to="/cart">
              <CartWidget 
              />
            </Link>
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <Link to={url} key={id}>
                {icon}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Newnav;
