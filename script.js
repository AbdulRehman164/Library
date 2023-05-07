let myLibrary = [];

function Book(title, author, pages, readIt) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readIt = readIt;
}

myLibrary.push(new Book('A study in Scarlet', 'Conan Doyle', '256', true));
myLibrary.push(new Book('A sign of four', 'Conan Doyle', '280', false));
myLibrary.push(new Book('Hounds of Baskerville', 'Conan Doyle', '266', true));

function displayBoooks() {
  const container = document.querySelector('.container');
  myLibrary.forEach((book) => {
    const section = document.createElement('section');

    const title = document.createElement('h1');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.textContent = book.pages;

    const readButton = document.createElement('button');

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

displayBoooks();
