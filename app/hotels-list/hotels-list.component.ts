import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { FilterState } from '../state/app.initialState';

import { FilteringHotelsService } from '../filtering-hotels.service';

@Component({
  moduleId: module.id,
  selector: 'hotels-list',
  templateUrl: './hotels-list.html'
})
export class HotelsListComponent {
  private hotels: Object[];

  constructor(
    private filteringHotelsService: FilteringHotelsService,
    private ngRedux: NgRedux<FilterState>
  ) {}

  ngOnInit() {
    this.filteringHotelsService.getHotels()
      .then(hotels => this.hotels = hotels);
  }
}
