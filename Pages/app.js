// Sidebar and NavBar
const closeBtn = document.getElementById('close-btn');
const sideBar = document.getElementById('sidebar');
const navBtn = document.getElementById('nav-btn');
// Scroll on NavBar
const navBar = document.getElementById('nav');

// Sidebar Funct
navBtn.addEventListener('click', () => {
  sideBar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar');
});
