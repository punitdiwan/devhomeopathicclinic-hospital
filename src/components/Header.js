import React,{useState} from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <div className="topnav">
        <div className="topnav-row">
          <div className="topnav-col">
            <p>Registration Number <i style={{color:"#555555"}}class="fas fa-long-arrow-alt-right globalcolor"></i> 26263</p>
            <p>
            Clinic Timing - Open 10 AM. to 10 PM. All Days
            </p>
          </div>
          <div className="topnav-col topnav-col-1">
            <div className="topnav-contact">
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:drpramoddubey222@gmail.com"><span>drpramoddubey222@gmail.com</span></a>
            </div>
            <div className="topnav-contact">
              <i class="fa-solid fa-phone-volume"></i>
              <a href="tel:9399724133"><span>+91 9399724133 </span></a>
              
            </div>
            <div className="topnav-contact">
              <i class="fa-solid fa-phone-volume"></i>
              <a href="tel:9981599475"><span>+91 9981599475</span></a>
              
            </div>
            <div className="topnav-icon">
              <a href="https://www.facebook.com/Drpramod.dubey.7906">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://instagram.com/dr_pramod_du_ey?igshid=Yzg5MTU1MDY=">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtube.com/@devhomeopathyclinicdrpramo8751">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>


       {/* ---------------------------Menu-bar---------------------------- */}

       <div className="menu-bar pc-menubar">
        <div className="menubar-row">
          <div className="menubar-col-1">
            <img src="./img/flogo.png" alt="" />
          </div>
          <div className="menubar-col-1">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us </Link></li>
              <li><Link to="/treatments">Treatments </Link></li>
              <li><Link to="/gallery">Our Gallery</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
      
            </ul>
          </div>
        </div>
      </div>


      <div className="menu-bar mobile-menubar">
        <div className="menubar-row">
        <div className="menubar-col-1">
            <img src="./img/flogo.png" alt="" />
          </div>
         
          <div className={show?"menubar-mobile":"menubar-col-1"}>
            <ul>
            <button className="close-menu" onClick={()=>setShow(!show)}>{show?<i class="fa-solid fa-xmark"></i>:null}</button>
              <li  onClick={()=>setShow(!show)}><Link to="/">Home</Link></li>
              <li onClick={()=>setShow(!show)}><Link to="/aboutus">About Us</Link>
              </li>
              <li><Link to="/treatments">Treatments</Link></li>
              <li  onClick={()=>setShow(!show)}><Link to="/gallery">Our Gallery</Link></li>
              <li  onClick={()=>setShow(!show)}><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </div>
          <button className="menu-icon" onClick={()=>setShow(!show)}>{show?<i class="fa-solid fa-bars"></i>:<i class="fa-solid fa-bars"></i>}</button>
        </div>
      </div>
     
   
              {/* <button onClick={()=>setDownt(!downt)
              } className="drop-icon">{downt?<i class=" drop-icon fa-solid fa-minus"></i>:<i class=" drop-icon fa-solid fa-plus"></i>}</button>
              {
              downt?<div className="drop-link" onClick={()=>setDownt(!downt)}>
              <li  onClick={()=>setShow(!show)}><a href="/nervoussystem">Head / Brain & Nervous System </a></li>
               <li  onClick={()=>setShow(!show)}><a to="/respiration">Respiratory System </a></li>
               <li  onClick={()=>setShow(!show)}><a to="/urinary">Urinary system</a></li>
               <li  onClick={()=>setShow(!show)}><a to="/heart">Heart & Blood Circulation </a></li>
               <li  onClick={()=>setShow(!show)}><a to="/liver">Liver & Gallbladder</a></li>
               <li  onClick={()=>setShow(!show)}><a to="/eyesight">Eyes/ Sight</a></li>
               <li  onClick={()=>setShow(!show)}><a to="/mouth">Mouth, Tongue & Throat</a></li>
              </div>:""
            } */}
       
    </>
  )
}

export default Header
