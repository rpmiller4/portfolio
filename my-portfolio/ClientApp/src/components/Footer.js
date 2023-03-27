import React, { Component } from 'react';
import footerGlassImg from '../images/footer_paint_glass.jpg';

const Footer = () => {
    return (
<section id="footer">
  <div className="container">
    <div className="row d-flex align-items-center" style={{height: "200px"}}>
      <div className="col-lg-4 col-md-4 col-sm-12 h-100 text-center">
        <img src={footerGlassImg} className="h-100 mx-auto" />
      </div>
      <div className="col-lg-8 col-md-8 col-sm-12">
        <p>
          <strong>Source attributions:</strong> Hero and card image assets produced with Midjourney and transformed with Adobe Photoshop. Base CSS layout adapted from a tutorial by Sampurna Chapagain. <br/>
          <strong>All other content copyright Robert Miller &copy; 2023</strong>
        </p>
      </div>
    </div>
  </div>
</section>
    );
}

export default Footer;