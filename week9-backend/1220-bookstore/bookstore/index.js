"use strict"

const xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200){
    const response = JSON.parse(xhr.response); //JSON string amit a be kuld, parseolja objectte
    //console.log(response);
    const body = document.querySelector('.body');
    const books = document.createElement('table');
    books.classList.add('books');

    const tableHead = document.createElement('thead')
    const tableHeaderRow = document.createElement('tr');
    const thTitle = document.createElement('th');
    const thAuthor = document.createElement('th');
    const thCategory = document.createElement('th');
    const thPublisher = document.createElement('th');
    const thPrice = document.createElement('th');

    thTitle.textContent = 'Book Title';
    thAuthor.textContent = `Author's name`;
    thCategory.textContent = 'Category';
    thPublisher.textContent = 'Publisher';
    thPrice.textContent = 'Price';

    tableHeaderRow.appendChild(thTitle);
    tableHeaderRow.appendChild(thAuthor);
    tableHeaderRow.appendChild(thCategory);
    tableHeaderRow.appendChild(thPublisher);
    tableHeaderRow.appendChild(thPrice);

    tableHead.appendChild(tableHeaderRow);
    books.appendChild(tableHead);
    body.appendChild(books);

    for (let i = 0; i < response.length; i++){
      const bookTableBody = document.createElement('tbody');
      const bookRow = document.createElement('tr');
      const bookTitle = document.createElement('td');
      const bookAuthor = document.createElement('td');
      const bookCategory = document.createElement('td');
      const bookPublisher = document.createElement('td');
      const bookPrice = document.createElement('td');

      bookTitle.textContent = response[i].book_name;
      bookAuthor.textContent = response[i].aut_name;
      bookCategory.textContent = response[i].cate_descrip;
      bookPublisher.textContent = response[i].pub_name;
      bookPrice.textContent = response[i].book_price;

      bookRow.appendChild(bookTitle);
      bookRow.appendChild(bookAuthor);
      bookRow.appendChild(bookCategory);
      bookRow.appendChild(bookPublisher);
      bookRow.appendChild(bookPrice);

      bookTableBody.appendChild(bookRow);
      books.appendChild(bookTableBody);
    }
  }
}

//get method on the endpoint BE async
xhr.open('GET', '/book  ', true);
xhr.send();