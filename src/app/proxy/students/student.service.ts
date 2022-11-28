import type { CreateStudentRequestDto, StudentDto, UpdateStudentRequestDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { BaseResponseDto, GenericResponseDto, GetAllRequestDto, LookupDto } from '../common/models';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiName = 'Default';
  

  create = (request: CreateStudentRequestDto) =>
    this.restService.request<any, GenericResponseDto<StudentDto>>({
      method: 'POST',
      url: '/api/app/student',
      body: request,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, BaseResponseDto>({
      method: 'DELETE',
      url: `/api/app/student/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, StudentDto>({
      method: 'GET',
      url: `/api/app/student/${id}`,
    },
    { apiName: this.apiName });
  

  getAll = (input: GetAllRequestDto) =>
    this.restService.request<any, PagedResultDto<StudentDto>>({
      method: 'GET',
      url: '/api/app/student',
      params: { searchKey: input.searchKey, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  getLookup = (searchText?: string) =>
    this.restService.request<any, LookupDto[]>({
      method: 'GET',
      url: '/api/app/student/lookup',
      params: { searchText },
    },
    { apiName: this.apiName });
  

  update = (request: UpdateStudentRequestDto) =>
    this.restService.request<any, GenericResponseDto<StudentDto>>({
      method: 'POST',
      url: '/api/app/student/update',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
