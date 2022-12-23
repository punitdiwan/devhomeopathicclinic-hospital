import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="6000">
            <img src="./img/slide1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./img/slide2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./img/slide3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ------------------------------------------- */}

      <div className="about-clinic">
        <h2>
          {" "}
          ABOUT <span style={{ color: "#126b0d" }}>DEV HOMEOPATHIC CLINIC</span>
        </h2>
        <p>
          We at Dev Homeopathic Clinic are doing the services of homoeo
          medicine. Dr. Pramod Dubey & began there service in 1 February 2021.
          Dr. Pramod Dubey is a well known person in MP.
        </p>
        <p> <b>Dr. Pramod Dubey </b>is highly <b>Qualified & trained</b> in
              dealing with all kinds of diseases like sugar, blood pressure, piles, paralysis, migraine, genital diseases, female and male skin diseases, sciatica, kidney or gallstones, impotence, infertility, uterine lumps, pimples, hair loss, menstrual irregularities, insomnia, gas, constipation, allergies. Back or joint pain, psoriasis,weight gain and weight loss, warts are successfully treated by homeopathy.</p>

              <p><b>All Types of test Facilities like <span style={{color:"#126b0d"}}>Blood, Urine, Sugar, Blood Pressure, ECG etc.</span> Test Facilities are available.</b></p>

        <Link to="/aboutus">
          <button>Read More</button>
        </Link>
      </div>
      {/* ------------------------------------------- */}

      <div className="our-treat">
        <h2>
          OUR <span style={{ color: "#126b0d" }}>TREATMENTS</span>
        </h2>
        <div className="our-row">
          <div className="our-col">
            <img src="./img/1.jpeg" alt="...." />
            <h3>Piles Treatment / बवासीर का इलाज</h3>
            <div className="line-full"></div>
            <p>
              Homeopathy is ideal for Piles Treatment as it is a gentle yet
              highly effective system of medicine. Piles Treatment respond...
            </p>
          </div>
          <div className="our-col">
            <img src="./img/2.jpeg" alt="...." />
            <h3>Paralysis Treatment / पक्षाघात उपचार</h3>
            <div className="line-full"></div>
            <p>
              Homeopathy for Paralysis has been every effective in curing the
              symptoms as well as the underlying causes for the Paralysis...
            </p>
          </div>
          <div className="our-col">
            <img src="./img/3.jpg" alt="...." />
            <h3>Joint And Back Pain / पीठ दर्द और जोड़ों का दर्द</h3>
            <div className="line-full"></div>
            <p>
              Homeopathic Remedies are very effective in treating Joint and Back pain. Homeopathic medicines for body...
            </p>
          </div>
        </div>
        <div className="our-row">
          <div className="our-col">
            <img src="./img/4.jpg" alt="...." />
            <h3>Diabetes And Blood Pressure Treatment / मधुमेह, रक्तचाप उपचार </h3>
            <div className="line-full"></div>
            <p>
              While dealing with a case of Diabetes and Blood pressure treatment, a homeopath not only records
              the symptoms of the disease but also studies...
            </p>
          </div>
          <div className="our-col">
            <img src="./img/5.jpg" alt="...." />
            <h3>Gall Bladder And Kidney Stone / गॉल ब्लैडर स्टोन का इलाज</h3>
            <div className="line-full"></div>
            <p>
              Homeopathy offers a very safe and effective treatment for Gall bladder and kidney stone and other Stone problems. Homeopathic...
            </p>
          </div>
          <div className="our-col">
            <img src="./img/6.jpeg" alt="...." />
            <h3>Skin Nail And Pimple Treatment / कील मुहांसों का इलाज</h3>
            <div className="line-full"></div>
            <p>
              As Skin disorders are the end results of inner, emotional stress.
              Homeopathy don’t believe in treating the Skin...
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------- */}

      <div className="principle">
        <div className="princ-cont">
          <h5>PRINCIPLE</h5>
          <h2>
            A SUBSTANCE WHICH IN LARGE DOSES CAUSE THE SYMPTOMS OF AN ILLNESS
            CAN BE USED IN MINUTE DOSES TO RELIEVE THE SAME SYMPTOMS.
          </h2>
        </div>
      </div>
      {/* ------------------------------------------- */}

      <div className="benefit">
        <h2>
          OUR <span style={{ color: "#126b0d" }}>BENEFITS</span>
        </h2>

        <div className="benefit-row">
          <div className="benefit-col">
            <i class="fa-solid fa-user-doctor"></i>
            <h4>Effective and Fast Acting</h4>
            <p>
              Homeopathic medicine is fast acting, restoring optimal health.
              Homeopathic prescribing is effective in both acute and chronic
              conditions
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-face-smile"></i>
            <h4>Gives Lasting Relief</h4>
            <p>
              Homeopathic treatments addresses disease at the root level, hence
              enhancing resistance to disease.
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-microscope"></i>
            <h4>Free From Side Effects</h4>
            <p>
              Instead of suppressing symptoms, homeopathy gently works with the
              body to stimulate balance or healing.
            </p>
          </div>
        </div>
        <div className="benefit-row">
          <div className="benefit-col">
            <i class="fa-solid fa-user-doctor"></i>
            <h4>Safe</h4>
            <p>
              Unlike antibiotics and other medicines, homeopathic medicines will
              not hamper digestion; will not lower immune resistance; will not
              produce allergic reactions and are safe.
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-face-smile"></i>
            <h4>Build Resistance</h4>
            <p>
              Homeopathic treatments addresses disease at the root level, hence
              enhancing resistance to disease.Homeopathic prescribing is
              effective in both acute and chronic conditions
            </p>
          </div>
          <div className="benefit-col">
            <i class="fa-solid fa-microscope"></i>
            <h4>For All Life's Stages</h4>
            <p>
              Homeopathic medicines are safe for everyone because there is no
              risk of toxicity or side-effects. Homeopathy is ideal for all life
              stages including pregnant and lactating women.
            </p>
          </div>
        </div>
      </div>
     {/* ------------------------------------------------ */}

      <div className="testimonial">
        <h1>Testimonials</h1>
        <div className="border-bot"></div>
        <div className="testi-cont">
          <h3>TO WHOM SO EVER CONCERN</h3>
          <p>
            This is to state that we know Dr. Pramod Dubey for the past
            15 years. He has been treating our family for all ailments with
            good result.
          </p>
          <p>
            He is friendly that her approach cures half the decieses. We pray
            the almightly to give her good health to serve for the people.
          </p>
          <p className="italic"><em>Prakhar dwivedi</em></p>
        </div>
      </div>
  {/* ------------------------------------------- */}
    </>
  );
};

export default Home;
