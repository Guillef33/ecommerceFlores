import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaBeer, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";

import CartWidget from "../CartWidget/CartWidget";

import "./NewNav.css";

// import styles from "./NewNav.module.css"; 

const Newnav = ( { contador, setContador } ) => {
  const [showLinks, setShowLinks] = useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
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
          <FaBeer className="faBeer" />
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
                <li>
                  <a key={id} href={url}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="accountNav">
          <ul className="links">
            <li>
              <a href="/account">Account</a>
            </li>
          </ul>
          <CartWidget contador={contador} setContador={contador} />
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li>
                <a key={id} href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Newnav;
