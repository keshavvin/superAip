import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <>
    {/* <section className="footer-cta w-full z-50 bg-black/90 backdrop-blur-sm py-24 px-8 shadow-lg footer-top " style={{    paddingTop:'6rem !important',paddingBottom: '6rem !important'}}>
        <div className='container'>
          <img src="https://base-tailwind.preview.uideck.com/images/shape-16.svg"/>
          <div className='row'>
            
           <div className='col-lg-6 col-sm-12 col-md-12'>
               <div className='footer-cta-section'>

               <h3>Join with 5000+ Startups Growing with Base.</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus.</p>
                 
            </div>
           
           </div>
           <div className='col-lg-3 col-sm-12 col-md-12'>
              <div className='footer-cta-section1'>
            
              </div>
            </div>
            <div className='col-lg-3 col-sm-12 col-md-12'>
              <div className='footer-cta-section2'>
                <button>Get Started Now</button> 
              </div>
            </div>
          </div>
          </div> 
          </section> */}

          {/*cta button end */}
          
      <section className="footer w-full z-50 bg-black/90 backdrop-blur-sm py-14 px-8 shadow-lg">
        <div className='container'>
           
            <div className='row'>
              <div className='col-lg-3 col-md-12 col-sm-12'>
                <a href="#">
                  <img src="https://superaip.com/img/super_aip_logo.png" alt={'footer logo image'} style={{width:'20%'}}  />
                  <br/>
                  <p>An ADVANCED AI ASSISTANT THAT READS, UNDERSTANDS, AND ANSWERS QUESTIONS ABOUT YOUR DOCUMENTS, ENTIRELY OFFLINE.</p> 
                  
                </a>
                {/* <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                  <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
                  <wa-icon name="instagram" family="brands"></wa-icon>
                  <FontAwesomeIcon  className="text-blue-400"  icon="fa-brands fa-instagram" /> */}
                  <a href="#" style={{    padding: '10px'}}> <i className="fa-brands fa-instagram fa-flip-vertical fa-lg" style={{ color: '#74C0FC' }} ></i>  
                  </a>
                  <a href="#" style={{    padding: '10px'}}><i className="fa-brands fa-facebook" style={{ color: '#74C0FC' }} ></i></a>
                  <a href="#" style={{    padding: '10px'}}><i className="fa-brands fa-x-twitter" style={{ color: '#74C0FC' }}></i></a>
                

              </div>
              <div className='col-lg-3 col-md-12 col-sm-12'>
                <h3>Quick Links</h3>
                <ul>
                  <li>  <a href="#"> About Us </a></li>
                 <li>  <a href="#"> Enterprise Solutions </a></li>
                  <li>  <a href="#"> Industries </a></li>
                  <li>  <a href="#"> Partners </a></li>
                 <li>  <a href="#"> Research </a></li>
                <li>  <a href="#">  </a></li>
                </ul>
                
              </div>
              <div className='col-lg-3 col-md-12 col-sm-12'>
                 <h3>Services</h3>
                <ul>
                  <li>  <a href="#">  Web Development</a></li>
                 <li>  <a href="#"> Graphics Design </a></li>
                  <li>  <a href="#"> Digital Marketing </a></li>
                  <li>  <a href="#"> Ui/Ux Design </a></li>
                 <li>  <a href="#">  </a></li>
                <li>  <a href="#">  </a></li>
                </ul>
              </div>
              <div className='col-lg-3 col-md-12 col-sm-12'>
                <div className=''>
                   <h3>Support</h3>
                <ul>
                  <li>  <a href="#">  Company</a></li>
                 <li>  <a href="#">  Press media</a></li>
                  <li>  <a href="#"> Our Blog </a></li>
                  <li>  <a href="#"> Contact Us </a></li>
                 <li>  <a href="#">  </a></li>
                <li>  <a href="#">  </a></li>
                </ul>
                </div>
                 
              </div>
            </div>
            <br/>
            <div className="row">
              <div className='top-section'></div>
             <p className="footer_header_text">© 2024 Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </section>
         

    </>
  )
}

export default Footer