import React from 'react'
import '../../src/Styles/Testimonial.css'
import Footers from '../Components/Footers'
import Navabr2 from '../Components/Navabr2'
import test1 from '../Images/testimonial1.webp'
import test2 from '../Images/testimonial2.webp'
import test3 from '../Images/testimonial3.webp'
import test4 from '../Images/testimonial4.webp'
import test5 from '../Images/testimonial5.webp'
import test6 from '../Images/testimonial6.webp'


const Testimonial = () => {
  return (
    
    <div>
     <Navabr2/>
     <div className="container">
     <div className="image_1_1">
      <div className="row">
        <div className="col-md-1">
        <img src={test1} alt="" />
        </div>
        <div className="col-md-5">
        <p class="who">Anne Kurnia,<small>Professional Writer</small></p>
        <blockquote><p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta.</p></blockquote>
        </div>
        <div className="col-md-1">
          <img src={test2} alt="" />
        </div>
        <div className="col-md-5">
        <p class="who">Hendra Susanto,<small>Senior Developer</small></p>
        <blockquote><p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta.</p></blockquote>
        </div>
        </div>
      </div>
      <div className="image_1_1">
     
      <div className="row">
        <div className="col-md-1">
        <img src={test3} alt="" />
        </div>
        <div className="col-md-5">
        <p class="who">Anne Kurnia,<small>Professional Writer</small></p>
        <blockquote><p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta.</p></blockquote>
        </div>
        <div className="col-md-1">
          <img src={test4} alt="" />
        </div>
        <div className="col-md-5">
        <p class="who">Hendra Susanto,<small>Senior Developer</small></p>
        <blockquote><p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta.</p></blockquote>
        </div>
        </div>
      
      </div>
      <div className="image_2_2">
      <div className="row">
        <div className="col-md-1">
        <img src={test5} alt="" />
        </div>
        <div className="col-md-5">
        <p class="who">Anne Kurnia,<small>Professional Writer</small></p>
        <blockquote><p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta.</p></blockquote>
        </div>
        <div className="col-md-1">
          <img src={test6} alt="" />
        </div>
        <div className="col-md-5">
        <p class="who">Hendra Susanto,<small>Senior Developer</small></p>
        <blockquote><p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta.</p></blockquote>
        </div>
      </div>
      
     
      </div>
     </div>
     <Footers/>
    </div>
    
  )
}

export default Testimonial
