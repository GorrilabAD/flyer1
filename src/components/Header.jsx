import React, {Component} from 'react';
import '../App.css';
import qr from '../media/img/QR.png';
import phn from '../media/img/phn.png';

import {Animated} from "react-animated-css";

class Header extends Component  {

  render () {
    return (
      <div className="header_container">
        <h1 className="header_title">Smart phone App</h1>
        <p className="header_description">
           Lorem Ipsum is simply dummy text of the
           printing and typesetting industry.
           Lorem Ipsum has been the industry's
           standard dummy text ever since
        </p>

        <div className="row justify-center pt-100">
          <div
            className="col"
            style={{
              "paddingTop": "130px",
            }}
            >
          <div className="container_qr ">

            <img className="" src={qr} alt=""/>
          </div>
          <h4 className=" ">
            Scan to <br/>
            Download from Google Play
          </h4>

        </div>
          <div
            className="container_phn ">
            <img className="" src={phn} alt=""/>
          </div>
          <div className="col"
              style={{
                "paddingTop": "130px",
              }}
            >
            <div className="container_qr ">

              <img className="" src={qr} alt=""/>
            </div>
            <h4 className="">
              Scan to <br/>
              Download from App Store
            </h4>
          </div>
        </div>
      </div>
    )
  }
}
export  default Header;
