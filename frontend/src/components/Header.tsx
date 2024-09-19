import { useAuth } from "../context/AuthContext";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const auth = useAuth();

  return (
    <React.Fragment>
      <div id="header">
        <div className="text-center">
          <h1 className="mb-0"><a href="http://www.mwu.edu.np/">MID-WEST UNIVERSITY</a></h1>
          <div className="description">Promoting Access to Affordable and Quality Education</div>
        </div>
      </div>
      <hr></hr>
      <header>
        <div className="main-header">
          <div className="main-color">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-sm-8 col-xs-12">
                  <div className="upper-header-info">
                    <ul>
                      <li>
                        <a href="#"><i className="fa fa-newspaper" aria-hidden="true"></i> &nbsp; eBidding</a></li>
                      <li><a href="mailto:info@mu.edu.np"><i className="fa fa-envelope" aria-hidden="true"></i> &nbsp; Check mail</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 col-sm-4 col-xs-12">
                  <div className="upper-header-info d-flex justify-content-end">
                    <ul>
                      <li><a href="https://www.google.com/maps/place/Mid-western+University+Main+Campus/@28.589562,81.623193,14z/data=!4m5!3m4!1s0x0:0xf61e67f2ff0821e!8m2!3d28.5895618!4d81.623193?hl=en-US" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp; Birendranagar-9, Surkhet, Nepal</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="bottom-header">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12">
                  <div className="bottom-header-info left-info">
                    <p><i className="fa fa-phone-square" aria-hidden="true"></i> Call us : <span><a href="tel:">+977-083-524681</a></span></p>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i> Email us : <span><a href="mailto:info@mu.edu.np">info@mu.edu.np</a></span></p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="logo-holder text-center">
                    <a href="http://www.mwu.edu.np">
                      <img src="http://www.mwu.edu.np/wp-content/themes/muniversity/images/mu logo.png" width="95" alt="" /></a>
                    <h1 className="mb-0 text-danger">मध्यपश्चिम विश्वविद्यालय</h1>
                    <h3>Mid-West University</h3>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12 d-flex align-items-center justify-content-end">
                  {auth?.isLoggedIn ? (
                    <>
                      <Button size="small" variant="contained" color="success">
                        <Link to={"/chat"} >Go to Chat</Link>
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ marginInlineStart: 1 }}
                        onClick={auth.logout}
                      >
                        logout
                      </Button>
                    </>) : (
                    <>
                      <Button variant="contained" size="small">
                        <Link to={"/login"} >Sign In</Link>
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ marginInlineStart: 1 }}
                      >
                        <Link to={"/signup"} >Sign Up</Link>
                      </Button>
                    </>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="clearfix"></div>
      <div className="menu-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="custom-menu">
                <div className="cssmenu">
                  <div id="indicatorContainer"><div id="pIndicator"><div id="cIndicator"></div></div></div>
                  <ul>
                    <li id="menu-button">
                      <a>MENU</a>
                    </li>
                    <li>
                      <a href="/" aria-current="page">Home</a>
                      <ul className="sub-menu">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About University</a></li>
                        <li><a href="#">Message from Vice-Chancellor</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Authority Hierarchy</a></li>
                        <li><a href="#">Governing Bodies</a></li>
                        <li><a href="#">Mission</a></li>
                        <li><a href="#">Vision</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Administration</a>
                      <ul className="sub-menu">
                        <li><a href="#">Vice-Chancellor’s Office</a></li>
                        <li><a href="#">Registrar’s Office</a></li>
                        <li><a href="#">Examination Management Office</a></li>
                        <li><a href="#">Financial Administration Office</a></li>
                        <li><a href="#">General Administration Office</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Academics</a>
                      <ul className="sub-menu">
                        <li><a href="#">Deans</a></li>
                        <li><a href="#">Directorates</a></li>
                        <li><a href="#">Campuses</a></li>
                        <li><a href="#">Admission Proccess</a></li>
                        <li><a href="#">QAAD</a>
                          <ul className="sub-menu">
                            <li><a href="#">EQASA</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Partnership Guidelines</a></li>
                      </ul>
                    </li>
                    <li><a href="#">MU Service Commission</a>
                      <ul className="sub-menu">
                        <li><a href="#">Vacancy from the MWU Service Commission .</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Publication</a>
                      <ul className="sub-menu">
                        <li><a href="#">मध्यपश्चिम विश्वविद्यालय ऐन, २०६७</a></li>
                        <li><a href="#">Twenty Years Strategic Plan</a></li>
                        <li><a href="#">Mid-Western University Digital, Virtual and Alternative Teaching-Learning and Operating Systems Policy Guidelines 2020</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
