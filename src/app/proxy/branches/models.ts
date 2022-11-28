import type { EntityDto } from '@abp/ng.core';

export interface BranchDto extends EntityDto<number> {
  code?: string;
  name?: string;
}

export interface CreateBranchRequestDto {
  code: string;
  name: string;
}

export interface UpdateBranchRequestDto extends CreateBranchRequestDto {
  id: number;
}
