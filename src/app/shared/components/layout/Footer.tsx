import React from 'react';

export function Footer() {
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <h6 className="footer-title">About</h6>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deserunt quod dignissimos officiis esse laboriosam temporibus aliquid maiores. Distinctio est veniam repellendus voluptate nemo nesciunt quos eaque ratione deleniti nam?</p>
          </div>
          <div className="col col-3">
            <h6 className="footer-title">Categories</h6>
            <ul className="footer-links">
              <li><a href="#">Food</a></li>
              <li><a href="#">Sport</a></li>
              <li><a href="#">Education</a></li>
            </ul>
          </div>
          <div className="col col-3">
            <h6 className="footer-title">About Us</h6>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-8">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by ST Blog.</p>
          </div>
          <div className="col col-4">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
  </footer>
  );
}
