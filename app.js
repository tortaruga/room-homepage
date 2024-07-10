const mainImage = document.querySelector('.main-img');
const prevImgBtn = document.querySelector('.main-img__button--prev');
const nextImgBtn = document.querySelector('.main-img__button--next');
const openMenuBtn = document.querySelector('.nav__button--open-menu');
const closeMenuBtn = document.querySelector('.nav__button--close-menu');
const menu = document.querySelector('.nav__link-list');
const nav = document.querySelector('nav');
const navLogo = document.querySelector('.nav__logo');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const heading = document.querySelector('.description__heading');
const text = document.querySelector('.description__text');
const mainImgButtons = document.querySelector('.main-img__buttons');
const main = document.querySelector('main');

const mobileHeroImgs = [
  'url(./images/mobile-image-hero-1.jpg)',
  'url(./images/mobile-image-hero-2.jpg)',
   'url(./images/mobile-image-hero-3.jpg)' 
]

const desktopHeroImgs = [
    'url(./images/desktop-image-hero-1.jpg)',
    'url(./images/desktop-image-hero-2.jpg)',
    'url(./images/desktop-image-hero-3.jpg)'
]

const imageDescriptions = [
    "image of white chairs and a table with a bonsai on top",
    "image of three modern design chairs, one dark yellow, one greyish, one pale green but don't quote me on it cause i'm slightly colorblind",
    "image of a black chair"
]

const descriptionHeadings = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials'
]

const descriptionTexts = [
    'We provide unmatched quality, comfort, and style for property owners across the country.\nOur experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    'With stores all over the world, it\'s easy for you to find furniture for your home or place of business.\nLocally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
    'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
]

function changeHeading(index) {
    heading.textContent = descriptionHeadings[index];
}

function changeText(index) {
    text.textContent = descriptionTexts[index];
}

function handleSlide(index) {
    changeHeading(index);
    changeText(index);
    changeImgDescription(index);
}

function changeImgDescription(index) {
   mainImage.ariaLabel = imageDescriptions[index]
}

let mobilePhotoIndex = 0;
let desktopPhotoIndex = 0;

if (window.innerWidth > 700) {
    prevImgBtn.addEventListener('click', () => {
        desktopPhotoIndex--;
        if (desktopPhotoIndex < 0) {
            desktopPhotoIndex = 0;
        }
        changeImage(desktopHeroImgs, desktopPhotoIndex);
        handleSlide(desktopPhotoIndex);
    });
    nextImgBtn.addEventListener('click', () => {
        desktopPhotoIndex++;
        if (desktopPhotoIndex > desktopHeroImgs.length - 1) {
            desktopPhotoIndex = desktopHeroImgs.length - 1
        }
        changeImage(desktopHeroImgs, desktopPhotoIndex);
        handleSlide(desktopPhotoIndex);
    });
} else {
    prevImgBtn.addEventListener('click', () => {
        mobilePhotoIndex--;
        if (mobilePhotoIndex < 0) {
            mobilePhotoIndex = 0
        }
        changeImage(mobileHeroImgs, mobilePhotoIndex);
        handleSlide(mobilePhotoIndex);
    });
    nextImgBtn.addEventListener('click', () => {
        mobilePhotoIndex++;
        if (mobilePhotoIndex > mobileHeroImgs.length - 1) {
            mobilePhotoIndex = desktopHeroImgs.length - 1;
        }
        changeImage(mobileHeroImgs, mobilePhotoIndex);
        handleSlide(mobilePhotoIndex);  
    });
}

function changeImage(imagesArray, index)  {
    mainImage.style.background = imagesArray[index];
    mainImage.style.backgroundPosition = 'center'; 
    mainImage.style.backgroundSize = 'cover';
    mainImage.style.backgroundRepeat = 'no-repeat';
}


openMenuBtn.addEventListener('click', () => {
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'inline-block';
    menu.style.display = 'flex';
    navLogo.style.display = 'none';
    nav.style.background = 'white';
    backdrop.style.display = 'inline-block';
    body.style.overflow = 'hidden';
})

closeMenuBtn.addEventListener('click', () => {
    closeMenuBtn.style.display = 'none';
    openMenuBtn.style.display = 'inline-block';
    menu.style.display = 'none';
    navLogo.style.display = 'inline-block';
    nav.style.background = 'transparent';
    backdrop.style.display = 'none';
    body.style.overflow = 'auto';
})

handleResponsiveDesign();

window.addEventListener('resize', handleResponsiveDesign)


function handleResponsiveDesign() {
    if (window.innerWidth > 900) {  
        main.appendChild(mainImgButtons);
    } else {
        mainImage.appendChild(mainImgButtons);
    }
}