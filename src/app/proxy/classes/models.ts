import type { EntityDto } from '@abp/ng.core';

export interface ClassDto extends EntityDto<number> {
  code?: string;
  name?: string;
  branchId: number;
  branchName?: string;
  sectionNames: string[];
}

export interface CreateClassRequestDto {
  code: string;
  name: string;
  branchId: number;
  sectionIds: number[];
}

export interface UpdateClassRequestDto extends CreateClassRequestDto {
  id: number;
}
