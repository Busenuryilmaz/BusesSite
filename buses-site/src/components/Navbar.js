import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
<div className = "navbar">
  <div class="column-nav">
    <div className='nav-link'>
      <a href="/">About</a>
    </div>
    <div className='nav-link'>
      <a href="/">Audio</a>
    </div>
    <div className='nav-link'>
      <a href="/">Video</a>
    </div>
    <div className='nav-link'>
      <a href="/">Dev</a>
    </div>
  </div>
</div>
);
};

const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
  console.log(links.length);
  links.forEach((link) => {
    console.log(link.classList);
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
      console.log("added!")
    });
  });
}

export default Navbar;

