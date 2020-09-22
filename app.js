// Sidebar and NavBar
const closeBtn = document.getElementById('close-btn');
const sideBar = document.getElementById('sidebar');
const navBtn = document.getElementById('nav-btn');
// Scroll on NavBar
const navBar = document.getElementById('nav');
// Sidebar Links to close Sidebar:
const sideLink = document.querySelector('.sidebar-links');
const socialLink = document.querySelector('.social-icons');
// Nav Links to scroll:
const navLinks = document.querySelector('.nav-links');
const link = document.querySelectorAll('.nav-link');
const scrollLinks = document.querySelectorAll('.scroll-link');
// Date:
const date = (document.getElementById(
  'footer-date'
).innerHTML = new Date().getFullYear());
//::::::::::::::::::::::::::::::::::::::
// Sidebar Funct
navBtn.addEventListener('click', () => {
  sideBar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar');
});
// Fixed Navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 160) {
    navBar.classList.add('navbar-fixed');
  } else {
    navBar.classList.remove('navbar-fixed');
  }
});
// Nav Btn on Scroll:
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    navBtn.classList.add('nav-btn-fixed');
  } else {
    navBtn.classList.remove('nav-btn-fixed');
  }
});
// Close Sidebar on Links Click
sideLink.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar');
});
socialLink.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar');
});

// Put navbar when page begins:
scrollLinks.forEach((item) => {
  item.addEventListener('click', (e) => {
    // console.log('you clicked'); // Vemos que FUNCIONA!
    e.preventDefault(); // Cancelamos el IR al ID
    const id = e.target.getAttribute('href').slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // console.log(element.offsetTop); // Nos muestra DONDE SE ENCUENTRA EL ELEMENTO al que queremos ir
    //
    // Position!
    let position;
    if (navBar.classList.contains('fixed')) {
      position = element.offsetTop - 45;
    } else {
      position = element.offsetTop - 73;
    }
    // Movimiento --->
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  });
});
