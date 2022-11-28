import type { EntityDto } from '@abp/ng.core';
import type { StudentStatus } from './student-status.enum';

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
  feeStructureId?: number;
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
  sectionId: number;
  feeStructureId?: number;
  status: StudentStatus;
}

export interface UpdateStudentRequestDto extends CreateStudentRequestDto {
  id: number;
}
