import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/interfaces/user';
import { Wing } from 'app/interfaces/wing';
import { SquadService } from 'app/services/squad.service';
import { UserService } from 'app/services/user.service';
import { WingService } from 'app/services/wing.service';

@Component({
  selector: 'app-create-squad',
  templateUrl: './create-squad.component.html',
  styleUrls: ['./create-squad.component.scss']
})
export class CreateSquadComponent implements OnInit {
  form: FormGroup;
  users: User[] = [];
  wings: Wing[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private wingService: WingService,
    private squadService: SquadService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Squad_name: '',
      Squad_commander: '',
      Squad_coordinator: '',
      wing: ''
    });

    this.userService.all().subscribe(
      (res: any) => {
        this.users = res.data;
      }
    );
    this.wingService.all().subscribe(
      (res: any) => {
        this.wings = res.data;
      }
    );
  }

  submit(): void {
    this.squadService.create(this.form.getRawValue()).subscribe(
      () => this.router.navigate(['/formations/squads']) 
    );
  }
}
