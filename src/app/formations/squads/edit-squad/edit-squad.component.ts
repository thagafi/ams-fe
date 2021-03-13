import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Squad } from 'app/interfaces/squad';
import { User } from 'app/interfaces/user';
import { Wing } from 'app/interfaces/wing';
import { SquadService } from 'app/services/squad.service';
import { UserService } from 'app/services/user.service';
import { WingService } from 'app/services/wing.service';

@Component({
  selector: 'app-edit-squad',
  templateUrl: './edit-squad.component.html',
  styleUrls: ['./edit-squad.component.scss']
})
export class EditSquadComponent implements OnInit {
  form: FormGroup;
  users: User;
  wings: Wing;
  squad: Squad;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private wingService: WingService,
    private squadService: SquadService,
    private route: ActivatedRoute,
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

    this.route.params.subscribe(
      params => {
        this.squadService.get(params.id).subscribe(
          (res: any) => {
            this.squad = res.data;
            this.form.patchValue({
              Squad_name: this.squad.Squad_name,
              Squad_commander: this.squad.Squad_commander.id,
              Squad_coordinator: this.squad.Squad_coordinator.id,
              wing: this.squad.wing.id
            });
          }
        )        
      }
    );
  }

  submit(): void {
    this.squadService.update(this.squad.id ,this.form.getRawValue()).subscribe(
      () => this.router.navigate(['/formation/squads'])
    );
  }
}
