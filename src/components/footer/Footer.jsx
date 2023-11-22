import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">Cino</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://instagram.com/stormbreakerrss" target="_blank" className="footer__social-link" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" className="footer__social-link" rel="noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://facebook.com/pacino.343" target="_blank" className="footer__social-link" rel="noreferrer">
            <i className="bx bxl-facebook"></i>
          </a>
        </div>
        <span className="footer__copy">
            &#169; CinoDesu. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
