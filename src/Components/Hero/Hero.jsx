import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import slider from'../../assets/slider1.png'
import '../../App.css'

const Hero = () => {
  return (
    <div id="hero" className="carousel carousel-style slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
         
          <img src={slider}srcset="" className="d-block w-100" alt="First slide" /> 
          <div className="carousel-caption d-block">
            <h1 className="hero-heading">
              ACHIEVE YOUR <br /> <span>"BUSINESS GOALS"</span>
            </h1>
            <div className="btn-content">
              <h5>HAVE A PROJECT?</h5>
              <span>We Can Help {">"}</span>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <img src={slider}srcset="" className="d-block w-100" alt="second slide" /> 
          <div className="carousel-caption d-block">
            <h1 className="hero-heading">
              ACHIEVE YOUR <br /> <span>"BUSINESS Dreams"</span>
            </h1>
            <div className="btn-content">
              <h5>HAVE A PROJECT?</h5>
              <span>We Can Help {">"}</span>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <img src={slider}srcset="" className="d-block w-100" alt="third slide" /> 
          <div className="carousel-caption d-block">
            <h1 className="hero-heading">
              ACHIEVE YOUR <br /> <span>"BUSINESS Success"</span>
            </h1>
            <div className="btn-content">
              <h5>HAVE A PROJECT?</h5>
              <span>We Can Help {">"}</span>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#hero" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero;
