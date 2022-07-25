import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-book-payment',
  templateUrl: './book-payment.component.html'
})
export class BookPaymentComponent implements OnInit {
  isLoggedIn = false;
  message = '';
  bookId = '';
  userId = '';
  username = '';
  amount = 0;
  copies = 0;
  constructor(private orderService: OrderService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const bookInfo = this.storageService.getCurrentBookInfo();
      const userInfo = this.storageService.getUser();
      this.userId =  userInfo.id;
      this.username = userInfo.username;
      this.bookId = bookInfo.id;
      this.amount = bookInfo.price;
    }
  }

  orderBook(): void {
    this.message = '';
    const data = {
      userId: this.userId,
      username: this.username,
      amount: this.amount * this.copies
    }
    this.orderService.orderBook(data)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'This book was ordered successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  redirectToBooksPage() {
    this.router.navigate(['books']).then(() => {
      window.location.reload();
    });
  }
}
