import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signinform!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.signinform = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    const creds = this.signinform.value;
    if (this.signinform.valid) {
      console.log(this.signinform.value);
      if(creds.username === 'admin'){
        this.router.navigate(['/home']);
      }
    }
  }

}
// export class SigninComponent implements OnInit {
//     signInForm!: FormGroup;

//     constructor(private fb: FormBuilder) {}

//     ngOnInit(): void{
//       this.signInForm = this.fb.group({
//         email: ['', [Validators.required, Validators.email]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//       });
//     }
    
//     onSubmit(): void {
//       if(this.signInForm.valid) {
//         const {email, password } = this.signInForm.value;
//         console.log('Sign-In Data: ', {email});
//       } else {
//         console.log("Validation Failed")
//       }
//     }

// }

