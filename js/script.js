// Header
fetch("components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

// Homepage
fetch("components/homepage.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("content").innerHTML = data;
  });

// Footer
fetch("components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".slider-container");
  const cardSlider = document.getElementById("cardSlider");

  const cards = document.querySelectorAll(".card");

  console.log("cards", cards);

  if (cards.length === 0) {
    console.error("Error: '.card' elements not found in the DOM.");
    return;
  }

  const cardWidth = cards[0].offsetWidth;

  const leftButton = document.querySelector(".slider-button.left");
  const rightButton = document.querySelector(".slider-button.right");
  let scrollPosition = 0;

  rightButton.addEventListener("click", () => {
    const maxScrollPosition =
      cardSlider.scrollWidth - sliderContainer.offsetWidth;
    scrollPosition = Math.min(scrollPosition + cardWidth, maxScrollPosition);
    cardSlider.style.transform = `translateX(-${scrollPosition}px)`;
  });

  leftButton.addEventListener("click", () => {
    scrollPosition = Math.max(scrollPosition - cardWidth, 0);
    cardSlider.style.transform = `translateX(-${scrollPosition}px)`;
  });
});
