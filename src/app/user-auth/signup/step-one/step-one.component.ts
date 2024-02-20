import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,RadioButtonModule,NgIf],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.css'
})
export class StepOneComponent {

  email = new FormControl('',Validators.compose([Validators.required,Validators.email]))

  formgroup1 = new FormGroup({
    email:this.email,
  });

  emailHandler(){
    console.log(this.email.value)
  }

  // Declare increment as a property of the component class
  textNumb = 1;
  private increment: any;

  ngOnInit(): void {
      // Assign setInterval to the increment property
      this.increment = setInterval(() => {
        if (this.textNumb === 3) {
          this.textNumb = 0;
        }
        this.textNumb++;
      }, 3000);
  }

  ngOnDestroy(): void {
      // Clear the interval using the property declared in the class
      clearInterval(this.increment);
  }

}
