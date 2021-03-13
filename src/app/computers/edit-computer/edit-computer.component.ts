import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'app/interfaces/brand';
import { Computer } from 'app/interfaces/computer';
import { Cpu } from 'app/interfaces/cpu';
import { Monitor } from 'app/interfaces/monitor';
import { Os } from 'app/interfaces/os';
import { Ram } from 'app/interfaces/ram';
import { Squad } from 'app/interfaces/squad';
import { User } from 'app/interfaces/user';
import { BrandService } from 'app/services/brand.service';
import { ComputerService } from 'app/services/computer.service';
import { CpuService } from 'app/services/cpu.service';
import { MonitorService } from 'app/services/monitor.service';
import { OsService } from 'app/services/os.service';
import { RamService } from 'app/services/ram.service';
import { SquadService } from 'app/services/squad.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.scss']
})
export class EditComputerComponent implements OnInit {
  form: FormGroup;
  users: User[] = [];
  squads: Squad[] = [];
  cpus: Cpu[] = [];
  rams: Ram[] = [];
  monitors: Monitor[] = [];
  oss: Os[] = [];
  brands: Brand[] = [];
  computer: Computer;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private squadService: SquadService,
    private computerService: ComputerService,
    private cpuService: CpuService,
    private ramService: RamService,
    private monitorService: MonitorService,
    private osService: OsService,
    private brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      computer_name: '',
      squad: '',
      user: '',
      cpu: '',
      ram: '',
      monitor_size: '',
      os: '',
      brand: ''
    });

    this.userService.all().subscribe(
      (res: any) => {
        this.users = res.data;
      }
    );

    this.squadService.all().subscribe(
      (res: any) => {
        this.squads = res.data;
      }
    );

    this.cpuService.all().subscribe(
      (res: any) => {
        this.cpus = res.data;
      }
    );
    this.ramService.all().subscribe(
      (res: any) => {
        this.rams = res.data;
      }
    );
    this.monitorService.all().subscribe(
      (res: any) => {
        this.monitors = res.data;
      }
    );
    this.osService.all().subscribe(
      (res: any) => {
        this.oss = res.data;
      }
    );
    this.brandService.all().subscribe(
      (res: any) => {
        this.brands = res.data;
      }
    );

    this.route.params.subscribe(
      params => {
        this.computerService.get(params.id).subscribe(
          (res: any) => {
            this.computer = res.data;
            this.form.patchValue({
              computer_name: this.computer.computer_name,
              squad: this.computer.squad,
              cpu: this.computer.cpu,
              ram: this.computer.ram,
              monitor_size: this.computer.monitor_size,
              os: this.computer.os,
              brand: this.computer.brand,
            });
          }
        )        
      }
    );
  }

  submit(): void {
    this.computerService.create(this.form.getRawValue()).subscribe(
      () => this.router.navigate(['/computers'])
    );
  }
}
