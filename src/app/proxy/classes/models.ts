import type { EntityDto } from '@abp/ng.core';
import type { SectionDto } from '../sections/models';

export interface ClassDto extends EntityDto<number> {
  code?: string;
  name?: string;
  branchId: number;
  branchName?: string;
  sections: SectionDto[];
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
