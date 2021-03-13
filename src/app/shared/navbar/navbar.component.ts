import { Component, Output, EventEmitter, OnDestroy, OnInit, AfterViewInit, ChangeDetectorRef, Inject, Renderer2, ViewChild, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { DOCUMENT } from '@angular/common';
import { CustomizerService } from '../services/customizer.service';
import { FormControl } from '@angular/forms';
import { LISTITEMS } from '../data/template-search';
import { Router } from '@angular/router';
import { User } from 'app/interfaces/user';
import { AuthService } from '../auth/auth.service';
import { Auth } from 'app/classes/auth';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  today: number = Date.now();
  user: User;
  currentLang = "en";
  placement = "bottom-right";
  logoUrl = 'assets/img/logo.png';
  menuPosition = 'Side';
  isSmallScreen = false;
  protected innerWidth: any;
  hideSidebar: boolean = true;
  public isCollapsed = true;
  layoutSub: Subscription;
  configSub: Subscription;

 
  @Output()
  toggleHideSidebar = new EventEmitter<Object>();

  
  listItems = [];
  control = new FormControl();

  public config: any = {};

  constructor(public translate: TranslateService,
    private layoutService: LayoutService,
    private authService: AuthService,
    private router: Router,
    private configService: ConfigService, private cdr: ChangeDetectorRef) {

    this.config = this.configService.templateConf;
    this.innerWidth = window.innerWidth;

    this.layoutSub = layoutService.toggleSidebar$.subscribe(
      isShow => {
        this.hideSidebar = !isShow;
      });

  }

  ngOnInit() {
    this.listItems = LISTITEMS;

    if (this.innerWidth < 1200) {
      this.isSmallScreen = true;
    }
    else {
      this.isSmallScreen = false;
    }
    Auth.userEmitter.subscribe((user:User) => {this.user = user;});
  }

  ngAfterViewInit() {

    this.configSub = this.configService.templateConf$.subscribe((templateConf) => {
      if (templateConf) {
        this.config = templateConf;
      }
      this.loadLayout();
      this.cdr.markForCheck();

    })
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
    if (this.configSub) {
      this.configSub.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    if (this.innerWidth < 1200) {
      this.isSmallScreen = true;
    }
    else {
      this.isSmallScreen = false;
    }
  }

  loadLayout() {

    if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
      this.menuPosition = this.config.layout.menuPosition;
    }

    if (this.config.layout.variant === "Light") {
      this.logoUrl = 'assets/img/logo-dark.png';
    }
    else {
      this.logoUrl = 'assets/img/logo.png';
    }

  }

  logout(): void {
    this.authService.logout().subscribe(
      res => {
        this.router.navigate(['/auth/login'])
      }
    )
  }
}
