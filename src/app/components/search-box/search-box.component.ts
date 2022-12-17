import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() title;
  @Input() placeholder;
  @Output() searchTextChange = new EventEmitter<string>();

  searchText: string;

  constructor() { }

  ngOnInit(): void {
  }

  searchValueChange(value: string) {
    this.searchTextChange.emit(value);
  }
}
