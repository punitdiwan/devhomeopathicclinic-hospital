import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-row">
          <div className="footer-col footer-col-1">
            <h3>HOMEOPATHIC DOCTOR</h3>
            <p>
            Homeopathic and general physician   "We treat all kinds of diseases like sugar, blood pressure, piles, paralysis, migraine, genital diseases, female and male skin diseases, sciatica, kidney or gallstones, impotence, infertility, uterine lumps, pimples, hair loss, menstrual irregularities, insomnia, gas, constipation, allergies. Back or joint pain, psoriasis,,weight gain and weight loss, warts are successfully treated by homeopathy... 
            </p>
            <p><b>All Types of test Facilities like <span style={{color:"#ffff00"}}>Blood, Urine, Sugar, Blood Pressure, ECG etc.</span> Test Facilities are available.</b></p>
          </div>
          <div className="footer-col footer-col-2">
            <h3>ADDRESS</h3>
            <p>
            # Infront of Hanuman mandir Tilak college road, Katni, Madhya Pradesh 483501
            </p>
  
            <div className="contact-detail">
              <p>Contact Number : <a href="tel: 93997 24133">+91 93997 24133  </a></p>
              <p>Contact Number : <a href="tel: 99815 99475">+91 99815 99475</a></p>
              <p>Email :  <a href="mailto:drpramoddubey222@gmail.com">drpramoddubey222@gmail.com</a></p>
            </div>
            <div className="footer-icon">
              <a href="https://www.facebook.com/Drpramod.dubey.7906">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://instagram.com/dr_pramod_du_ey?igshid=Yzg5MTU1MDY=">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtube.com/@devhomeopathyclinicdrpramo8751">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
          <h3>LOCATION MAP</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.4370849326597!2d80.4202911!3d23.8386082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398161132f320521%3A0x59bc325c0f555d70!2sDev%20homeopathy%20clinic%20Dr%20pramod%20Dubey%20homoeopath%20and%20general%20physician!5e0!3m2!1sen!2sin!4v1671691108849!5m2!1sen!2sin"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="policy" id="footer-policy">
        <div className="policy-row">
          <div className="policy-col">
            <p>Copyright © Dr. Pramod Dubey</p>
          </div>
          <div className="policy-col">
            <p>
              Design with <i class="fa-sharp fa-solid fa-heart"></i> by{" "}
              <a href="https://maitretech.com/">maitretech.com</a>
            </p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Footer