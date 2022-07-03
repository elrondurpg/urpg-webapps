import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackCategoryComponent } from './attack-category.component';

describe('AttackCategoryComponent', () => {
  let component: AttackCategoryComponent;
  let fixture: ComponentFixture<AttackCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
