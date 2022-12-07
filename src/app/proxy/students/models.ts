import type { EntityDto } from '@abp/ng.core';
import type { StudentStatus } from './student-status.enum';
import type { GetAllRequestDto } from '../common/models';

export interface CreateStudentRequestDto {
  rollNo: number;
  name: string;
  cnic?: string;
  phoneNumber?: string;
  fatherName?: string;
  fatherCNIC?: string;
  presentAddress?: string;
  admissionDate?: string;
  classId: number;
  sectionId: number;
  dateOfBirth?: string;
}

export interface StudentDto extends EntityDto<number> {
  rollNo: number;
  name?: string;
  cnic?: string;
  phoneNumber?: string;
  fatherName?: string;
  fatherCNIC?: string;
  presentAddress?: string;
  admissionDate?: string;
  classId?: number;
  className?: string;
  sectionId?: number;
  sectionName?: string;
  status: StudentStatus;
}

export interface StudentGetAllRequestDto extends GetAllRequestDto {
  branchIds: number[];
  classIds: number[];
  sectionIds: number[];
}

export interface UpdateStudentRequestDto extends CreateStudentRequestDto {
  id: number;
}
