import type { CreateSectionRequestDto, SectionDto, UpdateSectionRequestDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { BaseResponseDto, GenericResponseDto, GetAllRequestDto, LookupDto } from '../common/models';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  apiName = 'Default';
  

  create = (request: CreateSectionRequestDto) =>
    this.restService.request<any, GenericResponseDto<SectionDto>>({
      method: 'POST',
      url: '/api/app/section',
      body: request,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, BaseResponseDto>({
      method: 'DELETE',
      url: `/api/app/section/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, SectionDto>({
      method: 'GET',
      url: `/api/app/section/${id}`,
    },
    { apiName: this.apiName });
  

  getAll = (input: GetAllRequestDto) =>
    this.restService.request<any, PagedResultDto<SectionDto>>({
      method: 'GET',
      url: '/api/app/section',
      params: { searchKey: input.searchKey, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  getLookup = (searchText?: string) =>
    this.restService.request<any, LookupDto[]>({
      method: 'GET',
      url: '/api/app/section/lookup',
      params: { searchText },
    },
    { apiName: this.apiName });
  

  getLookupByClass = (classId: number) =>
    this.restService.request<any, LookupDto[]>({
      method: 'GET',
      url: `/api/app/section/lookup-by-class/${classId}`,
    },
    { apiName: this.apiName });
  

  update = (request: UpdateSectionRequestDto) =>
    this.restService.request<any, GenericResponseDto<SectionDto>>({
      method: 'POST',
      url: '/api/app/section/update',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
