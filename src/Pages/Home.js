import React from 'react'
import '../../src/Styles/Home.css'
import Slider from 'react-slick'
import Footers from '../Components/Footers'
import background1 from '../Images/background1.webp'
import background2 from '../Images/background2.webp'
import background3 from '../Images/backgroud3.webp'
import model1 from '../Images/modal-lg-01-80x80.webp'
import service2 from '../Images/service-02-80x80.webp'
import service3 from '../Images/service-03-80x80.webp'
import service4 from '../Images/service-04-80x80 (1).webp'
import service5 from '../Images/service-05-80x80.webp'
import service6 from '../Images/service-06-80x80.webp'
import team1 from '../Images/team-03-140x140.webp'
import team2 from '../Images/team-04-140x140.webp'
import team3 from '../Images/team-05-140x140.webp'
import latest1 from '../Images/latest1.webp'
import latest2 from '../Images/latest2.webp'
import latest3 from '../Images/latest3.webp'

import brand1 from '../Images/brand-03.webp'
import brand2 from '../Images/brand-03.webp'
import brand3 from '../Images/brand-04.webp'
import brand4 from '../Images/brand-05.webp'
import viewall from '../Images/viewall.png'
import teaam7 from '../Images/team7.jpg'
import team10 from '../Images/team10.webp'
import team11 from '../Images/team11.webp'
import team12 from '../Images/team12.webp'

const Home = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
  
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    
  }
  return (
    
   

<div className='slider_custom'>
       
        
        <Slider {...settings}>
          <div >
          <img src={background1} alt="" width={'100%'}/>
          
          
          </div>
          <div>
          <img src={background2} alt="" width={'100%'}/>
          </div>
          <div>
            <img src={background3} alt="" width={'100%'}/>
          </div>
         
        
        </Slider>
       
        
        <div className="container">
        <h3 className='text-center'>OUR SERVICE</h3>
        <hr />

        <div className="row">
          <div className="col-md-4 col-sm-12">
          <h3>Body Repair &amp; Paint</h3>
          <div className="main_container d-flex">
            <div className="text">
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,..</p>
              <a href="https://bengkeltheme.themesawesome.com/?service=body-repair-paint" class="more">View Details</a> <br /><br /><br />
            </div>
            <div className="img">
              <img  src={model1} alt="" />
            </div>
          </div>
          </div>
          <div className="col-md-4 col-sm-12">
          <h3>Routine Maintenance</h3>
          <div className="main_container d-flex">
            <div className="text">
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,..</p>
              <a href="https://bengkeltheme.themesawesome.com/?service=body-repair-paint" class="more">View Details</a> <br /><br /><br />
            </div>
            <div className="img">
              <img src={service2} alt="" />
            </div>
          </div>
          </div>
          <div className="col-md-4 col-sm-12">
          <h3>Balancing</h3>
          <div className="main_container d-flex">
            <div className="text">
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,..</p>
              <a href="https://bengkeltheme.themesawesome.com/?service=body-repair-paint" class="more">View Details</a> <br /><br /><br />
            </div>
            <div className="img">
              <img src={service3} alt="" />
            </div>
          </div>
          </div>
          <div className="col-md-4 col-sm-12">
          <h3>Consuetudium Lectorum</h3>
          <div className="main_container d-flex">
            <div className="text">
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,..</p>
              <a href="https://bengkeltheme.themesawesome.com/?service=body-repair-paint" class="more">View Details</a>
              <br /><br /><br />
               
            </div>
            <div className="img">
              <img src={service4} alt="" />
            </div>
          </div>
          </div>
          <div className="col-md-4 col-sm-12">
          <h3>Quinta Decima</h3>
          <div className="main_container d-flex">
            <div className="text">
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,..</p>
              <a href="https://bengkeltheme.themesawesome.com/?service=body-repair-paint" class="more">View Details</a> <br /><br /><br />
            </div>
            <div className="img">
              <img src={service5} alt="" />
            </div>
          </div>
          </div>
          <div className="col-md-4 col-sm-12">
          <h3>Eodem Modo</h3>
          <div className="main_container d-flex">
            <div className="text">
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,..</p>
              <a href="https://bengkeltheme.themesawesome.com/?service=body-repair-paint" class="more">View Details</a> <br /><br /><br />
            </div>
            <div className="img">
              <img src={service6} alt="" />
            </div>
          </div>
          </div>

          
        </div>
        <div className="fixed_image">
        <div className="row">
          <div className="col-md-6 col-sm-12 bg-white">
          <div className="fixed_image_heading">
          <h3 className='About_Bengkel_Template'>About Bengkel Template</h3>
          <hr />
          <p>Bengkel HTML Template is a template that is suitable for you who have automotive and car repair business. With modern design, will attract users to become your customers. These templates can be accessed in a variety of devices such as tablets or smartphones.</p>
          <strong>SOME FEATURES</strong>
          <ul>                                    
          <li> 1.Gallery with Popup</li>                                  
            <li>2.Include Post Format Blog <br /> (Audio, Video, Gallery and Blockquote)</li>                                 
               <li>3.Font Awesome Icon</li>                                   
                <li>4.Google Webfonts</li>                                   
                 <li>5.Page Builder SiteOrigin</li>                                 
                    <li>6. custom post type</li>
                    <li>7.Page Template</li>
                    <li>8.Live Customizer</li>                              
                      </ul>
                      <br />
                      <br />
                      
                      
               </div>
              
          </div>
        
         <div className="col-md-6 col-sm-12">
       <div className='img_section'>
       <img src={team1} alt="" /> 
          <img src={team2} alt="" />
          <img src={team10} alt="" />
          <img src={team3} alt="" />
          <img src={team11} alt="" />
          <img src={team12} alt="" />
          
          
      
          {/* <img src={viewall} alt=""/> */}
       </div>
          
         </div>
        </div>

        </div>
        <div className="Latest_News">
        <h3 className='text-center'>LATEST NEWS</h3>
        <hr />
        <div className="row">
          <div className="col-md-4 col-sm-12">
         
            <img src={latest1} alt="" width={'100%'} />
            <div className="row_container">
            <time class="published">May 11, 2015</time> <br />
            <a className='Heading_Name'  href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/"><h4>CLARITAS EST ETIAM PROCESSUS DYNAMICUS</h4></a>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhona euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo…</p>
            <a href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/" class="more">Read More</a>
          </div>
          </div>
          <div className="col-md-4 col-sm-12">

            <img src={latest2} alt="" width={'100%'} />
            <div className="row_container">
            <time class="published">May 11, 2015</time> <br />
            <a className='Heading_Name' href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/"> <h4>CLARITAS EST ETIAM PROCESSUS DYNAMICUS </h4> </a>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhona euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo…</p>
            <a  href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/" class="more">Read More</a>
          </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={latest3} alt="" width={'100%'}/>
            <div className="row_container">
            <time class="published">May 11, 2015</time> <br />
            <a className='Heading_Name' href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/"> <h4>CLARITAS EST ETIAM PROCESSUS DYNAMICUS </h4></a>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhona euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo…</p>
            <a className='Heading_Name' href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/" class="more">Read More</a>
          </div>
          </div>
        </div>
        </div>
        </div>
        <div className="Review">

        <h3 className=' Heading_3'>
        <h3 className='text-white text-center'>WHAT THEY SAY ABOUT US</h3><hr className='text-white'/>
        </h3>
        <div className="row">
          <div className="col-md-12 col-sm-12">
          <p className='text-center text-white' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus magnam alias! Labore ipsum inventore sed natus assumenda aliquid veniam nihil, omnis reiciendis deleniti vel excepturi eum, suscipit voluptatibus perferendis quidem quo provident iste laboriosam maiores hic ad. Repellat, aut obcaecati! Accusantium aut iure totam rerum cupiditate amet vero sint!</p>
            
          </div>
        </div>
         
         
        </div>
        
        <div className="Brand_partner">
      <div className="row">
        <div className="col-md-12 col-sm-12">
        <h3 className='text-center'>BRAND PARTNER</h3>
        <hr />
        <div className="row">
        
          <div className="col-md-3 col-sm-12">
          
            <img className='p' src={brand1} alt="" width={'55%'} />
          </div>
          <br /> <br /><br /><br /><br />
         
          <div className="col-md-3 col-sm-12">
            <img src={brand2} alt=""  width={'55%'} />
          </div>
          <br /> <br /> <br /><br /><br /><br />
          <div className="col-md-3 col-sm-12">
            <img src={brand3} alt=""  width={'55%'}/>
          </div>
          <br /> <br /> <br /><br /><br /><br />
          <div className="col-md-3 col-sm-12">
            <img src={brand4} alt="" width={'55%'} />
            
y
          </div>
        </div>
        </div>
      </div>
    
      
    </div>
    <Footers/>
      </div>
      
      
    );
  }


  
 
   
  

export default Home
