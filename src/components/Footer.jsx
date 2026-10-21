import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <Link to="/" aria-label="Go to home">
            <img src="/sumoriya-official-logo-transparent.png" alt="Sumoriya Organic Agro Gold Private Limited" className="footer-logo" width="1024" height="342" />
          </Link>
          <p className="footer-description">
            Practical Cordyceps cultivation training, production unit setup guidance, expert consultation and structured buyback support for eligible production partners across India.
          </p>
        </div>

        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/cordyceps">Cordyceps Militaris</Link></li>
            <li><a href="/#process">Production Setup</a></li>
            <li><a href="/#gallery">Training & Gallery</a></li>
            <li><a href="/#buyback">Buyback</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Contact</h3>
          <div className="footer-contact">
            <div className="footer-contact-item"><MapPin size={16} color="var(--gold)" /><span>India-wide support</span></div>
            <div className="footer-contact-item"><Phone size={16} color="var(--gold)" /><a href="tel:+919358463311">+91 93584 63311</a></div>
            <div className="footer-contact-item"><Mail size={16} color="var(--gold)" /><a href="mailto:sumoriyaorganic@gmail.com">sumoriyaorganic@gmail.com</a></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sumoriya Organic Agro Gold Pvt. Ltd. All Rights Reserved.</span>
        <span>Practical knowledge. Real training. Real opportunities.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
