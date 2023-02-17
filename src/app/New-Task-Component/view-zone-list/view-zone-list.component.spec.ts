import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewZoneListComponent } from './view-zone-list.component';

describe('ViewZoneListComponent', () => {
  let component: ViewZoneListComponent;
  let fixture: ComponentFixture<ViewZoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewZoneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewZoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
