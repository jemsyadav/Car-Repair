
import '../../src/Styles/Blogs.css'
import React from 'react'
import Footers from '../Components/Footers'
import Navabr2 from '../Components/Navabr2'
import logo from '../Images/logo.avif'
import blog1 from '../Images/blog1.webp'
import bottom1 from '../Images/bottom1.webp'
import blog2 from '../Images/blog-2.webp'
import blog3 from '../Images/blog-3.webp'
import blog4 from '../Images/blog-4.webp'
import blog5 from '../Images/blog-5.webp'
import bottom2 from '../Images/bottom2.webp'
import bottom4 from '../Images/bottom4.webp'
import bottom5 from '../Images/bottom5.webp'


const Blogs = () => {
  return (
    <div>
    <Navabr2/>
    <div className="container">
      <div className="row">
        <div className="col-lg-1">
         <img src={logo} alt="" width={'100%'} />
         <h5 className='text-center'>MAY <br /><h5>11 <br />2015</h5></h5>
         <i class="fa fa-fw fa-share-alt"></i>
        </div>

        <div className="col-lg-7">
        <span class="author vcard">Posted by <a href="https://bengkeltheme.themesawesome.com/author/"></a> .POST FORMAT</span>
        <a href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/"><h3>CLARITAS EST ETIAM PROCESSUS DYNAMICUS</h3></a>
        <img src={blog1} alt="" width={'100%'}/>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhona euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo…</p>
        <br /><br /><hr />
        </div>

        <div className="col-lg-4">
        <div className="search_item">
        <h3 class="widget-title">SEARCH</h3><hr />
        <input type="search" class="field" name="s" value="" id="s" placeholder="S E A R C H"></input>
        <input type="submit" class="submit search-button" value="SEARCH"></input>
        </div>

        
         <div className="bottom">
         <h3 class="widget-title">RECENT POSTS</h3> <hr  className='bg-blue'/>
         <div className="bottom1 d-flex">
         <div className="img1">
         <img src={bottom1} alt="" />
         </div>
         <div className="heading">
         <a href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a><br />
         <a href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/">CLARITAS EST ETIAM PROCESSUS DYNAMICUS</a>
         </div>
         </div>
         <hr />
         </div>
         <div className="bottom1 d-flex">
         <div className="img1">
         <img src={blog2} alt="" />
         </div>
         <div className="heading">
         <a href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a><br />
         <a href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/">CLARITAS EST ETIAM PROCESSUS DYNAMICUS</a>
         </div>
         </div>
         <hr />
         <div className="bottom1 d-flex">
         <div className="img1">
         <img src={blog3} alt="" />
         </div>
         <div className="heading">
         <a href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a><br />
         <a href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/">CLARITAS EST ETIAM PROCESSUS DYNAMICUS</a>
         </div>
         </div>
         <hr />
         <div className="bottom1 d-flex">
         <div className="img1">
         <img src={blog4} alt="" />
         </div>
         <div className="heading">
         <a href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a><br />
         <a href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/">CLARITAS EST ETIAM PROCESSUS DYNAMICUS</a>
         </div>
         </div>
         <hr />
         <div className="bottom1 d-flex">
         <div className="img1">
         <img src={blog5} alt="" />
         </div>
         <div className="heading">
         <a href="https://bengkeltheme.themesawesome.com/category/post-formats/" rel="category tag">Post Formats</a><br />
         <a href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/">CLARITAS EST ETIAM PROCESSUS DYNAMICUS</a>
         </div>
         </div>
         <hr />
        </div>
        <div className="row">
        <div className="col-lg-1">
         <img src={logo} alt="" width={'100%'} />
         <h5 className='text-center'>MAY <br /><h5>11 <br />2015</h5></h5>
         <i class="fa fa-fw fa-share-alt"></i>
        </div>

        <div className="col-lg-7">
        <span class="author vcard">Posted by <a href="https://bengkeltheme.themesawesome.com/author/"></a> .POST FORMAT</span>
        <a href="https://bengkeltheme.themesawesome.com/mazim-placerat-facer-possim-assum/"> <br /><h3> MAZIM PLACERAT FACER POSSIM ASSUM</h3></a>
        <img src={bottom2} alt="" width={'100%'}/>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhona euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo…</p>
        <br /><br /><hr />
        
        </div>
        </div>
        <div className="row">
        <div className="col-lg-1">
         <img src={logo} alt="" width={'100%'} />
         <h5 className='text-center'>MAY <br /><h5>11 <br />2015</h5></h5>
         <i class="fa fa-fw fa-share-alt"></i>
        </div>

        <div className="col-lg-7">
        <span class="author vcard">Posted by <a href="https://bengkeltheme.themesawesome.com/author/"></a> .POST FORMAT <br /></span>
        <a href="https://bengkeltheme.themesawesome.com/tempor-cum-soluta-nobis-eleifend/"><h3>TEMPOR CUM SOLUTA NOBIS ELEIFEND</h3></a>
        <img src={bottom4} alt="" width={'100%'}/>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhona euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo…</p>
        <br /><br /><hr />
        
        </div>
        </div>
        <div className="row">
        <div className="col-lg-1">
         <img src={logo} alt="" width={'100%'} />
         <h5 className='text-center'>MAY <br /><h5>11 <br />2015</h5></h5>
         <i class="fa fa-fw fa-share-alt"></i>
        </div>

        <div className="col-lg-7">
        <span class="author vcard">Posted by <a href="https://bengkeltheme.themesawesome.com/author/"></a> .POST FORMAT</span>
        <a href="https://bengkeltheme.themesawesome.com/claritas-est-etiam-processus-dynamicus/"><h3>CLARITAS EST ETIAM PROCESSUS DYNAMICUS</h3></a>
        <img src={bottom5} alt="" width={'100%'}/>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhona euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo…</p>
        <br /><br /><hr />
        </div>
        </div>
        </div>
       
        </div>
        <Footers/>
      </div>

 
  )
}

export default Blogs
