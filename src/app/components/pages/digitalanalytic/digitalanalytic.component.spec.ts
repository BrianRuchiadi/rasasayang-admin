import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalanalyticComponent } from './digitalanalytic.component';

describe('DigitalanalyticComponent', () => {
  let component: DigitalanalyticComponent;
  let fixture: ComponentFixture<DigitalanalyticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalanalyticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalanalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
