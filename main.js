const menu = document.getElementById('menu')
const iconOpen = document.querySelector('.icon-hamburger')
const iconClose = document.querySelector('.icon-close')

iconOpen.addEventListener('click', ()=>{
    menu.style.transform = "translateY(0)"
    menu.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
})

iconClose.addEventListener('click', ()=>{
    menu.style.transform = "translateY(-550px)"
    menu.style.backgroundColor = "rgba(0, 0, 0, 0)"
})

const left = document.querySelectorAll('.icon-left')
const right = document.querySelectorAll('.icon-right')

const businessInfo = document.querySelectorAll('.info')
const innovation = document.querySelector('.innovation')
const available = document.querySelector('.available')
const manufacture = document.querySelector('.manufacture')

const header = document.getElementById('header')

let currentSlide = innovation;

const updateBackgroundImage = () => {
    const isDesktop = window.innerWidth > 500;
    let bgImage = '';
    if (currentSlide === innovation) {
        bgImage = isDesktop ? 'url(./images/desktop-image-hero-1.jpg)' : 'url(./images/mobile-image-hero-1.jpg)';
    } else if (currentSlide === available) {
        bgImage = isDesktop ? 'url(./images/desktop-image-hero-2.jpg)' : 'url(./images/mobile-image-hero-2.jpg)';
    } else if (currentSlide === manufacture) {
        bgImage = isDesktop ? 'url(./images/desktop-image-hero-3.jpg)' : 'url(./images/mobile-image-hero-3.jpg)';
    }
    header.style.backgroundImage = bgImage;
};

right.forEach(elm =>{
    elm.addEventListener('click', ()=>{
    if(currentSlide === innovation){
        innovation.classList.add('hidden');
        available.classList.remove('hidden');
        manufacture.classList.add('hidden');
        currentSlide = available;
    } else if(currentSlide === available){
        innovation.classList.add('hidden');
        available.classList.add('hidden');
        manufacture.classList.remove('hidden');
        currentSlide = manufacture;
    } else if(currentSlide === manufacture){
        innovation.classList.remove('hidden');
        available.classList.add('hidden');
        manufacture.classList.add('hidden');
        currentSlide = innovation;
    }
    updateBackgroundImage(); 
})
})

left.forEach(elm =>{
    elm.addEventListener('click', ()=>{
    if(currentSlide === innovation){
        innovation.classList.add('hidden');
        available.classList.add('hidden');
        manufacture.classList.remove('hidden');                
        currentSlide = manufacture;
    } else if(currentSlide === manufacture){
        innovation.classList.add('hidden');
        available.classList.remove('hidden');
        manufacture.classList.add('hidden');
        currentSlide = available;
    } else if(currentSlide === available){
        innovation.classList.remove('hidden');
        available.classList.add('hidden');
        manufacture.classList.add('hidden');
        currentSlide = innovation;
    }
    updateBackgroundImage(); 
})
})



window.addEventListener('resize', () => {
    updateBackgroundImage();
});

updateBackgroundImage();