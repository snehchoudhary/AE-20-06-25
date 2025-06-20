
// TypeWriter effect
// const text = "Total Pipeline Integrity Management Solutions (T-PIMS)";
// const speed = 150;
// let i = 0;
// function typeWriter(){
//     if(i<text.length){
//         document.getElementById("typeWriter").innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }
// typeWriter();

// Flipbook
// let currentPage = 1;

// const pages = [
//   {
//     title: "Lorem Ipsum",
//     content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//   },
//   {
//     title: "About Us",
//     content: "This is the second page of the book. We are a creative design company focused on bringing ideas to life through beautiful user experiences."
//   },
//   {
//     title: "Our Mission",
//     content: "Our mission is to deliver top-quality digital products with a strong focus on customer satisfaction, innovation, and integrity."
//   },
//   {
//     title: "Thank You",
//     content: "You have reached the last page of the 3D book. We hope you enjoyed the experience! Click below to restart."
//   }
// ];

// function flipPage() {
//   const book = document.getElementById("book");
//   const title = document.getElementById("title");
//   const paragraph = document.getElementById("paragraph");

//   if (currentPage < pages.length - 1) {
//     currentPage++;
//     book.style.transform = `rotateY(-${currentPage * 5}deg)`; // subtle flip
//     title.textContent = pages[currentPage].title;
//     paragraph.textContent = pages[currentPage].content;
//   } else {
//     // Last page reached
//     currentPage = 0;
//     book.style.transform = "rotateY(0deg)";
//     title.textContent = pages[0].title;
//     paragraph.textContent = pages[0].content;
//   }
// }
// const link = document.querySelector(".text a");

// if (currentPage === pages.length - 1) {
//   link.innerHTML = 'Start Over <i class="fa fa-refresh"></i>';
// } else {
//   link.innerHTML = 'Read More <i class="fa fa-long-arrow-right"></i>';
// }


document.querySelectorAll("a[href='#'], a.prevent-default").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent scrolling to top
  });
});



let currentPage = 0;
    function flipNext() {
      event.preventDefault();
      currentPage++;
      document.getElementById("book").style.transform = `rotateY(-${currentPage * 180}deg)`;
    }

    function flipBack() {
      currentPage = 0;
      document.getElementById("book").style.transform = `rotateY(0deg)`;
    }
    

    // 
    function showContent(id) {
      // Hide all content sections
      const contents = document.querySelectorAll('.content');
      contents.forEach(c => c.classList.remove('active'));
    //show selected sections
    document.getElementById(id).classList.add('active');
    }
// auto-type effect
// var typed = new Typed(".auto-type", {
//     strings: ["User Management", "Asset Master", "CP Module", "ILI Module", "GIS Integration", "Risk Management", "Activity Scheduler"],
//     typeSpeed: 150,
//     backSpeed: 150,
//     loop: true
// })


//Initialize swiper

// const swiper = new Swiper('.swiper', {
   
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 25,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   dynamicBullets: true,
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
//Responsive breakpoints
   // breakpoints: {
       
  //       0:{
  //           slidesPerView: 1
  //       },

  //       768:{
  //           slidesPerView: 2
  //       },

  //       1024:{
  //           slidesPerView: 3
  //       }
  //   }
  // });

  //  const swiper = new Swiper('.swiper', {
  
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  //  navigation: //{
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  // },

// });

const swiper = new Swiper('.list .container', {
  direction: 'horizontal',
  freeMode: true,
  mousewheel: {
    enabled: true,
    senstivity: 1,
    thresholdDelta: 50,
    threshholdTime: 500,
  },
  slidesPerView:'auto',
  loop: true,
  spaceBetween: 15,
  // autoplay:{
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  speed: 2000,
  grabCursor: true,

  // Navigation arrows
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0: {
      slidesPerView: 3,
      mousewheel: {
        enabled: true,
        senstivity: 0.5,
        thresholdDelta: 30,
      }
    },
    768: {
      slidesPerView: 1,
      mousewheel: {
        enabled: true,
        senstivity: 0.8,
        thresholdDelta: 40,
      }
    },
    1024: {
      slidesPerView: 2,
      mousewheel: {
        enabled: true,
        senstivity: 1.2, 
        thresholdDelta: 60,
      }
    }
  }
});

// document.querySelector('.swiper-button-next').addEventListener('click', function(e){
//    e.preventDefault();
//   swiper.slidePrev(); // manually go to previous
// });

// document.querySelector('.swiper-button-prev').addEventListener('click', function(e){
//   e.preventDefault();
//   swiper.slideNext(); // manually go to next
// });

//  Card flip functionality
 function flipCard(event, cardId) {
            event.preventDefault();
            const card = document.querySelector(`[data-card-id="${cardId}"]`);
            card.classList.toggle('flipped');
        }

        // book3D
        //  const book = document.querySelector('book');
        // let isFlipped = false;

        // function flipPage() {
        //     if (!isFlipped) {
        //         book.classList.add('flipped');
        //         isFlipped = true;
        //     }
        // }

        // function flipBack() {
        //     if (isFlipped) {
        //         book.classList.remove('flipped');
        //         isFlipped = false;
        //     }
        // }

        // Button event listeners
    // document.querySelector('.read-more-btn').addEventListener('click', flipPage);
    // document.querySelector('.back-btn').addEventListener('click', flipBack);


    //     // Add some entrance animation
    //     window.addEventListener('load', function() {
    //         book.style.opacity = '0';
    //         book.style.transform = 'scale(0.8) rotateX(20deg)';
            
    //         setTimeout(() => {
    //             book.style.transition = 'all 0.8s ease-out';
    //             book.style.opacity = '1';
    //             book.style.transform = 'scale(1) rotateX(0deg)';}
    //         }, 100);


document.querySelector('.contact-wrapper a').addEventListener('click', function(e) {
    e.preventDefault(); // stays
    window.open(this.href, '_blank');
});

// Flipbook
//  let isScrolling = false;
//     let currentPage = 0;

//     function flipNext(event) {
//       const scrollContainer = event.target.closest('.text');
//       if (scrollContainer && scrollContainer.scrollHeight > scrollContainer.clientHeight) {
//         if (scrollContainer.scrollTop > 0) return;
//       }
//       event.preventDefault();
//       document.getElementById("book").classList.add("flipped");
//       currentPage = 1;
//     }

//     function flipBack(event) {
//       const scrollContainer = event.target.closest('.text2');
//       if (scrollContainer && scrollContainer.scrollHeight > scrollContainer.clientHeight) {
//         if (scrollContainer.scrollTop > 0) return;
//       }
//       event.preventDefault();
//       document.getElementById("book").classList.remove("flipped");
//       currentPage = 0;
//     }
