import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const[gmail,setGmail] =useState("")
    const notify =()=>{
       if(gmail){
        toast.success("Succesfull  ",{
          position: "top-center"
        });   
       }
    }

  return (
    <>
    <div className='allpage-background'>
        <div className='allpage-cont'>
            <h1>CONTACT US</h1>
        </div>
    </div>
    
      <div className="contact">
        <div className="contact-row">
          <div className="contact-col">
            <h2>Our Office Inforamtion</h2>
            <div className="contact-col-l con-bor">
              <i class="fa-solid fa-location-dot"></i>
              <div className="contact-cont">
                <h5>Location</h5>
                <p>
                 # Infront of Hanuman mandir Tilak college road, Katni, Madhya Pradesh 483501
                </p>
              </div>
            </div>
            <div className="contact-col-l con-bor">
              <i class="fa-solid fa-phone-volume"></i>
              <div>
                <h5>Call Us</h5>
                <p><a href='tel: 9399724133 '>9399724133</a> , <a href='tel: 9981599475'>9981599475</a></p>
              </div>
            </div>
            <div className="contact-col-l">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <h5>Email</h5>
                <p><a href='mailto:drpramoddubey222@gmail.com'>drpramoddubey222@gmail.com</a> </p>
              </div>
            </div>
          </div>
          <div className="contact-col contact-col-r">
            <h1>Enquiry Now.</h1>
        
            <form action="#" method="POST">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="UserName"
                    class="form-control"
                    placeholder="Your Name*"
                    aria-label="Your Name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    name="Number"
                    class="form-control"
                    placeholder="Your Phone"
                    aria-label="Your Phone"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input
                    type="email"
                    name="Email"
                    class="form-control"
                    placeholder="Your Email*"
                    aria-label="Your Email"
                    autoComplete="off"
                    value={gmail}
                    onChange={(e)=>setGmail(e.target.value)}
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="Subject"
                    class="form-control"
                    placeholder="Subject"
                    aria-label="Subject"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  name="Message"
                  class="form-control"
                  placeholder="Message"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Message</label>
              </div>
              <div className="send-msg">
                <button type='submit'  onClick={()=>notify()}>
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> 
      <ToastContainer />
    </>
  )
}

export default Contact
