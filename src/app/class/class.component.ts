import { ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from '@proxy/branches';
import { ClassDto, ClassService } from '@proxy/classes';
import { GetAllRequestDto, LookupDto } from '@proxy/common';
import { SectionService } from '@proxy/sections';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  classes = { items: [], totalCount: 0 } as PagedResultDto<ClassDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedClass = {} as ClassDto;
  branchesLookup: LookupDto[];
  sectionsLookup: LookupDto[];

  constructor(public readonly list: ListService<GetAllRequestDto>, 
    private classService: ClassService,
    private branchService: BranchService,
    private sectionService: SectionService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    const classestreamCreator = (query) => this.classService.getAll(query);

    this.list.hookToQuery(classestreamCreator).subscribe((response) => {
      this.classes = response;
    });

  }

  createClass() {
    this.selectedClass = {} as ClassDto; // reset the selected section
    this.buildForm();
    this.isModalOpen = true;

    this.branchService.getLookup().subscribe(data=>{
      this.branchesLookup = data;
    });

    this.sectionService.getLookup().subscribe(data=>{
      this.sectionsLookup = data;
    });
  }

  editClass(id: number) {
    this.classService.get(id).subscribe((section) => {
      this.selectedClass = section;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id:[this.selectedClass.id || null],
      code: [this.selectedClass.code || '', Validators.required],
      name: [this.selectedClass.name || '', Validators.required],
      branchId:[this.selectedClass.branchId || null, Validators.required],
      sectionIds:[null]
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedClass.id
      ? this.classService.update(this.form.value)
      : this.classService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  delete(id: number) {
    this.confirmationService.warn('Are you sure you want to delete this class?', 'Are you sure?').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.classService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

}
