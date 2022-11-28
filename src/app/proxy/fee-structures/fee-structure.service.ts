import type { CreateFeeStructureRequestDto, FeeStructureDto, UpdateFeeStructureRequestDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { BaseResponseDto, GenericResponseDto, GetAllRequestDto } from '../common/models';

@Injectable({
  providedIn: 'root',
})
export class FeeStructureService {
  apiName = 'Default';
  

  create = (request: CreateFeeStructureRequestDto) =>
    this.restService.request<any, GenericResponseDto<FeeStructureDto>>({
      method: 'POST',
      url: '/api/app/fee-structure',
      body: request,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, BaseResponseDto>({
      method: 'DELETE',
      url: `/api/app/fee-structure/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, FeeStructureDto>({
      method: 'GET',
      url: `/api/app/fee-structure/${id}`,
    },
    { apiName: this.apiName });
  

  getAll = (input: GetAllRequestDto) =>
    this.restService.request<any, PagedResultDto<FeeStructureDto>>({
      method: 'GET',
      url: '/api/app/fee-structure',
      params: { searchKey: input.searchKey, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (request: UpdateFeeStructureRequestDto) =>
    this.restService.request<any, GenericResponseDto<FeeStructureDto>>({
      method: 'POST',
      url: '/api/app/fee-structure/update',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
