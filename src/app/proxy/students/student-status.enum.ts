import { mapEnumToOptions } from '@abp/ng.core';

export enum StudentStatus {
  Active = 0,
  Withdrawn = 1,
  Rejoin = 2,
}

export const studentStatusOptions = mapEnumToOptions(StudentStatus);
