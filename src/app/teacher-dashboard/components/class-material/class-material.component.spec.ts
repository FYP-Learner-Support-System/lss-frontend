import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassMaterialComponent } from './class-material.component';

describe('ClassMaterialComponent', () => {
  let component: ClassMaterialComponent;
  let fixture: ComponentFixture<ClassMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
