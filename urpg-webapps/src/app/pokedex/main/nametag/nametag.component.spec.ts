import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NametagComponent } from './nametag.component';

describe('NametagComponent', () => {
  let component: NametagComponent;
  let fixture: ComponentFixture<NametagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NametagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NametagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
