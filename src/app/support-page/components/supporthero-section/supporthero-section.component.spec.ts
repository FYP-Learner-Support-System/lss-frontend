import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportheroSectionComponent } from './supporthero-section.component';

describe('SupportheroSectionComponent', () => {
  let component: SupportheroSectionComponent;
  let fixture: ComponentFixture<SupportheroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportheroSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportheroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
