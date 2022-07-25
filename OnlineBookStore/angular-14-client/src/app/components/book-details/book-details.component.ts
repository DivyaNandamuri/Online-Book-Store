import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentBook: Book = {
    isbn: null,
    title: '',
    author:'',
    description: '',
    genre: '',
    price: null,
    stock: null
  }

  @Input() isAdmin = false;

  message = '';
  quantity = 1;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getBook(this.route.snapshot.params["id"]);
    }
  }

  getBook(id: string): void {
    this.bookService.get(id)
      .subscribe({
        next: (data) => {
          this.currentBook = data;
        },
        error: (e) => console.error(e)
      });
  }

  updateBook(): void {
    this.message = '';

    this.bookService.update(this.currentBook.id, this.currentBook)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'This book was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteBook(): void {
    this.bookService.delete(this.currentBook.id)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/books']);
        },
        error: (e) => console.error(e)
      });
  }

  addToCart() {
    this.storageService.saveCurrentBook(this.currentBook, this.quantity);
  }

  redirectToPaymentPage() {
    this.router.navigate(['payment']).then(() => {
      window.location.reload();
    });
  }

  redirectToBooksPage() {
    this.router.navigate(['books']).then(() => {
      window.location.reload();
    });
  }

}
