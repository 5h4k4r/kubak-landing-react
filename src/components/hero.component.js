import React from 'react';
import mobileImage from "../assets/images/mobile.png";
import kubakLogo from "../assets/images/kubak.png";
import './hero.component.css';


function Hero() {
  return <div>
    <div className="hero">
      <div className="container h-100 position-relative">

        <div style={{ position: 'absolute', bottom: '20px', left: '10px', fontWeight: 300 }}> <span
          style={{ fontSize: '32px', color: '#f38e3e' }}>256 </span>
          <i>Views</i>
        </div>

        <div className="d-flex justify-content-between align-items-center py-5">
          <img src={kubakLogo} />
          <div className="d-flex align-items-center">
            <ul>

              <a href="mailto:info@kubak.dev">
                <li><button>Let's talk</button></li>
              </a>

            </ul>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-6 col-sm-12 order-xs-2 d-flex align-items-center">
            <span className="title">We create <strong>the app</strong> you need!</span>
          </div>
          <div className="col-md-6 col-sm-12 order-md-2 text-center image-section" style={{ zIndex: 2 }}>
            <img src={mobileImage} className="hero-image" alt="" />

          </div>
        </div>

      </div>
      <div className="circle">
      </div>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mt-3">

          <div className="d-flex align-items-center" style={{ color: '#f38e3e' }}>

            <span className="material-icons">person</span> &nbsp;
            Human Centered
          </div>
          <p style={{ fontWeight: 300, fontSize: '12px' }}>The human perspective is the genuine way to problem-solving, and enjoyable UX is helping in making dramatic
            change.</p>

        </div>
        <div className="col-lg-6 col-sm-12 mt-3">
          <div className="d-flex align-items-center" style={{ color: '#f38e3e' }}>

            <span className="material-icons">autorenew</span> &nbsp;
            Cross platform
          </div>
          <p style={{ fontWeight: 300, fontSize: '12px' }}>
            small and diverse teams ensure that all talents and experience are available at all stages of the life-cycle,
            impacting the end product's quality.
          </p>

        </div>
      </div>
    </div>
  </div >
    ;
}

export default Hero;