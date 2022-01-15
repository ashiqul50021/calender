import React from 'react';
import img from '../../../Img/ashiq.jpg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-body rounded">
  <div class="container">
    <a class="navbar-brand" href="/"><i class="fab fa-adn fa-2x"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
      
        
      </ul>
      <div class="d-flex">
      <img src={img} style={{width:'50px', height:'50px', borderRadius:'64px',marginLeft:'-130px', marginRight:'5px'}} alt="" />
      <p>Ashiqul Islam</p>
      <i class="fas fa-thumbtack fa-lg"></i>
      <i class="fas fa-bell fa-lg mx-2"></i>
      
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navbar;