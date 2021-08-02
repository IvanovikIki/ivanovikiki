const menuToggle = document.querySelector('.togle')
const topmenu = document.querySelector('.navbarTop')
const navbar = document.querySelector('.navbar')
const section = document.querySelector('.section')
const night = document.querySelector('.night')
const dark = document.querySelector('.light')
const lightleft = document.querySelector('.left')
const lightright = document.querySelector('.right')
const scroll = new SmoothScroll('a[href*="#"]');


menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active')
  topmenu.classList.toggle('active')
  section.classList.toggle('active')
})
night.addEventListener('click', () => {
  dark.classList.toggle('dark')
})

night.addEventListener('click', () => {
  lightleft.classList.toggle('leftlight')
  lightright.classList.toggle('rightlight')

})

var img = document.getElementById('darklogo').src;
var img1 = document.getElementById('kurac').src;
var toggle = false;
function imgtoggle() {
    if (toggle === true) {
        document.getElementById('darklogo').src  = '../img/1logo1.png';
        document.getElementById('kurac').src  = '../img/1logo1.png';
    } else {
       document.getElementById('darklogo').src = '../img/1logodark.png';
       document.getElementById('kurac').src = '../img/1logodark.png';
    }
    toggle = !toggle;
}



// var img1 = document.getElementById('kurac').src;
// var toggle = false;
// function imgtoggle() {
//     if (toggle === true) {
//         document.getElementById('kurac').src  = '../img/1logo1.png';
//     } else {
//        document.getElementById('kurac').src = '../img/1logodark.png';
//     }
//     toggle = !toggle;
// }
