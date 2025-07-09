import React from 'react';
import '../styles/hero.css';
import profileImage from '../../assets/hero.jpeg'; 

function Hero() {
  return (
    <section id="home">
    <div class="container" >
        <div class="row">
            <div class="col-lg-6 parent-content">
                <div class="home-content">
                    <h6 class="wow slideInLeft">hello!</h6>
                    <h1><span>I'M</span> Mostafa Omar</h1>
                    <h3>Front-End Developer</h3>
                    <h3>With Angular</h3>
                    <div class="buttons">
                       <a href="#projects"><button class="btn p-2 btn1 animate__animated animate__backInLeft">MY WORKS</button></a> 
                        <a href="https://www.linkedin.com/in/mostafa-shenawy-41b1b61b3/"><button class="btn p-2 btn2 animate__animated animate__backInRight" > <i class="fab fa-linkedin"></i>Linkedin Profile</button></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="home-img animate__animated animate__backInDown" data-wow-delay="1s"><img src={profileImage} alt="" /></div>
            </div>
        </div>
    </div>
    
</section>
  );
}

export default Hero;
