import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const BOOK_INFO = 'book-info';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  public saveCurrentBook(info: any, quantity: number): void {
    // window.sessionStorage.removeItem(BOOK_INFO);
    const data = this.getCurrentBookInfo();
    if(data.id === info.id) {

    }
    window.sessionStorage.setItem(BOOK_INFO, JSON.stringify(info));
  }

  public getCurrentBookInfo(): any {
    const info = window.sessionStorage.getItem(BOOK_INFO);
    if (info) {
      return JSON.parse(info);
    }

    return {};
  }
}
