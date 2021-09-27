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

let textArray = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
]
let headerArray = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
]
let changeText = document.querySelector('.change-text');
let changeHeader = document.querySelector('.change-text-header');

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
    return mobileImg.setAttribute('src','images/' + mobileImages[i]),desktopImg.setAttribute('srcset','images/' + desktopImages[i]),(changeText.textContent = textArray[i]),(changeHeader.textContent = headerArray[i]);
}

