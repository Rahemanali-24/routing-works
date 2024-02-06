import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForModuleComponent } from './user-for-module.component';

describe('UserForModuleComponent', () => {
  let component: UserForModuleComponent;
  let fixture: ComponentFixture<UserForModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserForModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserForModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
