import React from 'react'
import '../../src/Styles/About.css'
import avtar from '../Images/avatar-lg.webp'
import second from '../Images/second.webp'
import third  from '../Images/team-03-140x140.webp'
import fourth from '../Images/team-04-140x140.webp'
import fifth from '../Images/team-05-140x140.webp'
import sixth from '../Images/avatar-sm-05.webp'
import seventh from '../Images/avatar-sm-06.webp'
import footer01 from '../Images/footer01.webp'
import footer02 from '../Images/footer02.webp'
import footer03 from '../Images/footer03.webp'
import twiiter from '../Images/twitter.svg'
import Navabr2 from '../Components/Navabr2'
import Footers from '../Components/Footers'


const About = () => {
  return (
    
 
   <div >
   <Navabr2/>
   <div className="container">
   <div className="container_1">
   
    <div className="row">
      <div className=" name col-md-3 col-sm-12 text-center">
      <h2>About Bengkel Team</h2>
      <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod legunt saepius. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      <button className='Resume_Button'>DOWNLOAD OUR RESUME</button> <br /><br />
      </div>
      
      <div className="col-md-5 col-sm-12 text-center">
      <img className='ml-11px' src={avtar} alt="" />
      </div>
      <div className="col-md-3 col-sm-12  ">
      <h3 >Indra Kurniawan</h3>
      <span>CHIEF EXECUTIVE OFFICER</span>
      <p>Villum dolore eu feugiat nulla facilisis at vero eros et accum san et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
      </div>
    </div>
 <hr />

 <div className="row">
  <div className="col-md-4 col-sm-12">
    <h1>
    
    </h1>
  </div>
  <div className="col-md-8 col-sm-12">
    <div className="row">
      <div className="col-md-3 col-sm-12">
        <img src={second} alt="" />
      </div>
      <div className="col-md-3 col-sm-12">
      <h3 >Richard Colila</h3>
      <span>LEAD OF MECHANIC</span>
      <p>Villum dolore eu feugiat nulla facilisis at vero eros et accum san et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
      </div>
      <div className="col-md-3 col-sm-12">
        <img src={third} alt="" />
      </div>
    <div className="col-md-3 col-sm-12">
    <h3 >John Tertuno</h3>
    <span>PROFESSIONAL MECHANIC</span>
    <p>Villum dolore eu feugiat nulla facilisis at vero eros et accum san et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    </div>
    <hr />
    </div>
  </div>
 </div>

 <div className="row">
  <div className="col-md-4 col-sm-12">
    <h1>
    
    </h1>
  </div>
  <div className="col-md-8 col-sm-12">
    <div className="row">
      <div className="col-md-3 col-sm-12">
        <img src={fourth} alt="" />
      </div>
      <div className="col-md-3 col-sm-12">
      <h3 >Iwan Kurniawan</h3>
      <span>PROFESSIONAL MECHANIC</span>
      <p>Villum dolore eu feugiat nulla facilisis at vero eros et accum san et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
      </div>
      <div className="col-md-3 col-sm-12">
        <img src={fifth} alt="" />
      </div>
    <div className="col-md-3 col-sm-12">
    <h3 >Julia Amandha</h3>
    <span>PROFESSIONAL MECHANIC</span>
    <p>Villum dolore eu feugiat nulla facilisis at vero eros et accum san et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    </div>
    <hr />
    </div>
  </div>
 </div>
 <div className="row">
  <div className="col-md-4 col-sm-12">
    <h1>
 
    </h1>
  </div>
  <div className="col-md-8 col-sm-12">
    <div className="row">
      <div className="col-md-3 col-sm-12">
        <img src={sixth} alt="" />
      </div>
      <div className="col-md-3 col-sm-12">
      <h3 >Joko Riyadi</h3>
      <h3>Julia Amandha</h3>
      <span>CUSTOMER SERVICE</span>
      <p>Villum dolore eu feugiat nulla facilisis at vero eros et accum san et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
      </div>
      <div className="col-md-3 col-sm-12">
        <img src={seventh} alt="" />
      </div>
    <div className="col-md-3 col-sm-12">
    <h3 >Nina Shelina</h3>
    <span>ACCOUNTING</span>
    <p>Villum dolore eu feugiat nulla facilisis at vero eros et accum san et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    </div>
    <hr />
    </div>
  </div>
 </div>
 </div>
 </div>
  <Footers/>
    

    </div>
   
  
  )
}

export default About
