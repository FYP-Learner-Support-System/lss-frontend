import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassChatComponent } from './class-chat.component';

describe('ClassChatComponent', () => {
  let component: ClassChatComponent;
  let fixture: ComponentFixture<ClassChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
