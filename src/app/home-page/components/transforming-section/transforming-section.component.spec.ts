import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformingSectionComponent } from './transforming-section.component';

describe('TransformingSectionComponent', () => {
  let component: TransformingSectionComponent;
  let fixture: ComponentFixture<TransformingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformingSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransformingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
