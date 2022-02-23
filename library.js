
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    
    info() {
        const bookRead = read ? 'read':'not read yet';
        return `${title} by ${author}, ${pages} pages, ${bookRead}`
    }
}

const Library = (() => {
    this.myLibrary = [];

    this._addToTable = ((newBook) => {
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
    
        const readTd = document.createElement("td");
        const readStatus = document.createElement("BUTTON");
        const bookRead = newBook.read ? 'Yes':'No';
        const index = newBook.index;
        readStatus.setAttribute('index', index);
        readStatus.appendChild(document.createTextNode(bookRead));
        readStatus.setAttribute("onclick", `toggleRead(${index})`);
        readTd.append(readStatus);
        newRow.append(readTd);
    
        const removeButton = document.createElement("BUTTON");
        removeButton.setAttribute('index', index);
        removeButton.setAttribute("onclick", `removeBook(${index})`);
        removeButton.appendChild(document.createTextNode("❌"));
        newRow.append(removeButton);
    
        document.getElementById("libraryTable").appendChild(newRow);
    
    })

    this.addBookToLibrary = ((title, author, pages, read) => {
        const newBook = new Book(title, author, pages, read);
        const index = myLibrary.length;
        myLibrary.push(newBook);
        newBook.index = index;
        _addToTable(newBook);
    })

    this.openForm = (() => {
        document.getElementById("bookTitle").value = '';
        document.getElementById("bookAuthor").value = '';
        document.getElementById("bookPages").value = '';
        document.getElementById("bookRead").checked = false;
        document.getElementById("newBookForm").style.display = "block";
    })

    this.submitForm = (() => {
        const title = document.getElementById("bookTitle").value;
        const author = document.getElementById("bookAuthor").value;
        const pages = document.getElementById("bookPages").value;
        const read = document.getElementById("bookRead").checked;
    
        addBookToLibrary(title, author, pages, read);
        document.getElementById("newBookForm").style.display = "none";
    })

    this.removeBook = ((index) => {
        myLibrary.splice(index,1)
        document.getElementById("libraryTable").innerHTML = '';

        for(let i=0; i < myLibrary.length; i++){
            console.log(myLibrary);
            myLibrary[i].index = i; //update index attribute
            _addToTable(myLibrary[i]);
        }
    })

    this.toggleRead = ((index) => {
        myLibrary[index].read = myLibrary[index].read ? false : true;
        document.getElementById("libraryTable").innerHTML = '';

        for(let book in myLibrary){
            _addToTable(myLibrary[book]);
        }
    })

    return {
        addBookToLibrary, toggleRead, removeBook, submitForm, openForm
    }
})()


const book1 = Library.addBookToLibrary('Name of the Wind', 'Patrick Rothfuss', 662, true);
const book2 = Library.addBookToLibrary('The Way of Kings', 'Brandon Sanderson', 1007, true);
