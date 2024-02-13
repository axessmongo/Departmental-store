import React from 'react'
import ghee from '../assets/images/Ghee_1.webp'
import product from '../assets/images/Product_Based.webp'
import oil from '../assets/images/New_website_Banner.webp'

function Nav() {
  return (
    <div>
         <section className="nav-banner">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-warning fixed-top"
          id="home"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Shop Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-3 heading5 p-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#online">
                    Online Gift
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#celebrate">
                    Celebrate
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#categories">
                    Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#occasion">
                    Occasions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="herobanner" id="home">
        <h1 className="text-center" data-aos="fade-down">
          <span className="text-danger display-4 fw-bold">Departmental</span>Store
         
        </h1>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ghee} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={product} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={oil} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nav