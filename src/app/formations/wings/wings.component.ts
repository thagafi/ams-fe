import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'app/interfaces/user';
import { Wing } from 'app/interfaces/wing';
import { UserService } from 'app/services/user.service';
import { WingService } from 'app/services/wing.service';
import { Response } from 'app/interfaces/response'

@Component({
  selector: 'app-wings',
  templateUrl: './wings.component.html',
  styleUrls: ['./wings.component.scss']
})
export class WingsComponent implements OnInit {
  wings: Wing[] = [];
  users: User[] = [];
  lastPage: number;

  constructor(
    private wingService: WingService,
    private userService: UserService, 
  ) { }

  ngOnInit(): void {
    this.wingService.all().subscribe((res: any) => {
      this.wings = res.data;
    })
    this.userService.all().subscribe((res: any) => {
      this.users = res.data;
    })
    this.load();
  }

  load(page = 1): void {
    this.wingService.all(page).subscribe(
      (res: Response) => {
        this.wings = res.data;
        this.lastPage = res.meta.last_page;
      }
    );
  }

  delete(id: number): void {
    if (confirm('هل أنت متأكد من حذف الجناح')){
      this.wingService.delete(id).subscribe(
        () => {
          this.wings = this.wings.filter(u => u.id != id);
        }
      );
    }    
  }
}
