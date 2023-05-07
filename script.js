let myLibrary = [];
const addBookButton = document.querySelector('.addBook');
const form = document.querySelector('.bookForm');
const blurDiv = document.querySelector('.divForBlur');
addBookButton.addEventListener('click', () => {
  form.style.display = 'flex';
  blurDiv.classList.add('blur');
});
blurDiv.addEventListener('click', () => {
  form.style.display = 'none';
  blurDiv.classList.remove('blur');
});

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
    title.classList.add('cardTitle');

    const author = document.createElement('p');
    author.textContent = book.author;
    author.classList.add('cardauthor');

    const pages = document.createElement('p');
    pages.textContent = book.pages;
    pages.classList.add('cardPages');

    const readButton = document.createElement('button');
    readButton.classList.add('cardReadButton');
    if (book.readIt === true) {
      readButton.textContent = 'Not Read';
      readButton.style.backgroundColor = 'lightcoral';
    } else {
      readButton.textContent = 'Read';
      readButton.style.backgroundColor = 'lightgreen';
    }
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
    const isValid = form.checkValidity();
    if (!isValid) form.reportValidity();
    else {
      event.preventDefault();
      myLibrary.push(
        new Book(
          title.value,
          author.value,
          `${pages.value} pages`,
          readIt.checked
        )
      );
      displayBooks();
      blurDiv.classList.remove('blur');
      form.style.display = 'none';
    }
  });
}

myLibrary.push(
  new Book('A Study In Scarlet', 'Conan Doyle', '300 pages', true)
);
displayBooks();

addBookToLibrary();
