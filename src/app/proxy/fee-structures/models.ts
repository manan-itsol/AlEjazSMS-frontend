import type { EntityDto } from '@abp/ng.core';

export interface CreateFeeStructureRequestDto extends FeeStructureDto {
}

export interface FeeStructureDto extends EntityDto<number> {
  title: string;
  description?: string;
  lineItems: FeeStructureLineItemDto[];
}

export interface FeeStructureLineItemDto extends EntityDto<number> {
  feeStructureId: number;
  shortDescription: string;
  amount: number;
}

export interface UpdateFeeStructureRequestDto extends FeeStructureDto {
}
