import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetTaskComponent } from './worksheet-task.component';

describe('WorksheetTaskComponent', () => {
  let component: WorksheetTaskComponent;
  let fixture: ComponentFixture<WorksheetTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksheetTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
