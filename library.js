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

    const newRow = document.createElement("tr");

    const newTitle = document.createElement("td");
    newTitle.innerHTML = title;
    newRow.append(newTitle);

    const newAuthor = document.createElement("td");
    newAuthor.innerHTML = author;
    newRow.append(newAuthor);

    const newPages = document.createElement("td");
    newPages.innerHTML = pages;
    newRow.append(newPages);

    const readStatus = document.createElement("td");
    const bookRead = read ? 'Read':'Not read yet';
    readStatus.innerHTML = bookRead;
    newRow.append(readStatus);

    document.getElementById("libraryTable").appendChild(newRow);

    myLibrary.push(newBook);

}

function displayBook () {
    const library = document.getElementById("libraryTable");

    for(i=0; i < myLibrary.length; i++){
        const info = myLibrary[i].info();
        const row = library.insertRow(i);
        row.innerHTML = info;
    }

    
    
}

function openForm(){
    document.getElementById("newBookForm").style.display = "block";
}

function submitForm(){
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("bookPages").value;
    const read = document.getElementById("bookRead").checked;

    addBookToLibrary(title, author, pages, read);

    // displayBook();

    document.getElementById("newBookForm").style.display = "none";
}

const library = document.getElementById("libraryTable");

const book1 = addBookToLibrary('Name of the Wind', 'Patrick Rothfuss', 662, true);
const book2 = addBookToLibrary('The Way of Kings', 'Brandon Sanderson', 1007, true);

// displayBook();
