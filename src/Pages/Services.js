import React from 'react'
import Navabr2 from '../Components/Navabr2'
import '../../src/Styles/Services.css'
import service1 from '../Images/service1.webp'
import service2 from '../Images/service-02.webp'
import service3 from '../Images/service-03.webp'
import service4 from '../Images/service-04.webp'
import service5 from '../Images/service-05.webp'
import service6 from '../Images/service-06.webp'
import brand1 from '../Images/brand-03.webp'
import brand2 from '../Images/brand-02.webp'
import brand3 from '../Images/brand-04.webp'
import brand4 from '../Images/brand-05.webp'
import Footers from '../Components/Footers'

const Services = () => {
  return (
    <div>
    <Navabr2/>
    <div className="Container__1">
    <div className="container">
    <div className="row">
    <div className="col-md-4 col-sm-12">
    <a href="https://bengkeltheme.themesawesome.com/?service=body-repair-paint"><h3>Body Repair &amp; Paint</h3></a>
    <img src={service1} alt="" />
    <p>Duis autem vel eum iriure dolor in hendrerit  <br></br>in vulputate velit esse molestie consequat,..</p>
    <a href="https://bengkeltheme.themesawesome.com/?service=body-repair-paint" class="more">View Detail</a>
    
    </div> 
    <div className="col-md-4 col-sm-12">
    <a href="https://bengkeltheme.themesawesome.com/?service=routine-maintenance"><h3>Routine Maintenance</h3></a>
    <img src={service2} alt="" />
    <p>Duis autem vel eum iriure dolor in hendrerit  <br></br>in vulputate velit esse molestie consequat,..</p>
    <a href="https://bengkeltheme.themesawesome.com/?service=routine-maintenance" class="more">View Detail</a>
    </div>
    <div className="col-md-4 col-sm-12">
    <a href="https://bengkeltheme.themesawesome.com/?service=balancing"><h3>Balancing </h3></a>
    <img src={service3} alt="" />
    <p>Duis autem vel eum iriure dolor in hendrerit  <br></br>in vulputate velit esse molestie consequat,..</p>
    <a href="https://bengkeltheme.themesawesome.com/?service=balancing" class="more">View Detail</a>
    </div>
    </div>
    </div>
    <div className="container">
    <div className="row">
    <div className="col-md-4 col-sm-12">
    <a href="https://bengkeltheme.themesawesome.com/?service=consuetudium-lectorum"><h3>Consuetudium Lectorum</h3></a>
    <img src={service4} alt="" />
    <p>Duis autem vel eum iriure dolor in hendrerit  <br></br>in vulputate velit esse molestie consequat,..</p>
    <a href="https://bengkeltheme.themesawesome.com/?service=body-repair-paint" class="more">View Detail</a>
    
    </div> 
    <div className="col-md-4 col-sm-12">
    <a href="https://bengkeltheme.themesawesome.com/?service=quinta-decima"><h3>Quinta Decima</h3></a>
    <img src={service5} alt="" />
    <p>Duis autem vel eum iriure dolor in hendrerit  <br></br>in vulputate velit esse molestie consequat,..</p>
    <a href="https://bengkeltheme.themesawesome.com/?service=quinta-decima" class="more">View Detail</a>
    </div>
    <div className="col-md-4 col-sm-12">
    <a href="https://bengkeltheme.themesawesome.com/?service=eodem-modo"><h3>Eodem Modo</h3></a>
    <img src={service6} alt="" />
    <p>Duis autem vel eum iriure dolor in hendrerit  <br></br>in vulputate velit esse molestie consequat,..</p>
    <a href="https://bengkeltheme.themesawesome.com/?service=eodem-modo" class="more">View Detail</a>
    </div>
    </div>
    </div>
    </div>
    <div className="Brand_partner">
      <div className="row">
        <div className="col-md-12 col-sm-12">
        <h3 className='text-center'>BRAND PARTNER</h3>
        <hr />
        <div className="row">
          <div className="col-md-3 text-center">
            <img src={brand1} alt="" />
          </div>
          <br /><br /><br />
          <div className="col-md-3 text-center">
            <img src={brand2} alt="" />
          </div>
          <br /><br /><br />
          <div className="col-md-3 text-center">
            <img src={brand3} alt="" />
          </div>
          <br /><br /><br /> <br />
          <div className="col-md-3 text-center">
            <img src={brand4} alt="" />
            <br /><br />
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="login_form">
    <div className="container">
    <div className="row">
      <div className="col-md-6">
      <h3 className='text-center'>FREQUENTLY ASKED QUESTION</h3>
      <hr />
      <div className="border_1">
      <h4  class="border  ">
      How duis autem in hendrerit in velit molestie consequat ?</h4>
      <div >
        <p>A assumenda shoreditch et. Nihil anim keff proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.</p>
      </div>
      <br />
      <br />
      
      
      </div>
      </div>
      <div className="col-md-6">
      <h3 className='text-center'>MAKE AN APPOINMENT</h3>
      <hr />
      <em>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</em>
      <form action="form">
        <div className="form_group">
          <input  type="name" id="name" name="phone" placeholder="Name"/>
          <input className='email'  type="email" id="email" name="phone" placeholder="Email"/>
          
        </div>
        <div className="form_group">
          <input  type="mobile" id="nummber" name="phone" placeholder="Mobile Phone"/>
          <select  class="dropdown" >
          <option value="Mercedez Benz">Mercedez Benz</option>
          <option value="Audi">Audi</option><option value="BMW">BMW</option>
          <option value="Toyota">Toyota</option><option value="Mitsubishi">Mitsubishi</option>
          </select>
        </div>
        <div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='type your message here'></textarea> <br />
    <input size="60" class="wpcf7-form-control wpcf7-file custom-file-input" accept="audio/*,video/*,image/*" aria-invalid="false" type="file" name="upload"></input>
  </div>
  <br />
  <input className='Sumbit_button' type="submit" value="Send This Message"></input>
        
      </form>
      
      </div>
      </div>
    </div>
    </div>
<Footers/>
    </div>
  )
}

export default Services
