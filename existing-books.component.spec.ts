import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingBooksComponent } from './existing-books.component';

describe('ExistingBooksComponent', () => {
  let component: ExistingBooksComponent;
  let fixture: ComponentFixture<ExistingBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExistingBooksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
