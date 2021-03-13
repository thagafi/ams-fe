import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '/home', title: 'الرئيسية', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '', title: 'التشكيلات', icon: 'ft-file', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
        { path: '/formations/wings', title: 'الأجنحة', icon: 'ft-arrow-left submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/formations/squads', title: 'الأسراب', icon: 'ft-arrow-left submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ]
  },
  {
    path: '/computers', title: 'أجهزة الحاسب', icon: 'ft-monitor', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, 
    submenu: [
          { path: '/computers/add-computer', title: 'إضافة جهاز', icon: 'ft-arrow-left submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/computers/list', title: 'عرض الأجهزة', icon: 'ft-arrow-left submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ]
  },
  {
    path: '/grantees', title: 'مكافآت الحاسب', icon: 'ft-dollar-sign', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/networks', title: 'أجهزة الشبكة', icon: 'ft-terminal', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/servers', title: 'الملقمات', icon: 'ft-server', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/printers', title: 'الطابعات', icon: 'ft-printer', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/comsec', title: 'أجهزة أمن الإتصالات', icon: 'ft-lock', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
];
