import React, { useContext } from "react";
import "./Footer.scss";
// import "./Navbar/NewNav.scss";


import { links, social } from "../Navbar/data.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-center">
          <div className="footer-header">
            <p>Ecommerce de Juegos</p>
          </div>
          <div className="links-container">
            <ul className="links">
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
      </footer>
    </>
  );
};

export default Footer;
