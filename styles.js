// Navigation

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $(".main_nav").addClass("sticky");
  } else {
    $(".main_nav").removeClass("sticky");
  }
});

// Mobile Nav

$(".mobile-toggle").click(function() {
  if ($(".main_nav").hasClass("open-nav")) {
    $(".main_nav").removeClass("open-nav");
  } else {
    $(".main_nav").addClass("open-nav");
  }
});

$(".main_nav li a").click(function() {
  if ($(".main_nav").hasClass("open-nav")) {
    $(".navigation").removeClass("open-nav");
    $(".main_nav").removeClass("open-nav");
  }
});


// Smooth Scrolling

const links = document.querySelectorAll(".smoothscroll");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
