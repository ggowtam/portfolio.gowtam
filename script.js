$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programmer", "Designer", "IotDeveloper", "Philosopher", "FitnessManiac"],
        typeSpeed: 60,
        backSpeed: 20,
        loop: true
    });


   
   
   
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    
    
    
    
    });
{
    gsap.from('.text-1',{opacity: 0, duration: 2, delay:.8, y:25})
    gsap.from('.text-2',{opacity: 0, duration: 2, delay:1, y:25})
    gsap.from('.text-3',{opacity: 0, duration: 2, delay:1.2, y:25})
    gsap.from('.logo', {opacity: 0, duration: 2, delay:1.5, y:25, ease:'expo.out', stagger:.2})
    gsap.from('.menu-btn', {opacity: 0, duration: 2, delay:1.8, y:40, ease:'expo.out', stagger:.2})
}


// {

//     function showanimateProgressBar(el, width){
//         el.animate(
//             {width: width}, 
//             {
//                 duration: 5000,
//                 step: function(now, fx) {
//                     if(fx.prop == 'width') {
//                         el.html(el.data("name") + ": " + Math.round(now * 100) / 100 + '%');
//                     }
//                 }
//             }        
//         );    
//     }

//     $('.progress').each(function(){
//        showanimateProgressBar($(this).find("div"), $(this).data("width")) 

//     });

// }{
    
//     function hideanimateProgressBar(el, width){
//         el.animate(
//             {width: !width}, 
//             {
//                 duration: 5000,
//                 step: function(now, fx) {
//                     if(fx.prop == 'width') {
//                         el.html(el.data("name") + ": " + Math.round(now * 100) / 100 + '%');
//                     }
//                 }
//             }        
//         );    
//     }

//     $('.progress').each(function(){
//        hideanimateProgressBar($(this).find("div"), $(this).data("width")) 

//     });
// }


const  skillsSection = document.getElementById('skills-section');
const  progressBars = document.querySelectorAll('.progress-bar');
 





    function showProgress(){
        progressBars.forEach(progressBar =>{
            const value = progressBar.dataset.progress;
            progressBar.style.opacity = 1;
            progressBar.style.width=`${value}%`;
        });
    }
    function hideProgress(){
        progressBars.forEach(p => {
            p.style.opacity = 0;
            p.style.width = 0;
        });
    }



    window.addEventListener('scroll',() => {
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 2;
        
        if(sectionPos < screenPos){
            showProgress();
        }else{
            hideProgress();
        }
        });
    
window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
});






