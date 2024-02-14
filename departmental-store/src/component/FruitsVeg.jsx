import React from 'react'
import tomato from '../assets/images/tomato.webp'
import apple from '../assets/images/apple.webp'
import orange from '../assets/images/orange.webp'
import papaya from '../assets/images/papaya.webp'
import banana from '../assets/images/banana.webp'
import redbanana from '../assets/images/red_banana.webp'
import sapota from '../assets/images/sapota.webp'
import pine from '../assets/images/pineapple.webp'
import pome from '../assets/images/pomegranate.webp'
import beans from '../assets/images/beans.webp'
import onion from '../assets/images/onion.webp'
import carrot from '../assets/images/carrot.webp'
import ginger from '../assets/images/ginger.webp'
import brinjal from '../assets/images/brinjal.webp'
import bitter from '../assets/images/bitter-gourd.webp'
import cauli from '../assets/images/cauliflower.webp'
 
export default function FruitsVeg() {
  return (
    <div>
        <section className='container'>
            <div>
            <h3 className='text-center mt-5'>Fruits</h3>
              <div className='row mt-5'>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={apple} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Apple</h4>
                      <p>MRF : ₹350</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={banana} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                     <div className='text-center'>
                     <h4 className="card-title ">Banana</h4>
                      <p>MRF : ₹40</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={orange} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Orange</h4>
                      <p>MRF : ₹180</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={sapota} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Sapota</h4>
                      <p>MRF : ₹80</p>
                     </div>
                    </div>
                  </div>
                </div>
               
                </div>
                <div className='row mt-5'>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={redbanana} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title "> RedBanana</h4>
                      <p>MRF : ₹70</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={pome} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Pomegranate</h4>
                      <p>MRF : ₹250</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={papaya} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Papaya</h4>
                      <p>MRF : ₹60</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={pine} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Pineapple</h4>
                      <p>MRF : ₹100</p>
                     </div>
                    </div>
                  </div>
                </div>               
                </div>
            </div>
            <div>
            <h3 className='text-center mt-5'>Vegtables</h3>
              <div className='row mt-5'>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={tomato} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Tomato</h4>
                      <p>MRF : ₹50</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={onion} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                     <div className='text-center'>
                     <h4 className="card-title ">Onion</h4>
                      <p>MRF : ₹40</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={carrot} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Carrot</h4>
                      <p>MRF : ₹120</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={beans} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Beans</h4>
                      <p>MRF : ₹90</p>
                     </div>
                    </div>
                  </div>
                </div>
               
                </div>
                <div className='row mt-5'>
                <div className='col-md-3'>
                  <div className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={brinjal} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title "> Brinjal</h4>
                      <p>MRF : ₹70</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={bitter} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Bitter-Gourd</h4>
                      <p>MRF : ₹60</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={cauli} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Cauliflower</h4>
                      <p>MRF : ₹60</p>
                     </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div  className="card zoom-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src={ginger} className="mx-auto" alt="" style={{ width: '200px',  }} />
                    <div className="card-body">
                    <div className='text-center'>
                     <h4 className="card-title ">Ginger</h4>
                      <p>MRF : ₹100</p>
                     </div>
                    </div>
                  </div>
                </div>
               
                </div>
            </div>
                
        </section>
    </div>
  )
} 
