//  let navbar = document.querySelector('.header .navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//   navbar.classList.toggle('active');
//   loginForm.classList.remove('active');
// }

// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () =>{
//   loginForm.classList.toggle('active');
//   navbar.classList.remove('active');
// }

// let registerForm = document.querySelector('.register-form');

// document.querySelector('#regis-btn').onclick = () =>{
//   loginForm.classList.toggle('active');
//   navbar.classList.remove('active');
// }



window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const regisBtn = document.getElementById('regis-btn');
  const loginForm = document.querySelector('.login-form');
  const registerForm = document.querySelector('.register-form');

  // Toggle login form visibility
  loginBtn.addEventListener('click', () => {
      loginForm.classList.toggle('active');
      registerForm.classList.remove('active');
  });

  // Toggle register form visibility
  regisBtn.addEventListener('click', () => {
      registerForm.classList.toggle('active');
      loginForm.classList.remove('active');
  });
});
