import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/students',
        name: 'Students',
        iconClass: 'fas fa-graduation-cap',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/branches',
        name: 'Branches',
        iconClass: 'fas fa-school',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/classes',
        name: 'Classes',
        iconClass: 'fas fa-chalkboard',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/sections',
        name: 'Sections',
        iconClass: 'fas fa-award',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/feestructure',
        name: 'Fee Structure',
        iconClass: 'fas fa-file-invoice',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/feegeneration',
        name: 'Fee Generation',
        iconClass: 'fas fa-money-bill',
        order: 1,
        layout: eLayoutType.application,
      },
    ]);
  };
}
