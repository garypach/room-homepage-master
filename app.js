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

let mobileImg = document.querySelector('.mobile-header-img');
let desktopImg = document.querySelector('.desktop-header-img');

let desktopImages = ['desktop-image-hero-1.jpg','desktop-image-hero-2.jpg','desktop-image-hero-3.jpg'];
let mobileImages = ['mobile-image-hero-1.jpg','mobile-image-hero-2.jpg','mobile-image-hero-3.jpg'];

let i = 0;

function prevImage(){
    if(i<=0){
        i = mobileImages.length;
    }
    i--;
    return setImg();
}
function nextImage(){
    if(i>= mobileImages.length -1){
        i = -1;
    }
    i++;
    return setImg();
}

function setImg(){
    return mobileImg.setAttribute('src','images/' + mobileImages[i]),desktopImg.setAttribute('srcset','images/' + desktopImages[i]);
}