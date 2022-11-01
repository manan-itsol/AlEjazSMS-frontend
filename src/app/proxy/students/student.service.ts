import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiName = 'Default';
  

  getStudent = () =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: '/api/app/student/student',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
