import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityResultsComponent } from './activity-results.component';

describe('ActivityResultsComponent', () => {
  let component: ActivityResultsComponent;
  let fixture: ComponentFixture<ActivityResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
