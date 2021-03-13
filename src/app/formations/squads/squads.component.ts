import { Component, OnInit } from '@angular/core';
import { Squad } from 'app/interfaces/squad';
import { Wing } from 'app/interfaces/wing';
import { SquadService } from 'app/services/squad.service';
import { WingService } from 'app/services/wing.service';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.scss']
})
export class SquadsComponent implements OnInit {
  squads: Squad[] = [];
  wing: Wing;

  constructor(
    private wingService: WingService,
    private squadService: SquadService
  ) { }

  ngOnInit(): void {
    this.squadService.all().subscribe((res: any) => {
      this.squads = res.data;
    })
  }

  delete(id: number): void {
    if (confirm('هل أنت متأكد من حذف السرب')){
      this.squadService.delete(id).subscribe(
        res => {
          this.squads = this.squads.filter(u => u.id != id);
        }
      );
    }    
  }
}
