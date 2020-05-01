import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoWidgetComponent } from './profile-info-widget.component';

describe('ProfileInfoWidgetComponent', () => {
  let component: ProfileInfoWidgetComponent;
  let fixture: ComponentFixture<ProfileInfoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
