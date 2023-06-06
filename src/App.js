
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ABOUT from './Pages/About';
import HOME from './Pages/Home';
import SERVICES from './Pages/Services';
import BLOGS from './Pages/Blogs';
import TESTIMONIAL from './Pages/Testimonial';
import FAQ from './Pages/Faq';
 import Header from './Components/Header'
import PageNotFound from './Pages/PageNotFound'


 




function App() {
  return (
    
<>
 <Header/>
<div className='box'>


<BrowserRouter>
  <Routes>
      <Route path='/' element={<HOME/>}/>
      <Route  path='/about' element={<ABOUT/>}/>
      <Route  path='/services' element={<SERVICES/>}/>
      <Route  path='/blogs' element={<BLOGS/>}/>
      <Route  path='/testimonial' element={<TESTIMONIAL/>}/>
      <Route  path='/faq' element={<FAQ/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      

  </Routes>
</BrowserRouter>

</div>
</>
  );
}

export default App;
