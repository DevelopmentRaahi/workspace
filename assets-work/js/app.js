(function () {
  "use strict";

  let mybutton = document.getElementById("btn-back-to-top");
  let socialIcons = document.querySelector(".whatsap_button");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      socialIcons.style.display = "block";
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
      socialIcons.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // window.addEventListener('scroll', function() {
  //   var navbar = document.getElementById('navbg');
  //   if (window.scrollY > 50) {
  //     // navbar.classList.add('bg-change_now');
  //     navbar.style.backgroundColor = "#fff";
  //   }
  // });

  /*=============== SHOW MENU ===============*/

  /**

*/

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector("#btn-back-to-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  function initializeSwiper() {
    let swiperConfig = {
      slidesPerView: window.innerWidth < 768 ? 1 : 3,
      spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
      },
    };

    new Swiper(".mySwiper", swiperConfig);
  }
  if (document.querySelector(".mySwiper")) {
    initializeSwiper();
  }
  window.addEventListener("resize", function () {
    if (document.querySelector(".mySwiper")) {
      initializeSwiper();
    }
  });
  
})();
 const imgUrls = [
    'https://lh3.googleusercontent.com/lnKMKzG04slLdUqd5Mi4Jyur9xq2nEWkyF4NVo2gY9pcWOxa0-Fj_gbLwm44Gf-BrAHkAiL94VPriLKJWvfq94X6cLT7TpXgdg-4=e365-pa-nu-rw-w1368',
    'https://lh3.googleusercontent.com/50hgC680XBanADo74LgX_PJTNZoBVyle3yj0BztzOiK7jOC4frtlgZNwKvtA10u7h6c34lYtgyTIXTlNZPaDFzH6Ks0MuqMRmCCM9w=e365-pa-nu-s0-rw',
    'https://lh3.googleusercontent.com/0R1T21INQyD736gHz7f-ap6h58TNp9enu7RBl4e_shCfw_byTq4SGwXLhPJCBNwk5Z-2Lyts5yeQoejsdCpWmW_RnVrNgb7JIkSP=e365-pa-nu-rw-w1404',
    'https://lh3.googleusercontent.com/rc_GCRnepGXUH9_0rowtCIARmhJyV-ZlMMyouzKGd8VQ-BiuucImt3fHuKv8drVj3UrKV11nQM1-o5yJTfsfy9gj8oahQrOl-dP1=e365-pa-nu-s0-rw'
]
  
const secondUrls = [
  'https://lh3.googleusercontent.com/1jTLIUKEd2J48EJ-OzjO5eGVdpGI0fhsayh9iP9_Jfw_FOlLqDajv5RWB33Iwc9KEwwis8jHpn534LUDfggbFRIA3Xun-REuHi9z=e365-pa-nu-s0-rw',
  'https://lh3.googleusercontent.com/kJDQVDm26HvxOqmOf1VmJOY5RNQX80F_vGQfZ48VC1qbE6N04EjJFVHPpJ9qZSH2H-In57stc9W3UwmAWQPzMsk-410ap4Oovpnr=e365-pa-nu-s0-rw',
  'https://lh3.googleusercontent.com/ke4J0YBy41aiZcvyVVTbMpOg6n891sotgktz7XCRIm6oxyLGqbujD_DuQaAoDpGodQousVz-oYwrYtgmT6yUL1TA-ZA1AhJ4Y8gJ1Q=e365-pa-nu-s0-rw',
  'https://lh3.googleusercontent.com/tltbnMK4PzheD-uTJU7dI-4aW4D8aH6rjFDMen-Mjaq5yVBfl5qoA-c20LFBTfmZSg6DSFH5eVTE6K4wndOiGHyRdMiWIO4MDOo_=e365-pa-nu-s0-rw'
]
function initHelpBuss(containerId) {
  const activeDropdown = document.querySelectorAll(`${containerId} .hb-header`);
  const allDropDown = document.querySelectorAll(`${containerId} .hb-header h3`);
  const contentBody = document.querySelectorAll(`${containerId} .hb-header .hb-body`);
  const targetImg = document.querySelector(`${containerId} #hb-img img`);

  allDropDown.forEach((item, index) => {
    item.addEventListener('click', () => {
      // removing active class
      contentBody.forEach(item => item.classList.remove('active'));   
      activeDropdown.forEach(item => item.classList.remove('active'));
      allDropDown.forEach(item => item.classList.remove('active'));

      // adding active class
      activeDropdown[index].classList.add('active');
      allDropDown[index].classList.add('active');
      contentBody[index].classList.add('active');
      if(containerId === "#help-buss_second"){
        targetImg.src = secondUrls[index];
        return
      }
      if(imgUrls[index]){
        targetImg.src = imgUrls[index];
      }
      
    })
  })
}
initHelpBuss("#help-buss");
initHelpBuss("#help-buss_second");


// form js

// form js
{/* <script>
  const textarea = document.getElementById('query');
  const wordCount = document.getElementById('wordCount');

  textarea.addEventListener{('input', () => {
    const words = textarea.value.trim().split(/\s+/); */}

    // if (words.length > 80) {
      // limit to 80 words
    //   textarea.value = words.slice(0, 80).join(' ');
    // }

    // update live word count
//     wordCount.textContent = `${words.length}/80 words`;
//   })};
// </script>

