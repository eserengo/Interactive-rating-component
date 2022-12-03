const ratingCard = document.getElementById("rating");
const thankyouCard = document.getElementById("thankyou");
const submitBtn = document.getElementById("submitBtn");
const closeBtn = document.getElementById("closeBtn");
const ratingSelection = document.getElementById("output");
const ratingStars = document.querySelectorAll(".fa-star");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  ratingCard.classList.toggle("inactive");
  thankyouCard.classList.toggle("inactive");
})

closeBtn.addEventListener("click", () => {
  ratingCard.classList.toggle("inactive");
  thankyouCard.classList.toggle("inactive");
  resetSelectedRating();
})

function resetSelectedRating() {
  Array.from(ratingStars).map((star) => {
    star.classList.remove("active");
  })
  ratingSelection.innerHTML = "";
}

function displayRating() {
  const activeStarIcon = document.createElement("i");
  activeStarIcon.classList.add("fa");
  activeStarIcon.classList.add("fa-star");
  activeStarIcon.classList.add("active");
  ratingSelection.appendChild(activeStarIcon);
}

(function () {
  ratingStars.forEach((star) => {
    star.addEventListener("click", (event) => {
      event.stopPropagation();
      let ratingSelectedByUser = event.target.getAttribute("data-star");
      for (let i = 0; i < ratingSelectedByUser; i++) {
        (!ratingStars[i].classList.contains("active"))?
          ratingStars[i].classList.add("active"):
          resetSelectedRating();
          ratingStars[i].classList.add("active");
        displayRating();
      }
    })
  })
})();