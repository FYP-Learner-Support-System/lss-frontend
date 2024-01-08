import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassContentComponent } from './class-content.component';

describe('ClassContentComponent', () => {
  let component: ClassContentComponent;
  let fixture: ComponentFixture<ClassContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
