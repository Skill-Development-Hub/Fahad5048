import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'] // Corrected from styleUrl to styleUrls
})
export class CoursesComponent {

  constructor(private router: Router) {}

  redirectToRegister(): void {
    // Navigate to the register page
    this.router.navigate(['/register']);
  }
}
