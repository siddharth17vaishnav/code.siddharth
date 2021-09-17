import React from 'react';
import profileimg from '../Assets/images/profile.jpeg';
import '../App.css';
import Resume from '../Assets/Resume/CV.pdf'

const AboutMe = () => {
    return (
        <div>
            <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                        <img src={profileimg} class="img-fluid " alt="" style={{borderRadius:"50%"}}/>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">
                        <p><span class="title-s">Name: </span> <span>Siddharth Vaishnav</span></p>
                        <p><span class="title-s">Profile: </span> <span>front end developer</span></p>
                        <p><span class="title-s">Email: </span> <span>siddharth17vaishnav@gmail.com</span></p>
                        <p><span class="title-s">Phone: </span> <span>9409239563</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="skill-mf">
                    <p class="title-s">Skill</p>
                    <span>HTML</span> <span class="pull-right">85%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" ></div>
                    </div>
                    <span>CSS3</span> <span class="pull-right">75%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" ></div>
                    </div>
                    <span>PHP</span> <span class="pull-right">50%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" ></div>
                    </div>
                    <span>JAVASCRIPT</span> <span class="pull-right">90%</span>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" ></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        About me
                      </h5>
                    </div>
                    <p class="lead">
                                        I'm BCA student ,front end developer,gamer and
                    weeb. things i've been recently excited about are
                    reactjs , javascript and react native.
                    </p>
                    <p class="lead">
                    I'm a bit of a digital product junky. Over the years, I've used so many of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.
                    </p>
                    
                    <form action={Resume} target="_blank"> 
                    <button className="btn btn-primary" style={{borderRadius:50,color:"white",marginTop:55}} type="submit" >View Resume</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </section>
        </div>
    )
}

export default AboutMe
