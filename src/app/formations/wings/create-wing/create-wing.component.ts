import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/interfaces/user';
import { UserService } from 'app/services/user.service';
import { WingService } from 'app/services/wing.service';

@Component({
  selector: 'app-create-wing',
  templateUrl: './create-wing.component.html',
  styleUrls: ['./create-wing.component.scss']
})
export class CreateWingComponent implements OnInit {
  form: FormGroup;
  users: User[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private wingService: WingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      wing_name: '',
      wing_commander: '',
      wing_coordinator: '',
    });

    this.userService.all().subscribe(
      (res: any) => {
        this.users = res.data;
      }
    );
  }

  submit(): void {
    this.wingService.create(this.form.getRawValue()).subscribe(
      () => this.router.navigate(['/formations/wings'])
    );
  }
}
