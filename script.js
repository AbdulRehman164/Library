let myLibrary = [];

function Book(title, author, pages, readIt) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readIt = readIt;
}

function displayBooks() {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  myLibrary.forEach((book) => {
    const section = document.createElement('section');

    const title = document.createElement('h1');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.textContent = book.pages;

    const readButton = document.createElement('button');
    if (book.readIt === true) readButton.textContent = 'Not Read It';
    else readButton.textContent = 'Read It';
    readButton.addEventListener('click', () => {
      // eslint-disable-next-line no-param-reassign
      book.readIt = !book.readIt;
      displayBooks();
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
      section.remove();
      myLibrary = myLibrary.filter((card) => card !== book);
    });

    section.append(title, author, pages, readButton, removeButton);

    container.appendChild(section);
  });
}

function addBookToLibrary() {
  const submitButton = document.querySelector('.submit');
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const readIt = document.querySelector('#readIt');
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    myLibrary.push(
      new Book(title.value, author.value, pages.value, readIt.checked)
    );
    displayBooks();
  });
}

addBookToLibrary();
