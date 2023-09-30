AOS.init();

//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbxuctWR6eXlTdbT6dfw73qB4BfimH8ZGOc-iV24EEaInqNOfCAue8aDxBi-57CDLca4BQ/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});