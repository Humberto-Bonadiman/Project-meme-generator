const textInput = document.getElementById('text-input');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

function getText() {
  let get = textInput.value;
  if (textInput.textContent !== null) {
    memeText.innerHTML = get;
  }
}

// Fonte keyup: https://www.w3schools.com/jsref/event_onkeyup.asp
textInput.addEventListener('keyup', getText);

// Fonte this function: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function getImage(event) {
  let takeImage = event.target.files[0];
  let reader = new FileReader();
  reader.onloadend = function() {
    memeImage.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}
memeInsert.addEventListener('change', getImage);