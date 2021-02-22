$(document).ready(function(){


    // change BackGround
    let landingPage = document.querySelector(".header");

    let arrayImg = ["1.jpg" ,"2.jpg"];
    
    setInterval(() => {
    
        let randomNum = Math.floor(Math.random() * arrayImg.length );
    
        landingPage.style.backgroundImage = 'url("images/' + arrayImg[randomNum] + '")';
    
        landingPage.style.transition = '1s ease-in-out';
    
    }, 3000);





   
   //  start scrollTop
   $(function(){


    var scrollbutton = $("#scroll");

    $(window).scroll(function(){

        if ( $(this).scrollTop()>=300)
        {
            scrollbutton.show();
        }
        else
        {
            scrollbutton.hide();
        }
    });

    scrollbutton.click(function(){
        $("html,body").animate({ scrollTop : 0 } , 1000);
    });
    

  }); 



 // wooooooooow
 var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
// woooooooooooow






// counter
$(".num").counterUp({
    delay:10,
    time:3000
  });




//formButtons
const btns = document.querySelectorAll('.form-btn');
const content = document.querySelector('.p-box');
const form = document.querySelector(".form");

form.addEventListener('click' , function(e){

  const id = e.target.dataset.id;

  if(id){

    btns.forEach( btn => {
      // remove & ad class active
      btn.classList.remove('active');
      e.target.classList.add('active');
      content.style.display='block';
    });
   
  }
});




// services
const Services = document.querySelector('.services');
const ServButns = document.querySelectorAll('.servbtn');
const ServInfo = document.querySelectorAll('.serv-info');
const SerFrist = document.querySelector('.serv-frist');

Services.addEventListener('click' , (e) => {

  const idServ = e.target.dataset.id;

  if(idServ){

    ServButns.forEach( ahmed => {
      ahmed.classList.remove('active');
      e.target.classList.add('active');

    });

    ServInfo.forEach( article => {
      article.classList.remove("active");
    });

    const element = document.getElementById(idServ);
    element.classList.add('active');
    SerFrist.style.display="none";
  };

});






// toggleBars
const barToggle = document.querySelector('.bars');
const sideBar = document.querySelector('.sidebar');
const closeSide = document.querySelector('.close');


barToggle.addEventListener('click' , function(){
    sideBar.classList.toggle("show-sidebar")
});

closeSide.addEventListener('click' , function(){
    sideBar.classList.remove('show-sidebar');
});




});



// loading overlay
$(window).on('load', function(){ 
  {
    $(".loading-overlay,.loading-overlay .loader").fadeOut(5000);
  };
});
