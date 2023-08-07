import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAircraftComponent } from './manage-aircraft.component';

describe('ManageAircraftComponent', () => {
  let component: ManageAircraftComponent;
  let fixture: ComponentFixture<ManageAircraftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAircraftComponent]
    });
    fixture = TestBed.createComponent(ManageAircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
