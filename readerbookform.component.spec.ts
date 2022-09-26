import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderbookformComponent } from './readerbookform.component';

describe('ReaderbookformComponent', () => {
  let component: ReaderbookformComponent;
  let fixture: ComponentFixture<ReaderbookformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderbookformComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderbookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
