import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/interfaces/user';
import { Wing } from 'app/interfaces/wing';
import { UserService } from 'app/services/user.service';
import { WingService } from 'app/services/wing.service';

@Component({
  selector: 'app-edit-wing',
  templateUrl: './edit-wing.component.html',
  styleUrls: ['./edit-wing.component.scss']
})
export class EditWingComponent implements OnInit {
  form: FormGroup;
  users: User[] = [];
  wing: Wing;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private wingService: WingService,
    private route: ActivatedRoute,
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

    this.route.params.subscribe(
      params => {
        this.wingService.get(params.id).subscribe(
          (res: any) => {
            this.wing = res.data;
            this.form.patchValue({
              wing_name: this.wing.wing_name,
              wing_commander: this.wing.wing_commander.id,
              wing_coordinator: this.wing.wing_coordinator.id,
            });
          }
        )        
      }
    );
  }

  submit(): void {
    this.wingService.update(this.wing.id ,this.form.getRawValue()).subscribe(
      () => this.router.navigate(['/formations/wings'])
    );
  }
}
