
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
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



filter_btns.forEach((filter_btn) => {
  filter_btn.addEventListener('click', () => {
    filter_btns.forEach((filter_btn) => {
      filter_btn.classList.remove('active');
    });
    filter_btn.classList.add('active');
    let selected = filter_btn.getAttribute('data-project');
    projects.forEach((project, index) => {
      let project_length = projects.length;
      if (
        project.getAttribute('data-project') === selected ||
        selected === 'all'
      ) {
        if (project.style.transition) {
          project.style.transition = '';
        } else {
          project.style.transition = `width 0.5s ease ${
            index / project_length + 0.6
          }s,height 0.5s ease ${index / project_length + 0.6}s`;
        }
        project.classList.add('show');
        
        project.classList.remove('hide');
      } else {
        project.style.transition = `width 0.5s ease ${
          index / project_length + 0.6
        }s,height 0.5s ease ${index / project_length + 0.6}s`;
        project.classList.remove('show');
        project.classList.add('hide');
      }
    });
  });
});


