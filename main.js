// $(document).ready(function()  // ensure that the page is ready befor running this function
//   $('.menu-toggler').on('click', function() {   // adding event handler to '.menu-toggler'
//     $(this).toggleClass('open');  // changing the class to open
//     $('.top-nav').toggleClass('open');
//   });
// });

var menuToggler = document.querySelector(".menu-toggler");
menuToggler.addEventListener("click", function(){
this.classList.toggle('open');
var topNav = document.querySelector(".top-nav");
topNav.classList.toggle('open');
});
