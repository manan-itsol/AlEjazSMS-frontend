import type { ClassDto, CreateClassRequestDto, UpdateClassRequestDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { BaseResponseDto, GenericResponseDto, GetAllRequestDto, LookupDto } from '../common/models';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  apiName = 'Default';
  

  create = (request: CreateClassRequestDto) =>
    this.restService.request<any, GenericResponseDto<ClassDto>>({
      method: 'POST',
      url: '/api/app/class',
      body: request,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, BaseResponseDto>({
      method: 'DELETE',
      url: `/api/app/class/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, ClassDto>({
      method: 'GET',
      url: `/api/app/class/${id}`,
    },
    { apiName: this.apiName });
  

  getAll = (input: GetAllRequestDto) =>
    this.restService.request<any, PagedResultDto<ClassDto>>({
      method: 'GET',
      url: '/api/app/class',
      params: { searchKey: input.searchKey, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  getLookup = (searchText?: string) =>
    this.restService.request<any, LookupDto[]>({
      method: 'GET',
      url: '/api/app/class/lookup',
      params: { searchText },
    },
    { apiName: this.apiName });
  

  getLookupByBranch = (branchId: number, searchText?: string) =>
    this.restService.request<any, LookupDto[]>({
      method: 'GET',
      url: `/api/app/class/lookup-by-branch/${branchId}`,
      params: { searchText },
    },
    { apiName: this.apiName });
  

  update = (request: UpdateClassRequestDto) =>
    this.restService.request<any, GenericResponseDto<ClassDto>>({
      method: 'POST',
      url: '/api/app/class/update',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
