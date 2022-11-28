import type { EntityDto } from '@abp/ng.core';

export interface CreateSectionRequestDto {
  name: string;
}

export interface SectionDto extends EntityDto<number> {
  name?: string;
}

export interface UpdateSectionRequestDto extends CreateSectionRequestDto {
  id: number;
}
