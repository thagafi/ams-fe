import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ComputerService } from 'app/services/computer.service';
import { Wing } from 'app/interfaces/wing'
import { Squad } from 'app/interfaces/squad';


@Component({
  selector: 'app-list-computer',
  templateUrl: './list-computer.component.html',
  styleUrls: ['./list-computer.component.scss']
})
export class ListComputerComponent implements OnInit {
  @ViewChild('myTable') table: any;
  

  rows: any[] = [];
  expanded: any = {};
  timeout: any;
  ColumnMode = ColumnMode;
  private tempData = [];


  constructor(
    private computerService: ComputerService
  ) { }

  ngOnInit(): void {
    this.computerService.all().subscribe((res: any) => {
      const data = res.data;
      this.rows = data;
      this.tempData = this.rows;
    console.log(this.tempData);
    console.log(this.rows);    
  })
}

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.squad.wing.wing_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  export(): void {
    this.computerService.export().subscribe(
      res => {
        const blob = new Blob([res], {type: 'text/csv'});
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'computers.csv';
        link.click();
      }
    );
  }
}
