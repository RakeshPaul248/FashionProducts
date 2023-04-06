
// let Active = 0;
// const carsolItem = document.getElementsByClassName("carusol-item");
// console.log(carsolItem);
// carsolItem[Active].style.display = "block";

// function activeCarulsol(activeNUM) {
//   for (let i of carsolItem) {
//     i.style.display = "none";
//   }
//   if (activeNUM === carsolItem.length) {
//     Active = 0;
//     activeNUM = 0;
//   }
//   if (activeNUM < 0) {
//     Active = carsolItem.length - 1;
//     activeNUM = carsolItem.length - 1;
//   }
//   carsolItem[activeNUM].style.display = "block";
// }

// function CarulsolClick(n) {
//   Active += n;
//   activeCarulsol(Active);
// }
// function AutoCal() {
//   Active++;
//   activeCarulsol(Active);
//   return Active;
// }
// const autoRun = setInterval(function () {
//   AutoCal(Active);
// }, 5000);

// Carousel Banner
$("#carusol-banner").owlCarousel({
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  autoWidth: true,
  loop: true,
  autoWidth: true,
  smartSpeed: 2000,
  nav: true,
  navContainer: "#carousel-banner-nav",
  navText: [
    "<span class='carousel-btn ml-10 hover:bg-slate-400/[0.4] px-4 py-1.5 rounded-full animate-pulse hover:animate-none hover:text-red-600'> &#10094; </span>",
    "<span class='carousel-btn mr-10 hover:bg-slate-400/[0.4] px-4 py-1.5 rounded-full animate-pulse hover:animate-none hover:text-red-600'> &#10095; </span>",
  ],
});
$(".carousel-btn").on("click", function () {
  owl.trigger("play.owl.autoplay", [10000]);
});

// New Arrivel

$("#ItemCarouselOne").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  autoWidth: true,
  smartSpeed: 1000,
  navContainer: "#NewArrivals",
  navText: [
    "<button class='btn'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6' ><path stroke-linecap='round' stroke-linejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'/></svg></button>",
    "<button class='btn'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'/></svg></button>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
$("#ItemCarouselTwo").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  autoWidth: true,
  smartSpeed: 1000,
  // navContainer: "#TrendyCollection",
  // navText: [
  //   "<button class='btn'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6' ><path stroke-linecap='round' stroke-linejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'/></svg></button>",
  //   "<button class='btn'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'/></svg></button>",
  // ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

const TopFeatured = document.querySelectorAll(".TopFeatured");
const TopSelling = document.querySelectorAll(".TopSelling");
const TopNew = document.querySelectorAll(".TopNew");
const TopProductBtn = document.querySelectorAll(".TopProductBtn");
const TopProductLoad = document.querySelector(".TopProductLoad");

for  (let i = 0; i < TopFeatured.length; i++){
  TopFeatured[i].classList.remove("hidden");
}
for  (let i = 1; i < TopProductBtn.length; i++){
  TopProductBtn[i].classList.remove("text-red-400");
}


function TopProductClick(num) {
    window.addEventListener("load", function () {
      TopProductLoad.classList.remove('hidden')
    })

    for  (let i = 0; i < TopFeatured.length; i++){
      TopFeatured[i].classList.add("hidden");
      TopFeatured[i].classList.remove("animate-topproduct");

    }
    for  (let i = 0; i < TopSelling.length; i++){
      TopSelling[i].classList.add("hidden");
      TopSelling[i].classList.remove("animate-topproduct");
    }
    for  (let i = 0; i < TopNew.length; i++){
      TopNew[i].classList.add("hidden");
      TopNew[i].classList.remove("animate-topproduct");
    }
    
    for  (let i = 0; i < TopProductBtn.length; i++){
      TopProductBtn[i].classList.remove("text-red-400");
    }

    for (let i = 0; i < TopProductBtn.length; i++) {
      TopProductBtn[i].classList.remove('text-red-400');
    }
    TopProductBtn[num].classList.add("text-red-400");

    if (num == 0){
      for (let i = 0; i < TopFeatured.length; i++){
        TopFeatured[i].classList.remove('hidden');
        TopFeatured[i].classList.add('animate-topproduct');
      }
    } else if (num == 1) {
        for (let i = 0; i < TopSelling.length; i++){
          TopSelling[i].classList.remove('hidden');
          TopSelling[i].classList.add('animate-topproduct');
        }
    }else if (num == 2) {
      for (let i = 0; i < TopNew.length; i++){
        TopNew[i].classList.remove('hidden');
        TopNew[i].classList.add('animate-topproduct');
      }
    }


}