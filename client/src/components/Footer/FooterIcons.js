import React from "react";
import { Col } from 'react-bootstrap';
import { SiTiktok, SiInstagram, SiYoutube, SiTwitter, SiFacebook } from "react-icons/si";
import "./styles/FooterIcons.css";


function FooterIcons() {
    return ( 
<div>
<a href="https://www.tiktok.com/@griffinjoshs" id="footSocialIcon">
  <SiTiktok/>
</a>
<a href="https://www.instagram.com/griffinjoshs/" id="footSocialIcon">
  <SiInstagram/>
</a>
<a href="https://www.youtube.com/c/griffinjoshs" id="footSocialIcon">
  <SiYoutube/>
</a>
<a href="https://twitter.com/griffinjoshs" id="footSocialIcon">
  <SiTwitter/>
</a>
{/* <a href="https://www.facebook.com/griffinjoshs" id="footSocialIcon">
  <SiFacebook/>
</a> */}
</div>
)}
export default FooterIcons;