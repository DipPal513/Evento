const header = document.querySelector('header');

window.onscroll = function () {
    if (this.scrollY >= 200) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky');
    }
}
//counter up  js plugin active
$('.count').countUp();


//owl carousel active 
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }

        }
    });
});

$(document).ready(function () {
    $('.brand-container').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 5
            }

        }
    });
});

//preloader
const preloader = document.querySelector('.preloader');
window.onload =() =>{
    preloader.style.display = 'none';
}


//scrollup function
const scrollUp = document.querySelector('#scrollUp')
window.onscroll = function(){
    if(this.scrollY >= 200){
        scrollUp.style.bottom = '10%'
    }
    else{
    scrollUp.style.bottom = '-10%'

}
}
scrollUp.addEventListener('click',()=>{
    window.scrollY = 0;
})