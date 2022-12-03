import { ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchDto, BranchService } from '@proxy/branches';
import { GetAllRequestDto } from '@proxy/common';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  branches = { items: [], totalCount: 0 } as PagedResultDto<BranchDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedBranch = {} as BranchDto;

  constructor(public readonly list: ListService<GetAllRequestDto>, 
    private branchService: BranchService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    const branchStreamCreator = (query) => this.branchService.getAll(query);

    this.list.hookToQuery(branchStreamCreator).subscribe((response) => {
      this.branches = response;
    });

  }

  createBranch() {
    this.selectedBranch = {} as BranchDto; // reset the selected branch
    this.buildForm();
    this.isModalOpen = true;
  }

  editBranch(id: number) {
    this.branchService.get(id).subscribe((branch) => {
      this.selectedBranch = branch;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id:[this.selectedBranch.id || null],
      name: [this.selectedBranch.name || '', Validators.required],
      code: [this.selectedBranch.code || '', Validators.required],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedBranch.id
      ? this.branchService.update(this.form.value)
      : this.branchService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  delete(id: number) {
    this.confirmationService.warn('Are you sure you want to delete this branch?', 'Are you sure?').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.branchService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
}
