import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPaneComponent } from './inventory-pane.component';

describe('InventoryPaneComponent', () => {
  let component: InventoryPaneComponent;
  let fixture: ComponentFixture<InventoryPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
