// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likeBtn = document.querySelectorAll(".like-glyph");
const err = document.querySelector("p#modal-message");

likeBtn.forEach((heart) => {
  let counter = 1;
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        //err.textContent = "";
        counter++;
        console.log(counter);
        if (counter % 2 === 0) {
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        err.parentNode.classList.remove("hidden");
        err.textContent = error;

        setTimeout(() => err.parentNode.classList.add("hidden"), 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
