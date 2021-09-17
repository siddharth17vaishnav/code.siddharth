import React from 'react'
import '../App.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

  const email = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oxoxbnt', 'template_0tb2fzg', e.target, 'user_s07Ev7vi75OCVyeFUqGSO')
    .then((result) => {
        console.log(result.text);
        toast.success("Great! we will get back to you ASAP",{
          position:"top-center"
        });
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  }
 
    return (
        <div>
          <ToastContainer/>
  
             <section id="contact" class="paralax-mf footer-paralax bg-image sect-mt4 route" >
      <div class="overlay-mf"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-mf">
              <div id="contact" class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        Send Message Us
                      </h5>
                    </div>
                    <div>
                      <form onSubmit={email}>
                        <div class="row">
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                          </div>
                          <div class="col-md-12 text-center my-3">
                            
                          </div>
                          <div class="col-md-12 text-center">
                            <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="title-box-2 pt-4 pt-md-0">
                      <h5 class="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div class="more-info">
                      <p class="lead">
                        have a Query Contact me
                      </p>
                      <ul class="list-ico">
                        <li><span class="bi bi-geo-alt"></span> B/24 Asha Nagar ,Surat</li>
                        <li><span class="bi bi-phone"></span> (91) 94092 39563</li>
                        <li><span class="bi bi-envelope"></span><a href="mailto:siddharth17vaishnav@gmail.com"> siddharth17vaishnav@gmail.com</a></li>
                      </ul>
                    </div>
                    <div class="socials">
                      <ul>
                        <li><a href="https://www.facebook.com/siddharth.vaishnav.007/" target="_black"><span class="ico-circle"><i class="bi bi-facebook"></i></span></a></li>
                        <li><a href="https://www.instagram.com/code.siddharth/" target="_black"><span class="ico-circle"><i class="bi bi-instagram"></i></span></a></li>
                        <li><a href="https://twitter.com/siddharthvais15" target="_black"><span class="ico-circle"><i class="bi bi-twitter"></i></span></a></li>
                        <li><a href="https://www.linkedin.com/in/siddharth-vaishnav-6b44ba185/" target="_black"><span class="ico-circle"><i class="bi bi-linkedin"></i></span></a></li>
                      </ul>
                    </div>
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

export default ContactUs
