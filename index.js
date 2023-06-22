$(window).on({
  load: function () {
    $(".intro-text").show(5000);
  },
});
$(window).scroll(function () {
  $(".text-column").fadeIn(2500, function () {
    $(".images").fadeIn(1000);
  });
});

// $(window).scroll(function () {
//   $(".slide_in").addClass("appear"), 5000;
// });
const header = document.querySelector("nav");

const homePage = document.querySelector(".welcome_page");

const sliders = document.querySelectorAll(".slide_in");
const options = {
  rootMargin: "-50px 0px 0px 0px",
};
const scrollOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px ",
};
// const headerObserver = new IntersectionObserver(function (
//   entries,
//   headerObserver
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       header.classList.add("back");
//       console.log(entry);
//     } else {
//       header.classList.remove("back");
//     }
//   });
// },
// options);
// headerObserver.observe(homePage);

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");

      appearOnScroll.unobserve(entry.target);
    }
  });
},
scrollOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
