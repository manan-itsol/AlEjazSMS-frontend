import type { BranchDto, CreateBranchRequestDto, UpdateBranchRequestDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { BaseResponseDto, GenericResponseDto, GetAllRequestDto, LookupDto } from '../common/models';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  apiName = 'Default';
  

  create = (request: CreateBranchRequestDto) =>
    this.restService.request<any, GenericResponseDto<BranchDto>>({
      method: 'POST',
      url: '/api/app/branch',
      body: request,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, BaseResponseDto>({
      method: 'DELETE',
      url: `/api/app/branch/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, BranchDto>({
      method: 'GET',
      url: `/api/app/branch/${id}`,
    },
    { apiName: this.apiName });
  

  getAll = (input: GetAllRequestDto) =>
    this.restService.request<any, PagedResultDto<BranchDto>>({
      method: 'GET',
      url: '/api/app/branch',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount, searchKey: input.searchKey },
    },
    { apiName: this.apiName });
  

  getLookup = (searchText?: string) =>
    this.restService.request<any, LookupDto[]>({
      method: 'GET',
      url: '/api/app/branch/lookup',
      params: { searchText },
    },
    { apiName: this.apiName });
  

  update = (request: UpdateBranchRequestDto) =>
    this.restService.request<any, GenericResponseDto<BranchDto>>({
      method: 'POST',
      url: '/api/app/branch/update',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
