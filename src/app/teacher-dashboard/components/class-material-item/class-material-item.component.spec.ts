import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassMaterialItemComponent } from './class-material-item.component';

describe('ClassMaterialItemComponent', () => {
  let component: ClassMaterialItemComponent;
  let fixture: ComponentFixture<ClassMaterialItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassMaterialItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassMaterialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
