import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'AlEjazSMS',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44341/',
    redirectUri: baseUrl,
    clientId: 'AlEjazSMS_App',
    responseType: 'code',
    scope: 'offline_access AlEjazSMS',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44341',
      rootNamespace: 'AlEjazSMS',
    },
  },
} as Environment;
