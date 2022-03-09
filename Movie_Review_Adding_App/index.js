let reviewsContainerEl = document.getElementById("reviewsContainer");
let unorderedMovieListEl = document.createElement("ul");
unorderedMovieListEl.classList.add("ul-style");
reviewsContainerEl.appendChild(unorderedMovieListEl);

const createAndAppendMovieReview = (title, review) => {
  let movieReviewCard = document.createElement("li");
  movieReviewCard.classList.add("movie-Card");
  unorderedMovieListEl.appendChild(movieReviewCard);

  let movieTitle = document.createElement("h3");
  movieTitle.classList.add("movie-title");
  movieTitle.textContent = "Movie Title:" + title;
  movieReviewCard.appendChild(movieTitle);

  let movieRevie = document.createElement("p");
  movieRevie.classList.add("movie-review");
  movieRevie.textContent = "Movie Review: " + review;
  movieReviewCard.appendChild(movieRevie);
};

function onSave() {
  let titleInputEl = document.getElementById("titleInput");
  let reviewTextareaEl = document.getElementById("reviewTextarea");

  let titleValue = titleInputEl.value;
  let reviewValue = reviewTextareaEl.value;

  if (titleValue === "") {
    alert("Please Enter Movie Name!!");
  } else {
    createAndAppendMovieReview(titleValue, reviewValue);
    titleInputEl.value = "";
    reviewTextareaEl.value = "";
  }
}
