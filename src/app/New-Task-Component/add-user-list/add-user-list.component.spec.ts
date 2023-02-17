import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserListComponent } from './add-user-list.component';

describe('AddUserListComponent', () => {
  let component: AddUserListComponent;
  let fixture: ComponentFixture<AddUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
