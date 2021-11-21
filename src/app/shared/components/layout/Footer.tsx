import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="row">
          <div className="col col-3">
            <p className="logo">
              <Link to="/" className="logo-link"><img src="./assets/images/logo.png" alt="ST BLOG" /></Link>
            </p>
          </div>
          <div className="col col-9">
            <div className="subcribe-form">
              <form>
                <p className="subcribe-title">Subscribe now to get daily updates</p>
                <div className="input-subcribe">
                  <input type="email" placeholder="Enter your email here" />
                  <button className="btn-subcribe">SUBSCRIBE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by ST Blog.</p>
          <ul className="social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
