let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        const bookRead = read ? 'read':'not read yet';
        return `${title} by ${author}, ${pages} pages, ${bookRead}`
    }
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    addToTable(newBook);
}

function addToTable(newBook){
    const newRow = document.createElement("tr");

    const newTitle = document.createElement("td");
    newTitle.innerHTML = newBook.title;
    newRow.append(newTitle);

    const newAuthor = document.createElement("td");
    newAuthor.innerHTML = newBook.author;
    newRow.append(newAuthor);

    const newPages = document.createElement("td");
    newPages.innerHTML = newBook.pages;
    newRow.append(newPages);

    const readStatus = document.createElement("td");
    const bookRead = newBook.read ? 'Read':'Not read yest';
    readStatus.innerHTML = bookRead;
    newRow.append(readStatus);

    const removeButton = document.createElement("BUTTON");
    const index = myLibrary.length - 1;
    removeButton.setAttribute('index', index);
    removeButton.setAttribute("onclick", `removeBook(${index})`);
    removeButton.appendChild(document.createTextNode("❌"));
    newRow.append(removeButton);

    document.getElementById("libraryTable").appendChild(newRow);

}


function openForm(){
    document.getElementById("bookTitle").value = '';
    document.getElementById("bookAuthor").value = '';
    document.getElementById("bookPages").value = '';
    document.getElementById("bookRead").checked = false;
    document.getElementById("newBookForm").style.display = "block";
}

function submitForm(){
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("bookPages").value;
    const read = document.getElementById("bookRead").checked;

    addBookToLibrary(title, author, pages, read);
    document.getElementById("newBookForm").style.display = "none";
}

function removeBook(index) {
    myLibrary.splice(index,1)
    document.getElementById("libraryTable").innerHTML = '';

    for(let book in myLibrary){
        addToTable(myLibrary[book]);
    }
}

const library = document.getElementById("libraryTable");

const book1 = addBookToLibrary('Name of the Wind', 'Patrick Rothfuss', 662, true);
const book2 = addBookToLibrary('The Way of Kings', 'Brandon Sanderson', 1007, true);
