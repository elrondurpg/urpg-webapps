import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistPaneComponent } from './wishlist-pane.component';

describe('WishlistPaneComponent', () => {
  let component: WishlistPaneComponent;
  let fixture: ComponentFixture<WishlistPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
