import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoPaneComponent } from './profile-info-pane.component';

describe('ProfileInfoPaneComponent', () => {
  let component: ProfileInfoPaneComponent;
  let fixture: ComponentFixture<ProfileInfoPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
