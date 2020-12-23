import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/logo_bonanza.png';

interface Props {
  
}

const Footer = (props: Props) => {
  return (
    <div className="footerWrap">
      <div className="footer">
        <div className="logo"><img src={logo} alt="bonanza logo" /></div>
        <div className="footerMenu">
          <ul>
            <li><b>Contact us</b></li>
            <li>Help Centre</li>
            <li>The Group</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div className="footerMenu">
          <ul>
            <li><b>Information</b></li>
            <li>Terms & Conditions</li>
            <li>Payment methods</li>
            <li>Bonus Terms</li>
            <li>Responsible Gaming</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Footer;
