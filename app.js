const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu nav');
const closebtn = document.querySelector('.close');

let isNavOpen = false;

hamburger.addEventListener('click', () => {
    if (isNavOpen) {
        isNavOpen = false;
        nav.style.display = 'none';
        closebtn.style.display = 'none';
    } else {
        isNavOpen = true;
        nav.style.display = 'block';
        closebtn.style.display = 'block';
        hamburger.style.display ="none";
    }
});

closebtn.addEventListener('click', () => {
    if (isNavOpen) {
        isNavOpen = false;
        nav.style.display = 'none';
        closebtn.style.display = 'none';
        hamburger.style.display ="block";
    }
});