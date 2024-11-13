import React, { useState } from 'react'
import './Navbar.css'
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { LuSunMoon } from "react-icons/lu";
import { IoMoonSharp } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdShareLocation } from "react-icons/md";
import img from "../../Assets/images/about3.jpg";
import about from "../../Assets/images/about11.jpg"
import html from "../../Assets/images/html.jpg"
import css from "../../Assets/images/css.jpg"
import js from "../../Assets/images/js.jpg"
import react from "../../Assets/images/react.jpg"
import python from "../../Assets/images/Python.png"
import { MdOutlineDownload } from "react-icons/md";
import { LiaAddressBookSolid } from "react-icons/lia";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { useRef } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";

const Navbar = () => {
const homeref=useRef(null)
const aboutref=useRef(null)
const skillref=useRef(null)
const eduref=useRef(null)
const portref=useRef(null)
const contactref=useRef(null)
function movedata(data) {
  console.log(data);
  data.current.scrollIntoView({
    behavior: "smooth",
    block: "start"    
  })
}
const [open, setopen] = useState(false)
function openlist(params) {
  setopen(!open)
}
  return (
    <>
      <div className='nav'>
        <div className="left">
          <div className='logo'>
            <h1>Portfolio</h1>
            <p onClick={openlist}><MdOutlineMenu className='menu_i' /></p>
          </div>
              <div className={open?"navmenu1":'navmenu'}>
                <p onClick={()=>movedata(homeref)}>Home</p>
                <p onClick={()=>movedata(aboutref)}>About</p>
                <p onClick={()=>movedata(skillref)}>Skills</p>
                <p onClick={()=>movedata(eduref)}>Education</p>
                <p onClick={()=>movedata(portref)}>Portfolio</p>
                <p onClick={()=>movedata(contactref)}>Contact</p>
              </div>
            <div className='navicons'>
              <a href="https://www.linkedin.com/in/thanga-madasamy-7329b631b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><p><CiLinkedin /></p></a>
              <a href="https://www.instagram.com/tn84_v3_lvr/profilecard/?igsh=ajF2bXpmcHFkYmds"><p><FaInstagram /></p></a>
              <a href=""><p><FaSquareGithub /></p></a>
            </div>
        </div>

        <div className='right'>
          
              <div className='home' ref={homeref}>
                <div className='homecoin'>
                  <div className='wel'>
                    <h2>Welcome Home</h2>
                  </div>
                  <div className='profile'>
                      <h3>Thangamadasamy,</h3>
                      <h4><span className='slide-in'>Fornt-end Developer</span></h4>
                    <div className='welpara'>
                      <p><GoMail className='coin' />thangam252003@gmail.com</p>
                      <p><MdOutlinePhoneForwarded className='coin' /> +91 63793 18998</p>
                      <p><MdShareLocation className='coin' /> Rajapalayam</p>
                    </div>
                    <button> Download-CV<MdOutlineDownload className='dow'/></button>
                  </div>    
                </div>
                <div className='img'>
                    <div className='theme'>
                      <p><LuSunMoon /></p>
                      <p className='moon'><IoMoonSharp /></p>
                    </div>
                  <img src={img} alt="" />
                </div>
              </div>

              <div className='about' ref={aboutref}>
                <h2>Welcome About</h2>
                <div className='contain'>
                  <div className='ab-img'>
                    <img src={about} alt="" />
                  </div>
                  <div className='ab-details'>
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum excepturi exercitationem quia a, asperiores quos ab minus quisquam nemo? Sequi est magni voluptas eius et iste quisquam voluptatum? Numquam, quod.</p>
                    <div className='ab-skill'>
                      <button>Html</button>
                      <button>Css</button>
                      <button>Js</button>
                      <button>React</button>
                    </div>
                    <div className='ab-but'>
                      <button>Download CV<MdOutlineDownload className='dow'/></button>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className='skill' ref={skillref}>
              <h2>Welcome Skills</h2>
                <div className='sk-head'>
                  <h1>Skills</h1>
                </div>
                <div className='skill-grid'>
                  <div className='skimg'>
                    <img src={html} alt="" />
                    <p>Html</p>
                    <p>90%</p>
                      <div className="line90">
                       <div className="line09"></div>
                      </div>
                  </div>
                  <div className='skimg'>
                    <img src={css} alt="" />
                    <p>Css</p>
                    <p>95%</p>
                      <div className="line95">
                       <div className="line59"></div>
                      </div>
                  </div>
                  <div className='skimg'>
                    <img src={js} alt="" />
                    <p>Javascript</p>
                    <p>80%</p>
                      <div className="line80">
                       <div className="line08"></div>
                      </div>
                  </div>
                  <div className='skimg'>
                    <img src={react} alt="" />
                    <p>React&js</p>
                    <p>85%</p>
                      <div className="line85">
                       <div className="line58"></div>
                      </div>
                  </div>
                  <div className='skimg'>
                    <img src={python} alt="" />
                    <p>Python</p>
                    <p>20%</p>
                      <div className="line20">
                       <div className="line02"></div>
                      </div>
                  </div>
                  
                </div>
              </div>

              <div className='education' ref={eduref}>
                <div className='edu-head'>
                  <h1>Education</h1>
                </div>
                <div className='edu-con'>
                  <div className='edu-box'>
                    <h2>Kamaraj University</h2>
                    <p>2020 - 2023</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quas animi sunt similique harum nam enim maiores error inventore! Recusandae laboriosam illum assumenda vitae eaque veritatis provident vero, dignissimos, reiciendis enim exercitationem excepturi minus repudiandae dolorem cum maiores obcaecati iste!</p>
                  </div>
                  <div className='edu-box'>
                    <h2>V.H.N.S.N College</h2>
                    <h3>Bachelor of Business Administration</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quas animi sunt similique harum nam enim maiores error inventore! Recusandae laboriosam illum assumenda vitae eaque veritatis provident vero, dignissimos, reiciendis enim exercitationem excepturi minus repudiandae dolorem cum maiores obcaecati iste!</p>
                  </div>
                  <div className='edu-box'>
                    <h2>aaaaaa</h2>
                    <h3>Bachelor of Business Administration</h3>
                    <p>2020 - 2023</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quas animi sunt similique harum nam enim maiores error inventore! Recusandae laboriosam illum assumenda vitae eaque veritatis provident vero, dignissimos, reiciendis enim exercitationem excepturi minus repudiandae dolorem cum maiores obcaecati iste!</p>
                  </div>
                </div>
              </div>

              <div className='portfolio' ref={portref}>
                <div className='port-con'>
                  <h1>My Project</h1>
                </div>
                <div className='cart-con'>
                  <div className='pro-cart'>
                    <h1>Hero</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis magnam animi incidunt similique nostrum blanditiis molestias voluptate pariatur libero quos rerum eveniet, obcaecati ipsa vitae debitis nesciunt. Consectetur, perspiciatis?</p>
                  </div>
                  {/* <div className='pro-cart'>
                    <h1>Hero</h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quam. Perspiciatis aspernatur nostrum, labore numquam laudantium qui voluptates minus nulla recusandae tempore magnam, ab doloremque, vero neque velit ex vel?
                  </div>
                  <div className='pro-cart'>
                    <h1>Hero</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quisquam neque iste saepe voluptas amet autem error! Fugit culpa in aperiam excepturi iusto, nostrum eveniet cupiditate molestias ad sed tempore.</p>
                  </div> */}
                </div>
              </div>

              <div className='contact'ref={contactref}>
                <div className='title'>
                  <h1>Contact</h1>
                </div>
                <div className='contactcart'>
                  <div className='contactbox'>
                    <h1><LiaAddressBookSolid /></h1>
                    <h2>Address</h2>
                    <p>31/21 tenkasi main road</p>
                    <p>Rajapalayam-626121</p>
                  </div>
                  <div className='contactbox'>
                    <h1><MdOutlineMarkEmailRead /></h1>
                    <h2>EMail</h2>
                    <p>thangam252003@gmail.com</p>
                  </div>
                  <div className='contactbox'>
                    <h1><FiPhoneCall /></h1>
                    <h2>Phone</h2>
                    <p>+91 63793 18998</p>
                  </div>
                </div>
                <div className='lastdetail'>
                  <div className='mail'>
                    <h3>All Right @Thangam</h3>
                    <div className='lasticon'>
                      <a href="https://www.instagram.com/tn84_v3_lvr/profilecard/?igsh=ajF2bXpmcHFkYmds"><p><FaInstagram /></p></a>
                      <a href="#"><p><FaSquareGithub /></p></a>
                      <a href="#"><p><LuTwitter /></p></a>
                    </div>
                  </div>
                </div>
              </div>

        </div>

      </div>
    </>
  )
}

export default Navbar
