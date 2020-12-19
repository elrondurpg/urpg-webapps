import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMatchupsComponent } from './type-matchups.component';

describe('TypeMatchupsComponent', () => {
  let component: TypeMatchupsComponent;
  let fixture: ComponentFixture<TypeMatchupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMatchupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMatchupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
