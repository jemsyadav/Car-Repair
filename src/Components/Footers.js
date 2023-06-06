import React from 'react'
import footer01 from '../Images/footer01.webp'
import footer02 from '../Images/footer02.webp'
import footer03 from '../Images/footer03.webp'
import '../../src/Styles/Fotters.css'
import twitter from '../Images/twitterla.png'
import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'

const Footers = () => {
  return (
    <div>
      <div className="container-fluid footer1">
        <div className="row">
        <div className="col-md-4">
        <h3 className='text-white' >About Us</h3>
        <p>Lusioto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>

        <p>Lusioto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
        <a href="#" class="more">Learn More</a><br />
        <div className="icon ">
      <div className="column">
        <div className="col-md-4">
      
        </div>
      </div>
        </div>

        </div>
        
        <div className="col-md-4">
        <h3 className='text-white'>OFFICE ADDRESS</h3>
        <strong>Location</strong>
        <td> : Kaliurang St. No 104, Sinduharjo, Ngaglik, Sleman.</td>
        <br />
        <strong>Telphone</strong>
        <td> : (0274) 9982732</td> <br />
        <strong>Open Hour</strong>
        <td> : Monday ‐ Friday <br/> &nbsp;&nbsp;08:00 AM ‐ 16:00 PM</td> <br />
        <strong>Email</strong><br />
        <a href="mailto:staff@localhost.net">staff@localhost.net</a>
        
        </div>
        <br /><br />
        <div className="col-md-4">
        <h3 className='text-white'>Latest Posts</h3>
        <div className="footer_image_container d-flex ">
        <div className="img">
        <img src={footer01} alt="" />
        </div>
        <div className="post_format p-2">
        <a href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a>
        <h4 className='text-white'>CLARITAS EST ETIAM PROCESSUS</h4>    
        </div>
        </div>
        <div className="footer_image_container d-flex ">
        <div className="img">
        <img src={footer02} alt="" />
        </div>
        <div className="post_format p-2">
        <a href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a>
        <h4 className='text-white'>CLARITAS EST ETIAM PROCESSUS</h4>    
        </div>
        </div>
        <div className="footer_image_container d-flex ">
        <div className="img">
        <img src={footer03} alt="" />
        </div>
        <div className="post_format p-2">
        <a  href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a>
        <h4 className='text-white'>CLARITAS EST ETIAM PROCESSUS</h4>  
          
        </div>
        
        </div>
        </div>
        </div>
        <div className="row">
          <div className="col-md-1">
          <button>
         <img src={twitter} alt="" />
         </button>
          </div>
        
          <div className="col-md-1">
          <button>
         <img src={facebook} alt="" />
         </button>
          </div>
          <div className="col-md-1">
          <button>
         <img src={instagram} alt="" />
         </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footers
