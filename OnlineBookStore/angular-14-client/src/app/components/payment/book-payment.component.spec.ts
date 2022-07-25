import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPaymentComponent } from './book-payment.component';

describe('BookPaymentComponent', () => {
  let component: BookPaymentComponent;
  let fixture: ComponentFixture<BookPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
