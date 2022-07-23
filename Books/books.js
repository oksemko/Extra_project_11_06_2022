const books = [
	{
		id: '1',
		title: `Apple. Эволюция компьютера`,
		author: `Владимир Невзоров`,
		img: `https://bukva.ua/img/products/449/449532_200.jpg`,
		plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
	},
	{
		id: '2',
		title: `Как объяснить ребенку информатику`,
		author: `Кэрол Вордерман`,
		img: `https://bukva.ua/img/products/480/480030_200.jpg`,
		plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
	},
	{
		id: '3',
		title: `Путь скрам-мастера. #ScrumMasterWay`,
		author: `Зузана Шохова`,
		img: `https://bukva.ua/img/products/480/480090_200.jpg`,
		plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
	},
];
localStorage.setItem("books", JSON.stringify(books));
const root = document.querySelector("#root");

const leftSide = document.createElement("div");
leftSide.classList.add("left-side");
const rightSide = document.createElement("div");
rightSide.classList.add("right-side");

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Books title";
const booksList = document.createElement("ul");
booksList.classList.add("books-list");
const button = document.createElement("button");
button.classList.add("button");
button.textContent = "Add new book";

root.append(leftSide, rightSide);
leftSide.append(title, booksList, button);

const rightDiv = document.querySelector(".right-side");
const booksList2 = document.querySelector(".books-list");

const renderPreviewMarkup = (books) => {
    return `<div class="book-discr-container">
        <h2 class="book-disc-title">${books.title}</h2>
        <p class="author-name">${books.author}</p>
        <img src="${books.img}" alt="" class="book-image">
        <p class="book-discr">${books.plot}</p>
    </div>`;
    
}


const renderPreview = (event) => {
    const books = JSON.parse(localStorage.getItem("books"));
    const book = books.find(book => book.title === event.target.textContent);
    rightDiv.innerHTML = "";
    rightDiv.insertAdjacentHTML("beforeend", renderPreviewMarkup(book));
}

const deleteF = (event) => {
    const books = JSON.parse(localStorage.getItem("books"));
    const book = books.find(book => book.id === event.target.parentNode.id);
    const newBooks = books.filter(el => el.id !== book.id);
    localStorage.setItem("books", JSON.stringify(newBooks));
    const bookTitle = document.querySelector(".book-disc-title");
    if (bookTitle) {
        if (book.title === bookTitle.textContent) {
            rightDiv.innerHTML = "";            
        }
    }
    booksList.innerHTML = "";
    renderList();
    setTimeout(() => alert("Book successfuly deleted!"), 500);
}
const editF = (event) => {
    rightDiv.innerHTML = "";
    const books = JSON.parse(localStorage.getItem("books"));
    const book = books.find(book => book.id === event.target.parentNode.id);
    rightSide.insertAdjacentHTML("beforeend", bookFormMarkup(book));
    fillObject(book);
    const save = document.querySelector(".save-btn");
    save.addEventListener("click", saveEditedBook);
    function saveEditedBook() {
        const bookIndex = books.findIndex(el => el.id === event.target.parentNode.id);
        books.splice(bookIndex, 1, book);
        localStorage.setItem("books", JSON.stringify(books));
        booksList2.innerHTML = "";
        rightDiv.innerHTML = "";
        renderList();
        setTimeout(() => alert("Book successfuly addited!"), 500);
    }
}

const renderList = () => {
    const books = JSON.parse(localStorage.getItem("books"));
    const booksArray = books.map(book => {
        const liEl = `<li id="${book.id}" class="book-item"><p class="book-title">${book.title}</p><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></li>`;
        return liEl;
    }).join("");
    booksList2.insertAdjacentHTML("beforeend", booksArray);
    const p = document.querySelectorAll(".book-title");
    p.forEach(el => el.addEventListener("click", renderPreview));
    document.querySelectorAll(".edit-btn").forEach(el => el.addEventListener("click", editF));
    document.querySelectorAll(".delete-btn").forEach(el => el.addEventListener("click", deleteF));
}
const bookFormMarkup = ({title, author, img, plot}) => {
    return `<form class="add-form" action="">
            <label>
                Book Title
                <input value="${title}" name="title" class="input-title input" type="text">
            </label>        
            <label>
                Book Author
                <input value="${author}" name="author" class="input-author input" type="text">
            </label>        
            <label>
                Book Img
                <input value="${img}" name="img" class="input-img input" type="text">
            </label>        
            <label>
                Book Discription
                <input value="${plot}" name="plot" class="input-discr input" type="text">
            </label>
            <button class="save-btn" type="button">Save</button>
        </form>` }

const addBook = () => {
    const newBook = {
        id: `${Date.now()}`,
        title: "",
        author: "",
        img: "",
        plot: "",
    }
    rightSide.innerHTML = bookFormMarkup(newBook);
    fillObject(newBook);
    const save = document.querySelector(".save-btn");
    save.addEventListener("click", saveBook);
    function saveBook() {
        if (Object.values(newBook).some(el => el === "")) {
            alert("PLS fill all inputs!");
            return;
        }
        const books = JSON.parse(localStorage.getItem("books"));
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));
        rightDiv.innerHTML = "";
        rightDiv.insertAdjacentHTML("beforeend", renderPreviewMarkup(newBook));  
        booksList.innerHTML = "";
        renderList();
    }
}
function fillObject(book) {
    const input = document.querySelectorAll(".input");
    input.forEach(el => el.addEventListener("change", mvoh))
    function mvoh(e) {
        book[e.target.name] = e.target.value;
    }
}
button.addEventListener("click", addBook);

renderList();



