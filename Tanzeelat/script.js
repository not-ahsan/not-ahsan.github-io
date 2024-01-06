document.getElementById("menuButton").addEventListener("click", function () {
  var nav = document.getElementById("navMenu");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var emailInput = document.getElementById("newsletter");
    var emailValue = emailInput.value;

    if (emailValue.includes("@")) {
      console.log("Email is valid!");
    } else {
      alert("Please enter a valid email address.");
    }
  });
