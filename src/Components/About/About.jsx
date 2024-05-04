import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import slider from'../../assets/aboutwrapper.png'
import slider1 from'../../assets/about.png'

import '../../App.css'

const About = () => {
  return (
    <div id="about">
       <div className="about-wrapper mt-3 " id="about">
        <img src={slider} alt="aboutus" />
      </div>
      <div className="container about-content text-light">
        <div className="row">
          <div className="col-sm-12 col-10 " style={{marginTop:'7rem'}}>
            <h2>ABOUT US</h2>
          </div>
          <div className="col-sm-12 col-10 pt-5 " style={{marginTop:'8rem'}}>
            <h1>
              ULTIMATE EPERIENCES WITH STORY, EMOTION AND PURPOSE
            </h1>
          </div>
          <div className="col-lg-6 col-10 mx-auto mt-5">
            <figure>
              <img src={slider1} alt="Aboutpic" />
            </figure>
          </div>
          <div className="col-lg-6 col-10 mx-auto  mt-5 about-paragraph">
            <h6>
              “ Our mission is to produce the highest quality work for every
              clients, on every project with full of energy we have ”
            </h6>
            <span className="content">Binjamin Kao</span>
            <span>DIRECTOR</span>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
