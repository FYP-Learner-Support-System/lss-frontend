import {NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.css'
})
export class StepTwoComponent {

  designations = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "Marketing Specialist",
    "Financial Analyst",
    "UX/UI Designer",
    "Network Administrator",
    "Systems Architect",
    "Human Resources Manager",
    "Business Analyst",
    "Quality Assurance Engineer",
    "Customer Support Specialist",
    "Sales Representative",
    "Project Manager",
    "DevOps Engineer",
    "Content Creator",
    "Cybersecurity Analyst",
    "Database Administrator",
    "Graphic Designer",
    "Healthcare Administrator"
]

selectedDesignation: string | null = "Your Designation"; // Initialize with null or a default value


}
