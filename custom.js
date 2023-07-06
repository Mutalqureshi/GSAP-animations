
if (window.innerWidth >= 1082) {
  
var ee = new EventEmitter();
    var scrollStartListener = function (slideNumber) {
      console.log("Scrolling to " + slideNumber);
    }
    var scrollEndListener = function (slideNumber) {
      console.log("Scrolling End. Now at section " + slideNumber);
    }
    ee.addListener('scrollStart', scrollStartListener);
    ee.addListener('scrollEnd', scrollEndListener);
    var smartscroll = $.smartscroll({
      sectionWrapperSelector: ".main-wrapper",
      sectionClass: "smt-scroll",
      headerHash: "a",
      animationSpeed: 2000,
      eventEmitter: ee
    });
    console.log(smartscroll);
}

// if (window.innerWidth >= 1082) {
//   const scrollSections = document.querySelectorAll("section.smt-scroll");
//   const normalSections = document.querySelectorAll(".main-wrapper > div");

//   let currentSection = 0; // Track the current active section
//   let isScrolling = false; // Flag to prevent multiple simultaneous scrolls

//   // Function to scroll to a specific section
//   function scrollToSection(index, sections) {
//     if (isScrolling) return;
//     isScrolling = true;

//     const section = sections[index];
//     gsap.to(window, {
//       scrollTo: { y: section.offsetTop },
//       onComplete: () => {
//         isScrolling = false;
//       },
//       ease: "power2.out",
//       duration: 2
//     });
//   }

//   // Event listener for mouse wheel scroll
//   let isWheeling = false; // Flag to prevent multiple wheel events
//   window.addEventListener("wheel", function (event) {
//     if (isWheeling) return;
//     isWheeling = true;

//     setTimeout(() => {
//       isWheeling = false;
//     }, 800);

//     if (event.deltaY > 0) {
//       // Scrolling down
//       if (currentSection < scrollSections.length - 1) {
//         currentSection++;
//         scrollToSection(currentSection, scrollSections);
//       }
//     } else {
//       // Scrolling up
//       if (currentSection > 0) {
//         currentSection--;
//         scrollToSection(currentSection, scrollSections);
//       } else if(currentSection == 4 ){
//         window.scrollTo({ top: normalSections[0].offsetTop, behavior: 'smooth' });
//       } else {
//         // If the current section is 0, do not apply scrolling animation
//         window.scrollTo({ top: normalSections[0].offsetTop, behavior: 'smooth' });
//       }
//     }
//   });
// }




// -------------------------- Smooth Scrolling GSAP Animation End ------------------------------



// #######################################################
// ################# Header Menu Button ##################
// #######################################################
function openNav() {
  if (window.innerWidth >= 767) {
      document.getElementById("csSidenav").style.width = "50%";
  } else{
      document.getElementById("csSidenav").style.width = "80%";
  }
  document.getElementById("csSidenav").classList.add("actv-br");
  document.getElementById("closebtn").classList.add("plusopen");
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("csSidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("closebtn").classList.remove("plusopen");
  document.getElementById("csSidenav").classList.remove("actv-br");
}




// #######################################################
// ############### Banner Mobile SLider ##################
// #######################################################

 $(document).ready(function(){
  $('.mb-slider-row').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    customPaging: function(slider, i) {
    return '<div class="custom-dot"></div>';
    },
    appendDots: '.custom-dots',
    asNavFor: '.slider-left-text'
  });
   $('.slider-left-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.mb-slider-row'
  });
});


// animation


// icontop
if (window.innerWidth <= 767) {
    gsap.to(".topiconslide.one", {
    duration: 1,
    delay: 0,
    top: 130,
    ease: "Power1.easeOut"
  });
}  else{
    gsap.to(".topiconslide.one", {
    duration: 1,
    delay: 0,
    top: -35,
    ease: "Power1.easeOut"
  });
}
 // iconleft
  if (window.innerWidth <= 767) {
    gsap.to(".lefticonslide.one", {
      duration: 1,
      delay: 0,
      bottom: -239,
      ease: "Power1.easeOut"
    });
  } else{
      if(window.innerWidth >= 1750){
        gsap.to(".lefticonslide.one", {
          duration: 1,
          delay: 0,
          bottom: 335,
          ease: "Power1.easeOut"
        });
      } else{
          gsap.to(".lefticonslide.one", {
            duration: 1,
            delay: 0,
            bottom: 239,
            ease: "Power1.easeOut"
          });
      }
  }
// centericonslide
  if (window.innerWidth <= 767) {
    gsap.to(".centericonslide.one", {
      duration: 1,
      delay: 0,
      bottom: -330,
      ease: "Power1.easeOut"
    });
  } else{
    gsap.to(".centericonslide.one", {
      duration: 1,
      delay: 0,
      bottom: 97,
      ease: "Power1.easeOut"
    });
  }
$(".mb-slider-row").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
  // Check if the next slide has a specific class or any other condition you want to use
  if ($(".slick-slide[data-slick-index='" + nextSlide + "']").hasClass("mb1")) {
    
    // icontop
    if (window.innerWidth <= 767) {
    gsap.to(".topiconslide.one", {
      duration: 1,
      delay: 0,
      top: 130,
      ease: "Power1.easeOut"
    });
  } else{
    gsap.to(".topiconslide.one", {
      duration: 1,
      delay: 0,
      top: -35,
      ease: "Power1.easeOut"
    });
  }
  if(window.innerWidth >= 1750){
    gsap.to(".topiconslide.three", {
          duration: 1,
          delay: 0,
          top: -450,
          ease: "Power1.easeOut"
      });
  } else{
      gsap.to(".topiconslide.three", {
          duration: 1,
          delay: 0,
          top: -450,
          ease: "Power1.easeOut"
      });
  }
    // icontopend

     // iconleft
     if (window.innerWidth <= 767) {
      gsap.to(".lefticonslide.one", {
        duration: 1,
        delay: 0,
        bottom: -239,
        ease: "Power1.easeOut"
      });
    } else if(window.innerWidth >= 1750){
        gsap.to(".lefticonslide.one", {
          duration: 1,
          delay: 0,
          bottom: 335,
          ease: "Power1.easeOut"
        });
    } else{
      gsap.to(".lefticonslide.one", {
        duration: 1,
        delay: 0,
        bottom: 239,
        ease: "Power1.easeOut"
      });
    }
    if (window.innerWidth <= 767) {
    gsap.to(".lefticonslide.three", {
      duration: 1,
      delay: 0,
      bottom: -500,
      ease: "Power1.easeOut"
    });
  } else{
    gsap.to(".lefticonslide.three", {
      duration: 1,
      delay: 0,
      bottom: -250,
      ease: "Power1.easeOut"
    });
  }

    // centericonslide
    if (window.innerWidth <= 767) {
      gsap.to(".centericonslide.one", {
          duration: 1,
          delay: 0,
          bottom: -330,
          ease: "Power1.easeOut"
        });
    } else{
      gsap.to(".centericonslide.one", {
          duration: 1,
          delay: 0,
          bottom: 97,
          ease: "Power1.easeOut"
        });
    }
    if (window.innerWidth <= 767) {
      gsap.to(".centericonslide.three", {
          duration: 1,
          delay: 0,
          bottom: -600,
          ease: "Power1.easeOut"
        });
      } else{
          gsap.to(".centericonslide.three", {
            duration: 1,
            delay: 0,
            bottom: -330,
            ease: "Power1.easeOut"
          });
      }
  } else if($(".slick-slide[data-slick-index='" + nextSlide + "']").hasClass("mb2")){
          if (window.innerWidth <= 767) {
              gsap.to(".topiconslide.two", {
                  duration: 1,
                  delay: 0,
                  top: 130,
                  ease: "Power1.easeOut"
              });
          } else{
              gsap.to(".topiconslide.two", {
              duration: 1,
              delay: 0,
              top: -35,
              ease: "Power1.easeOut"
            });
          }
          if(window.innerWidth >= 1750){
            gsap.to(".topiconslide.one", {
              duration: 1,
              delay: 0,
              top: -450,
              ease: "Power1.easeOut"
            });
          } else{
            gsap.to(".topiconslide.one", {
              duration: 1,
              delay: 0,
              top: -330,
              ease: "Power1.easeOut"
            });
          }

        // iconleft
        if (window.innerWidth <= 767) {
          gsap.to(".lefticonslide.two", {
            duration: 1,
            delay: 0,
            bottom: -239,
            ease: "Power1.easeOut"
          });
      } else if(window.innerWidth >= 1750){
          gsap.to(".lefticonslide.two", {
            duration: 1,
            delay: 0,
            bottom: 335,
            ease: "Power1.easeOut"
          });
      } else{
        gsap.to(".lefticonslide.two", {
          duration: 1,
          delay: 0,
          bottom: 239,
          ease: "Power1.easeOut"
        });
      }
      if (window.innerWidth <= 767) {
        gsap.to(".lefticonslide.one", {
          duration: 1,
          delay: 0,
          bottom: -500,
          ease: "Power1.easeOut"
        });
      } else{
        gsap.to(".lefticonslide.one", {
          duration: 1,
          delay: 0,
          bottom: -250,
          ease: "Power1.easeOut"
        });
      }
          // centericonslide
          if (window.innerWidth <= 767) {
              gsap.to(".centericonslide.two", {
                  duration: 1,
                  delay: 0,
                  bottom: -330,
                  ease: "Power1.easeOut"
              });
          } else{
            gsap.to(".centericonslide.two", {
                  duration: 1,
                  delay: 0,
                  bottom: 97,
                  ease: "Power1.easeOut"
              });
          }
          if (window.innerWidth <= 767) {
            gsap.to(".centericonslide.one", {
              duration: 1,
              delay: 0,
              bottom: -600,
              ease: "Power1.easeOut"
            });
          } else{
            gsap.to(".centericonslide.one", {
              duration: 1,
              delay: 0,
              bottom: -330,
              ease: "Power1.easeOut"
            });
          }
  }
  else if($(".slick-slide[data-slick-index='" + nextSlide + "']").hasClass("mb3")){
      if (window.innerWidth <= 767) {
      gsap.to(".topiconslide.three", {
          duration: 1,
          delay: 0,
          top: 130,
          ease: "Power1.easeOut"
        });
    } else{
      gsap.to(".topiconslide.three", {
          duration: 1,
          delay: 0,
          top: -35,
          ease: "Power1.easeOut"
        });
    }
    if(window.innerWidth >= 1750){
        gsap.to(".topiconslide.two", {
          duration: 1,
          delay: 0,
          top: -450,
          ease: "Power1.easeOut"
        });
      } else{
         gsap.to(".topiconslide.two", {
          duration: 1,
          delay: 0,
          top: -330,
          ease: "Power1.easeOut"
        });
      }

        // iconleft
        if (window.innerWidth <= 767) {
          gsap.to(".lefticonslide.three", {
            duration: 1,
            delay: 0,
            bottom: -250,
            ease: "Power1.easeOut"
          });
        } else if(window.innerWidth >= 1750){
          gsap.to(".lefticonslide.three", {
            duration: 1,
            delay: 0,
            bottom: 335,
            ease: "Power1.easeOut"
          });
        } else{
          gsap.to(".lefticonslide.three", {
            duration: 1,
            delay: 0,
            bottom: 239,
            ease: "Power1.easeOut"
          });
        }
        if (window.innerWidth <= 767) {
         gsap.to(".lefticonslide.two", {
          duration: 1,
          delay: 0,
          bottom: -500,
          ease: "Power1.easeOut"
        });
       } else{
        gsap.to(".lefticonslide.two", {
          duration: 1,
          delay: 0,
          bottom: -250,
          ease: "Power1.easeOut"
        });
       }
          // centericonslide
          if (window.innerWidth <= 767) {
            gsap.to(".centericonslide.three", {
              duration: 1,
              delay: 0,
              bottom: -330,
              ease: "Power1.easeOut"
            });
          } else{
              gsap.to(".centericonslide.three", {
                duration: 1,
                delay: 0,
                bottom: 97,
                ease: "Power1.easeOut"
              });
          }
          if (window.innerWidth <= 767) {
            gsap.to(".centericonslide.two", {
              duration: 1,
              delay: 0,
              bottom: -600,
              ease: "Power1.easeOut"
            });
          } else{
            gsap.to(".centericonslide.two", {
              duration: 1,
              delay: 0,
              bottom: -330,
              ease: "Power1.easeOut"
            });
          }
        
  }

   else {
    if(window.innerWidth >= 1750){
      gsap.to(".topiconslide", {
        duration: 1,
        delay: 0,
        top: -450,
        ease: "Power1.easeOut"
      });
    } else{
        gsap.to(".topiconslide", {
        duration: 1,
        delay: 0,
        top: -330,
        ease: "Power1.easeOut"
        });
    }
    gsap.to(".lefticonslide", {
          duration: 1,
          delay: 0,
          bottom: -250,
          ease: "Power1.easeOut"
      });
    gsap.to(".centericonslide", {
          duration: 1,
          delay: 0,
          bottom: -330,
          ease: "Power1.easeOut"
      });
  }
});



// ############################################################
// #################### Accordion JS ##########################
// ############################################################
// Initialize GSAP timeline
var tl = gsap.timeline({ paused: true });

// Select accordion titles and contents
var accordionTitles = document.querySelectorAll('.accordion-title');
var accordionContents = document.querySelectorAll('.accordion-content');

// Set initial state of accordion contents
gsap.set(accordionContents, { height: 0, opacity: 0 });

// Iterate through each accordion
accordionTitles.forEach(function (title, index) {
  var content = accordionContents[index];

  // Add click event listener to each accordion title
  title.addEventListener('click', function () {
    if (content.classList.contains('active')) {
      // Hide the content when it is already active
      tl.to(content, { height: 0, opacity: 0, duration: 0.3 });
      content.classList.remove('active');
    } else {
      // Hide other active contents and show the clicked content
      accordionContents.forEach(function (otherContent) {
        if (otherContent !== content && otherContent.classList.contains('active')) {
          tl.to(otherContent, { height: 0, opacity: 0, duration: 0.3 });
          otherContent.classList.remove('active');
        }
      });

      // Show the clicked content
      tl.to(content, { height: 'auto', opacity: 1, duration: 0.3 });
      content.classList.add('active');
    }
  });
});

// Play the timeline when the page is loaded
tl.play();




$(document).ready(function() {
    // $('.custom-accordions .accordion-title').click(function() {
    //   var currentContent = $(this).next('.accordion-content');
    //   if (currentContent.is(':visible')) {
    //     currentContent.slideUp();
    //   } else {
    //     $('.custom-accordions .accordion-content').slideUp();
    //     currentContent.slideDown();
    //   }
    // });

    // ######### client slier #########
    jQuery('.see-what-slider').slick({
          speed: 5000,
          autoplay: true,
          autoplaySpeed: 0,
          centerMode: true,
          cssEase: 'linear',
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: true,
          initialSlide: 1,
          arrows: false,
          buttons: false,
          pauseOnHover: false,

  });

});

// ############################################################
//######################## back on top ########################
// ############################################################
gsap.set("#backToTopBtn", { opacity: 0 });

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
    gsap.to("#backToTopBtn", { opacity: 1, duration: 0.3 });
  } else {
    gsap.to("#backToTopBtn", { opacity: 0, duration: 0.3 });
  }
});

document.getElementById("backToTopBtn").addEventListener("click", function() {
  gsap.to(window, { scrollTo: 0, duration: 1, ease: "power1.easeOut" });
});


// ############################################################
//###################### Left To Right  #######################
// ############################################################
if (window.innerWidth >= 1082) {
  const headingLeft = gsap.timeline({
    scrollTrigger: {
      trigger: ".secondssmtsec",
      start: "top 80%",
      end: "top 20%",
      scrub: true
    }
  });
  headingLeft.from(".animation-on-left", { opacity: 0, x: -300, duration: 2, ease: "power1.easeOut" });
  // headingLeft.from(".animation-on-left", { opacity: 0, x: -300 });

  const headingRight = gsap.timeline({
    scrollTrigger: {
      trigger: ".secondssmtsec",
      start: "top 80%",
      end: "top 20%",
      scrub: true
    }
  });
  headingRight.from(".main-text", { opacity: 0, x: 300, duration: 2, ease: "power1.easeOut" });

// ############################################################
//################## Portfolio section  #######################
// ############################################################
// prtleft-content
const portfolio_heading = gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio-section",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
portfolio_heading.from(".leftanimation", { opacity: 0, x: -300, duration: 2, ease: "power1.easeOut" });

// prf-cont
const portfolios = gsap.timeline({
  scrollTrigger: {
    trigger: ".Jeem",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
const portfolios2= gsap.timeline({
  scrollTrigger: {
    trigger: ".TO-DO",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
const portfolios3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Sougha",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
const portfolios4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Dafrah",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
const portfolios5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Training",
    start: "top 80%",
    end: "bottom 70%",
    scrub: true
  }
});
const portfolios6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Spoongy",
    start: "top 80%",
    end: "bottom 70%",
    scrub: true
  }
});
const portfolios7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Latodur",
    start: "top 80%",
    end: "bottom 70%",
    scrub: true
  }
});
const portfolios8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Mother",
    start: "top 80%",
    end: "bottom 70%",
    scrub: true,
    markter: true
  }
});
const portfolios9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Marry",
    start: "top 80%",
    end: "bottom 95%",
    scrub: true
  }
});
const portfolios10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Abojomla",
    start: "top 80%",
    end: "bottom 95%",
    scrub: true
  }
});
const portfolios11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Kam",
    start: "top 80%",
    end: "bottom 95%",
    scrub: true
  }
});
const portfolios12 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Flap",
    start: "top 80%",
    end: "bottom 95%",
    scrub: true

  }
});

portfolios.from(".Jeem", { opacity: 0, x: 300, duration: 4, ease: "power1.easeOut" });
portfolios2.from(".TO-DO", { opacity: 0, x: 600, duration: 4, ease: "power1.easeOut" });
portfolios3.from(".Sougha", { opacity: 0, x: 900, duration: 4, ease: "power1.easeOut" });
portfolios4.from(".Dafrah", { opacity: 0, x: 1200, duration: 4, ease: "power1.easeOut" });
// -- ROW END -- //
portfolios5.from(".Training", { opacity: 0, x: 1250, duration: 4, ease: "power1.easeOut" });
portfolios6.from(".Spoongy", { opacity: 0, x: 950, duration: 4, ease: "power1.easeOut" });
portfolios7.from(".Latodur", { opacity: 0, x: 650, duration: 4, ease: "power1.easeOut" });
portfolios8.from(".Mother", { opacity: 0, x: 350, duration: 4, ease: "power1.easeOut" });
// -- ROW END -- //
portfolios9.from(".Marry", { opacity: 0, x: 300, duration: 4, ease: "power1.easeOut" });
portfolios10.from(".Abojomla", { opacity: 0, x: 600, duration: 4, ease: "power1.easeOut" });
portfolios11.from(".Kam", { opacity: 0, x: 900, duration: 4, ease: "power1.easeOut" });
portfolios12.from(".Flap", { opacity: 0, x: 1200, duration: 4, ease: "power1.easeOut" });



// ############################################################
// #################### What we offer  ########################
// ############################################################

const headingLeft_wt = gsap.timeline({
  scrollTrigger: {
    trigger: ".what-we-offer",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
headingLeft_wt.from(".left-an", { opacity: 0, x: -300, duration: 2, ease: "power1.easeOut" });
// headingLeft.from(".animation-on-left", { opacity: 0, x: -300 });

const headingRight_wt = gsap.timeline({
  scrollTrigger: {
    trigger: ".what-we-offer",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
headingRight_wt.from(".right-an", { opacity: 0, x: 300, duration: 2, ease: "power1.easeOut" });

const headingTop_wt = gsap.timeline({
  scrollTrigger: {
    trigger: ".what-we-offer",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
headingTop_wt.from(".top-an", { opacity: 0, y: -300, duration: 2, ease: "power1.easeOut" });
// headingRight.from(".main-text", { opacity: 0, x: 300 });


// ############################################################
// ##################### How It Work  #########################
// ############################################################

const hwitwk = gsap.timeline({
  scrollTrigger: {
    trigger: ".how-it-work",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
hwitwk.from(".hwitwk-content", { opacity: 0, x: -300, duration: 2, ease: "power1.easeOut" });

const hwitwk_bx1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".how-it-work",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
hwitwk_bx1.from(".hwitwk-box.one", { opacity: 0, y: 100, duration: 2, ease: "power1.easeOut" });

const hwitwk_bx2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".how-it-work",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
hwitwk_bx2.from(".hwitwk-box.two", { opacity: 0, y: 450, duration: 2, ease: "power1.easeOut" });

const hwitwk_bx3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".how-it-work",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
hwitwk_bx3.from(".hwitwk-box.three", { opacity: 0, y: 900, duration: 2, ease: "power1.easeOut" });

const hwitwk_bx4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".how-it-work",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
hwitwk_bx4.from(".hwitwk-box.four", { opacity: 0, y: 1400, duration: 2, ease: "power1.easeOut" });



// ############################################################
// ##################### Case Studies  ########################
// ############################################################

  const headingLeft_cs = gsap.timeline({
  scrollTrigger: {
    trigger: ".casewrapper",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
headingLeft_cs.from(".left-an-cs", { opacity: 0, x: -300, duration: 2, ease: "power1.easeOut" });

const headingRight_cs = gsap.timeline({
  scrollTrigger: {
    trigger: ".casewrapper",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
headingRight_cs.from(".right-an-cs", { opacity: 0, x: -300, duration: 2, ease: "power1.easeOut" });

const headingTop_cs = gsap.timeline({
  scrollTrigger: {
    trigger: ".casewrapper",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});
headingTop_cs.from(".anim", { opacity: 0, x: 300, duration: 2, ease: "power1.easeOut" });

} // condtion just these js appear on desktop devices not mobile or ipads 