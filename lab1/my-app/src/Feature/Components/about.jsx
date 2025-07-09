import React from 'react';
import '../styles/about.css';
import profile from '../../assets/home2.png'; 

function About() {
  return (
    <section id="about">
 <div class="container">
    <div class="row">
        <div class="col-lg-4">
            <div class="about-img">
                <img class="animate__animated animate__backInDown"  src={profile} alt=""/>
            </div>   
        </div>
        <div class="col-lg-8">
            <div class="about-content glow-text">
                <div class="about-wrapper animate__animated animate__backInRight">
                    <span class="about-shadow">About</span>
                    <h2 class="about-main">About Me</h2>
                </div>
                <p>Hi! I'm Mostafa Omar, a passionate <span>Front-End Developer</span>  with experience building dynamic and responsive web applications using <span>Angular</span>, Vanilla 
                    JavaScript. I enjoy turning complex problems into simple, beautiful, and intuitive user interfaces. I have a strong background in both design and code, 
                    and I'm always learning new technologies to improve my skills and deliver better solutions.</p>
                

            </div>  
            <a href="https://drive.google.com/file/d/1XTsiUkERXJzjlSdcFGNrGR_1QhHPpc3c/view?usp=drive_link">
                <button class="animated-button">
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">Download CV</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
                </button>
             </a>
        </div>
    </div>
 </div>
</section>
  );
}

export default About;
