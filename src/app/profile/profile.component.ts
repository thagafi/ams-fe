import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from 'app/classes/auth';
import { User } from 'app/interfaces/user';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  infoForm: FormGroup;
  passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const user = Auth.user;
    this.infoForm = this.formBuilder.group({
      first_name: user.first_name,
      second_name: user.second_name,
      third_name: user.third_name,
      last_name: user.last_name,
      rank: user.rank,
    });

    this.passwordForm = this.formBuilder.group({
      password: '',
      password_confirm: ''
    });

    // Auth.userEmitter.subscribe(
    //   user => {
    //     this.infoForm.patchValue(user);
    //   }
    // );
  }

  infoSubmit(): void {
    const data = this.infoForm.getRawValue();
    this.authService.updateInfo(data).subscribe(
      (user: User) => {
        Auth.user = user;
      }      
    );
  }

  passwordSubmit(): void {
    this.authService.updatePassword(this.passwordForm.getRawValue()).subscribe(
      res => console.log(res)
    );
  }
}
