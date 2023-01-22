import React from "react";

function Navbar(){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://www.kula.ai/">
          <img src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png" alt="" width="35" height="35" class="d-inline-block align-text-top"/>
          
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
              
               <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle nav-link active" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Product
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="https://www.kula.ai/kula-outreach">Kula Outreach</a></li>
                <li><a class="dropdown-item" href="https://www.kula.ai/circles">Kula Circles</a></li>
              </ul>
            </li>
              
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://www.kula.ai/story">Our Story</a>
            </li>
            
        
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle nav-link active" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="https://www.kula.ai/blog">Blog</a></li>
                <li><a class="dropdown-item" href="https://www.kula.ai/resources/outbound-recruiting-playbook">Guides</a></li>
              </ul>
            </li>
            
            
          </ul>
          
          </div>
         
            <button type="button" class="d-flex btn btn-primary btn-lg Book">Book a Demo</button>
      </div>
    </nav>
 );
}

export default Navbar;