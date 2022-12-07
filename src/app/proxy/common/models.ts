import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetAllRequestDto extends PagedAndSortedResultRequestDto {
  searchKey?: string;
}

export interface BaseResponseDto {
  success: boolean;
  message?: string;
}

export interface GenericResponseDto<T> extends BaseResponseDto {
  data: T;
}

export interface LookupDto {
  text?: string;
  value?: string;
  additionalData?: string;
}
