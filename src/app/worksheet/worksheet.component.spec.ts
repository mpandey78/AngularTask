import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetComponent } from './worksheet.component';

describe('WorksheetComponent', () => {
  let component: WorksheetComponent;
  let fixture: ComponentFixture<WorksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
