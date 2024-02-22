
import React from 'react';
import sunflower from '../assets/images/goldwinner.webp';
import cosmatics from '../assets/images/cosmatics.jpg'
import chocolate from '../assets/images/chocolate.jpg'



export default function Categories() {
  return (
    <div>
      <section className='container' id='categories'>
      <h1 className="text-center" data-aos="fade-down">
          <span className="text-danger display-4 fw-bold">S</span>hop
          By
          <span className="text-warning display-4  fw-bold"> C</span>ategory
        </h1>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className='row mt-5 justify-content-lg-around' data-aos="flip-left">
          <div className='col-md-2'>
            <img src={sunflower} alt="" style={{ width: '180px', borderRadius: '50%',boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)' }} />
            <h4 className='text-center pt-2'>oil</h4>
          </div>
          <div className='col-md-2'>
            <img src={chocolate} className='img-fluid' alt="" style={{ width: '180px', borderRadius: '50%',boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)' }} />
            <h4 className='text-center pt-2'>Cosmatics</h4>
          </div>
          <div className='col-md-2'>
            <img src={sunflower} alt="" style={{ width: '180px', borderRadius: '50%',boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)' }} />
            <h4 className='text-center pt-2'>oil</h4>
          </div>
          <div className='col-md-2'>
            <img src={sunflower} alt="" style={{ width: '180px', borderRadius: '50%',boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)' }} />
            <h4 className='text-center pt-2'>oil</h4>
          </div>
          <div className='col-md-2'>
            <img src={sunflower} alt="" style={{ width: '180px', borderRadius: '50%',boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)' }} />
            <h4 className='text-center pt-2'>oil</h4>
          </div>
          
        </div> 
    </div>
    <div class="carousel-item">
    <div className='row mt-5 justify-content-around' data-aos="flip-right">
          <div className='col-md-2'>
            <img src={sunflower} alt="" style={{ width: '180px', borderRadius: '50%',boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)' }} />
            <h4 className='text-center pt-2'>oil</h4>
          </div>
          <div className='col-md-2'>
            <img src={sunflower} alt="" style={{ width: '180px', borderRadius: '50%',boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)' }} />
            <h4 className='text-center pt-2'>oil</h4>
          </div>
          <div className='col-md-2'>
            <img src={sunflower} alt="" style={{ width: '180px', borderRadius: '50%',boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)' }} />
            <h4 className='text-center pt-2'>oil</h4>
          </div>
          <div className='col-md-2'>
            <img src={sunflower} alt="" style={{ width: '180px', borderRadius: '50%' ,boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)'}} />
            <h4 className='text-center pt-2'>oil</h4>
          </div>
          <div className='col-md-2'>
            <img src={sunflower} alt="" style={{ width: '180px', borderRadius: '50%',boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)' }} />
            <h4 className='text-center pt-2'>oil</h4>
          </div>
         
        </div> 
    </div>
  </div>
</div>
    
      </section>
    </div>
  );
}