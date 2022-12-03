import { ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetAllRequestDto } from '@proxy/common';
import { SectionDto, SectionService } from '@proxy/sections';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  sections = { items: [], totalCount: 0 } as PagedResultDto<SectionDto>;
  isModalOpen = false;
  form: FormGroup;
  selectedSection = {} as SectionDto;

  constructor(public readonly list: ListService<GetAllRequestDto>, 
    private sectionService: SectionService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    const sectionStreamCreator = (query) => this.sectionService.getAll(query);

    this.list.hookToQuery(sectionStreamCreator).subscribe((response) => {
      this.sections = response;
    });

  }

  createSection() {
    this.selectedSection = {} as SectionDto; // reset the selected section
    this.buildForm();
    this.isModalOpen = true;
  }

  editSection(id: number) {
    this.sectionService.get(id).subscribe((section) => {
      this.selectedSection = section;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id:[this.selectedSection.id || null],
      name: [this.selectedSection.name || '', Validators.required],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedSection.id
      ? this.sectionService.update(this.form.value)
      : this.sectionService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  delete(id: number) {
    this.confirmationService.warn('Are you sure you want to delete this section?', 'Are you sure?').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.sectionService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

}
