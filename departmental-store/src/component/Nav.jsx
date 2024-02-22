import React from "react";
import ghee from "../assets/images/Ghee_1.webp";
import product from "../assets/images/Product_Based.webp";
import oil from "../assets/images/New_website_Banner.webp";
import Breakfast from "../assets/images/breakfast-combo2.jpg";
import healthy from "../assets/images/healthy-product.jpg";
import badam from "../assets/images/badam-oil.jpg"
import coconut from "../assets/images/coconut-oil.jpg"
import groundnut from "../assets/images/groundnut-oil.jpg"
import olive from "../assets/images/olive-oil1.jpg"
import Categories from './Categories';
import FruitsVeg from "./FruitsVeg";
import Footer from "./Footer";


function Nav() {
  return (
    <div className="overflow-hidden">
      {/* nav */}
      <section className="nav-banner">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-info-subtle fixed-top "
          id="home"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Store Logo
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
              <ul className="navbar-nav ms-auto mb-3 heading5  mb-lg-0 text-center ">
                <li className="nav-item mx-2">
                  <a className="nav-link active " href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-2" >
                  <a className="nav-link active " href="#trending">
                    Trending Products
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active " href="#celebrate">
                   Offers
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active " href="#categories">
                    Categories
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link active " href="#fruit&veg">
                    Fruit&Veg
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

        
 <div className='buy-now d-flex justify-content-center align-items-center rounded-2'>
                <a href="https://axesstechnology.in/contact" target='_blank'>
                <button className='buy-now-bt'>BuyNow</button></a>
            </div>

      <h1 className="text-center mt-5 pt-4 fixed" data-aos="fade-up" >
        <span className="text-danger display-4 fw-bold">D</span>epartmental{" "}
        <span className="text-warning display-4  fw-bold">S</span>tore
      </h1>
      {/* banner */}
      <section className="herobanner" id="home">
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
      {/* Categories */}
      <Categories/>
      {/* navpills */}
      <section className="container mt-5">
        <div className="">
          <ul className="nav nav-pills justify-content-around  d-flex navpills1 mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active mt-2  "
                id="pills-oil-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-oil"
                type="button"
                role="tab"
                aria-controls="pills-oil"
                aria-selected="true"
              >
                OILS<span className="text-black">&</span>GHEE
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link mt-2  "
                id="pills-spices-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-spices"
                type="button"
                role="tab"
                aria-controls="pills-spices"
                aria-selected="false"
              >
                SPICES<span className="text-black">&</span>MASALA
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link mt-2"
                id="pills-pulses-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-pulses"
                type="button"
                role="tab"
                aria-controls="pills-pulses"
                aria-selected="false"
              >
                PULSES<span className="text-black">&</span>BEANS
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-oil"
            role="tabpanel"
            aria-labelledby="pills-oil-tab"
          >
            
            <div
                className="row justify-content-center mt-5"
                data-aos="fade-left"
              >
                <div className="col-md-3 mt-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Badam Oil
                    </h3>

                    <img
                      src={badam}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Badan Oil</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:250.00</p>
                    
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Coconut Oil
                    </h3>

                    <img
                      src={coconut}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Coconut Oil</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Groundnut Oil
                    </h3>

                    <img
                      src={groundnut}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Groundnut Oil</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:120.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Olive Oil
                    </h3>

                    <img
                      src={olive}
                      class="d-block  img-fluid"
                      className="mt-2 p-4 w-100"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Olive Oil</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
              <div
                className="row justify-content-center mt-5"
                data-aos="fade-right"
              >
                <div className="col-md-3 mt-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
              <div
                className="row justify-content-center mt-5"
                data-aos="fade-fade"
              >
                <div className="col-md-3 mt-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-spices"
            role="tabpanel"
            aria-labelledby="pills-spices-tab"
          >
            
            <div
                className="row justify-content-center mt-5"
                data-aos="fade-left"
              >
                <div className="col-md-3 mt-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
              <div
                className="row justify-content-center mt-5"
                data-aos="fade-left"
              >
                <div className="col-md-3 mt-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
              <div
                className="row justify-content-center mt-5"
                data-aos="fade-left"
              >
                <div className="col-md-3 mt-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-pulses"
            role="tabpanel"
            aria-labelledby="pills-pulses-tab"
          >
            
            <div
                className="row justify-content-center mt-5"
                data-aos="fade-left"
              >
                <div className="col-md-3 mt-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
              <div
                className="row justify-content-center mt-5"
                data-aos="fade-left"
              >
                <div className="col-md-3 mt-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
              <div
                className="row justify-content-center mt-5"
                data-aos="fade-left"
              >
                <div className="col-md-3 mt-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3 mt-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 rounded-3 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      class="d-block  img-fluid"
                      className="mt-2 p-4"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    
      {/* fruits&veg */}
      <FruitsVeg/>
        {/* tranding */}
        <section className="container mt-4" id="trending">
        <h1 className="text-center" data-aos="fade-down">
          <span className="text-danger display-4 fw-bold">T</span>rending{" "}
          <span className="text-warning display-4  fw-bold">P</span>roduct
        </h1>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div
                className="row justify-content-center mt-5"
                data-aos="fade-left"
              >
                <div className="col-md-3">
                  <div className="card d-flex ">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      className="mt-2 zoom-card p-4 d-block  img-fluid"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                    
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      className="mt-2 zoom-card p-4 d-block  img-fluid"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      className="mt-2 zoom-card p-4 d-block  img-fluid"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      className="mt-2 zoom-card p-4 d-block  img-fluid"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row justify-content-center mt-5">
                <div className="col-md-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      className="mt-2 zoom-card p-4 d-block  img-fluid"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      className="mt-2 zoom-card p-4 d-block  img-fluid"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card d-flex">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 mx-auto mt-3 text-light fw-bold"
                    >
                      Breakfast
                    </h3>

                    <img
                      src={Breakfast}
                      className="mt-2 zoom-card p-4 d-block  img-fluid"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">Breakfast Combo</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:100.00</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <h3
                      style={{
                        border: "2px solid orange",
                        width: "max-content",
                        backgroundColor: "orange",
                      }}
                      className="px-3 py-1 mx-auto mt-3 text-light fw-bold"
                    >
                      healthy Product
                    </h3>

                    <img
                      src={healthy}
                      className="mt-2 zoom-card p-4 d-block  img-fluid"
                      alt="..."
                    />
                    <p className="mx-auto">
                      <a href="">healthy Product</a>
                    </p>
                    <p className="fw-bold mx-auto">RS:190.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      
    </div>
  );
}

export default Nav;
