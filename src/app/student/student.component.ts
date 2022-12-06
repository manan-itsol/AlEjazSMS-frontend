import { Component, OnInit } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from '@proxy/branches';
import { ClassDto, ClassService } from '@proxy/classes';
import { SectionDto, SectionService } from '@proxy/sections';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { GetAllRequestDto, LookupDto } from '@proxy/common';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { StudentDto, StudentService } from '@proxy/students';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  isModalOpen = false;
  students = { items: [], totalCount: 0 } as PagedResultDto<StudentDto>;
  form: FormGroup;
  selectedStudent = {} as StudentDto;
  branchesLookup: LookupDto[];
  sectionsLookup: LookupDto[];
  classesLookup: LookupDto[];

  constructor(public readonly list: ListService<GetAllRequestDto>,
    private studentService: StudentService,
    private branchService: BranchService,
    private sectionService: SectionService,
    private classService: ClassService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    const classestreamCreator = (query) => this.studentService.getAll(query);

    this.list.hookToQuery(classestreamCreator).subscribe((response) => {
      this.students = response;
    });
  }

  createStudent() {
    this.selectedStudent = {} as StudentDto; // reset the selected student
    this.buildForm();
    this.isModalOpen = true;
    this.loadCreateOrEditData();
  }

  editStudent(id: number) {
    this.studentService.get(id).subscribe((student) => {
      this.selectedStudent = student;
      this.buildForm();
      this.isModalOpen = true;
      this.loadCreateOrEditData();
    });
  }

  loadCreateOrEditData() {
    this.branchService.getLookup().subscribe(data => {
      this.branchesLookup = data;
      //TODO: to fix for edit
      var branchId = this.selectedStudent.id || null;
      this.form.controls['id'].setValue(branchId);
    });

    this.sectionService.getLookup().subscribe(data => {
      this.sectionsLookup = data;
      //TODO: to fix for edit
      var sectionId = this.selectedStudent.sectionId || null;
      this.form.controls['sectionId'].setValue(sectionId);
      debugger;
    });

    this.classService.getLookup().subscribe(data => {
      this.classesLookup = data;
    });
  }

  buildForm() {

    this.form = this.formBuilder.group({
      id: [this.selectedStudent.id || null],
      name: [this.selectedStudent.name || '', Validators.required],
      cnic: [this.selectedStudent.cnic || '', Validators.required],
      phone: [this.selectedStudent.phoneNumber|| '', Validators.required],
      fatherName: [this.selectedStudent.fatherName || '', Validators.required],
      fatherCnic: [this.selectedStudent.fatherCNIC || '', Validators.required],
      presentAddress: [this.selectedStudent.presentAddress || '', Validators.required],
      admissionDate: [ this.datepipe.transform(this.selectedStudent.admissionDate, 'yyyy-MM-dd') || '', Validators.required],
      rollNo: [this.selectedStudent.rollNo || '', Validators.required],
      sectionId: [this.selectedStudent.sectionId || '', Validators.required],
      classId: ['', Validators.required],
      branchId: ['', Validators.required],
      status: [this.selectedStudent.status || '', Validators.required]
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }
    const formVal = this.form.value;
    const rqData = {
      id: formVal.id,
      name: formVal.name,
      cnic: formVal.cnic,
      phoneNumber: formVal.phone,
      fatherName: formVal.fatherName,
      fatherCnic: formVal.fatherCnic,
      presentAddress: formVal.presentAddress,
      admissionDate: formVal.admissionDate,
      rollNo: formVal.rollNo,
      classId: formVal.classId,
      sectionId: formVal.sectionId,
      status: formVal.status
    }

    debugger;
    const request = this.selectedStudent.id
      ? this.studentService.update(rqData)
      : this.studentService.create(rqData);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  delete(id: number) {
    this.confirmationService.warn('Are you sure you want to delete this student?', 'Are you sure?').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.studentService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  onChangeClass(val) {
    debugger;
  }

}
