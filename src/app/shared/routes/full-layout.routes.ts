import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
  },
  {
    path: '',
    loadChildren: () => import('../../formations/formations.module').then(m => m.FormationsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../computers/computers.module').then(m => m.ComputersModule)
  },
  {
    path: '',
    loadChildren: () => import('../../grantees/grantees.module').then(m => m.GranteesModule)
  },
  {
    path: '',
    loadChildren: () => import('../../networks/networks.module').then(m => m.NetworksModule)
  },
  {
    path: '',
    loadChildren: () => import('../../servers/servers.module').then(m => m.ServersModule)
  },
  {
    path: '',
    loadChildren: () => import('../../printers/printers.module').then(m => m.PrintersModule)
  },
  {
    path: '',
    loadChildren: () => import('../../comsec/comsec.module').then(m => m.ComsecModule)
  },
  {
    path: '',
    loadChildren: () => import('../../profile/profile.module').then(m => m.ProfileModule)
  }
];
