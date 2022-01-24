let myLibrary = [];
const library = document.getElementById("library");


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
}

function displayBook () {
    let displayInfo = [];
    myLibrary.forEach(element => {
        const info = element.info();
        displayInfo.push(info);
    });
    console.log(displayInfo);
    library.textContent = displayInfo;
}

function openForm(){
    document.getElementById("newBookForm").style.display = "block";
}

function closeForm(){
    document.getElementById("newBookForm").style.display = "none";
}

const book1 = addBookToLibrary('Name of the Wind', 'Patrict Rothfuss', 662, true);
const book2 = addBookToLibrary('The Way of Kings', 'Brandon Sanderson', 1007, true);

displayBook();
