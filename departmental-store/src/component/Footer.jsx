import React from "react";

function Footer() {
  return (
    <div>
      <section className="footerheight bg-warning-subtle mt-5">
        <div className="row justify-content-around ">
       <div className="col-md-3 mt-3">
        <div className="text-center">
       <h2>Quick Link</h2>

        <p><a href="">Home</a></p>
        <p><a href="#trending">Trending Products</a></p>
        <p><a href="#offers">Offers</a></p>
        <p><a href="#categories">Categories</a></p>
        <p><a href="#fruit&veg">Fruit & Veg</a></p>
        </div>
       </div>
       <div className="col-md-3 mt-3">
        
        <h2 className="text-center">Address</h2>
       
        <p>4, Rajiv Gandhi Salai, Taramani, Chennai, Tamil Nadu 600 113, India</p>

       </div>
       <div className="col-md-3 mt-3">
       
       
       </div>
        </div>
        <p className="fw-bold mt-5  text-center text-danger">© 2024 All Rights Reserved  Departmental Store</p>
      </section>
      
    </div>
  );
}

export default Footer;
