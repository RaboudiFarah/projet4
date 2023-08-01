import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
       
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>MY SCHOOL</h1>
            <span>Private School</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          
   
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
              <i className="topIcon fab fa-facebook-square"></i>
              </li>
              <li>
              <i className="topIcon fab fa-instagram-square"></i>
              </li>
              <li>
              <i className="topIcon fab fa-twitter-square"></i>

            
              </li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
              <i className="topIcon fab fa-facebook-square"></i>
              </li>
              <li>
              <i className="topIcon fab fa-instagram-square"></i>
              </li>
              <li>
              <i className="topIcon fab fa-twitter-square"></i>
              
            
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> 
        </p>
      </div>
      </section>
    </>
  )
}

export default Footer