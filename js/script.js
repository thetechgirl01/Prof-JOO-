
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
let menuBtn = document.querySelector('.menu-btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  menuBtn.textContent = 'CLOSE'
 
})

const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.add('translate-x-0');
});

navbarHideBtn.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.remove('translate-x-0');
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });





window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

