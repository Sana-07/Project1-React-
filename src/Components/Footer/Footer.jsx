import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'



const Footer = () => {
  return (
    <div className="Footer container-fluid ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-img">

            <img src="https://techsmithsbinary.netlify.app/img/logo.png" alt="" />

          </div>
          <div className="col-md-6">
            <div className="footer-content">

              <ul>
                <li> HOME</li>
                <li>ABOUT</li>
                <li>FAQS</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright text-center py-4">©copyright Binary Chemist 2022 - All Right Reserved</div>
    </div>
  );
};

export default Footer;
