// $(document).ready(function () {
//     var hamburger = $(".hamburger-toggler");
//     hamburger.click(function () {
//       $(this).toggleClass("active");
//     });
//   });


$(document).ready(function() {
    var hamburger = $(".hamburger-toggler");
    hamburger.click(function() {
      $(this).toggleClass("active");
      
      if ($(this).hasClass("active")) {
        $(".hamburger-icon span").css({
          backgroundColor: "transparent",
          transition: "background-color 0.3s ease"
        });
        $(".hamburger-icon span::before, .hamburger-icon span::after").css({
          transform: "rotate(45deg)",
          top: "0",
          transition: "transform 0.3s ease, top 0.3s ease"
        });
      } else {
        $(".hamburger-icon span").css({
          backgroundColor: "#ffffff",
          transition: "background-color 0.3s ease"
        });
        $(".hamburger-icon span::before, .hamburger-icon span::after").css({
          transform: "rotate(0)",
          top: "0",
          transition: "transform 0.3s ease, top 0.3s ease"
        });
      }
    });
  });
  