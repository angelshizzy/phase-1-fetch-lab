const apiUrl= 'https://anapioficeandfire.com/api'

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch(`${apiUrl}/books`)
  .then(res => res.json())
  .then(data=> console.log(data))
}
fetchBooks()

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
