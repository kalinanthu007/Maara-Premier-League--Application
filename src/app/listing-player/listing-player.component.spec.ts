import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPlayerComponent } from './listing-player.component';

describe('ListingPlayerComponent', () => {
  let component: ListingPlayerComponent;
  let fixture: ComponentFixture<ListingPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
