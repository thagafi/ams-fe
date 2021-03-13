import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/auth/auth.service';
import { MustMatch } from 'app/shared/directives/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormSubmitted = false;
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      third_name: ['', Validators.required],
      last_name: ['', Validators.required],
      rank: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirm: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'password_confirm')
    });
  }

  get rf() {
    return this.registerForm.controls;
  }


  //  On submit click, reset field value
  onSubmit() {
    this.registerFormSubmitted = true;
    this.authService.signupUser(this.registerForm.getRawValue())
    .toPromise()
    .then((res) => {
      this.router.navigate(['/auth/login']);
    })
    .catch((err) => {
      console.log('error: ' + err);
      }
    );
    if (this.registerForm.invalid) {
      return;
    }
  }
}
