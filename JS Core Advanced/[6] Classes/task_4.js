'use strict'

/* Создайте класс Book со свойствами названия, автора и года публикации. Включите метод отображения сведений о книге. Создайте
подкласс под названием «Ebook», который наследуется от класса «Book» и включает дополнительное свойство для цены книги. 
Переопределите метод отображения, чтобы включить цену книги. Создайте экземпляр класса «Электронная книга» и отобразите его 
сведения. */

class Book {
    constructor(title, author, yearOfPublication) {
        this.title = title;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
    }

    printInfoAboutBook() {
        console.log(`Info about book:\nTitle: ${this.title}\nAuthor: ${this.author}\nYear of publication: ${this.yearOfPublication} г.\n`)
    }
}

class Ebook extends Book {
    constructor(title, author, yearOfPublication, price) {
        super(title, author, yearOfPublication);
        this.price = price;
    }

    printInfoAboutBook() {
        console.log(`Info about ebook:\nTitle: ${this.title}\nAuthor: ${this.author}\nYear of publication: ${this.yearOfPublication} г.\nPrice: ${this.price} руб.\n`)
    }
}

const book = new Book("Цветы для Элджернона", "Дэниел Киз", 1959);
book.printInfoAboutBook();

const ebook = new Ebook("Гордость и предубеждение", "Джейн Остин", 1813, 19);
ebook.printInfoAboutBook();

