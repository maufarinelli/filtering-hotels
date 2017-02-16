import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { FilterState } from '../state/app.initialState';

import { FilteringHotelsService } from '../filtering-hotels.service';
import { AccommodationType } from './accommodation-type';

@Component({
  moduleId: module.id,
  selector: 'accommodation-type',
  templateUrl: './accommodation-type.html',
})
export class AccommodationTypeComponent  {
  accommodationTypes: AccommodationType[];

  constructor(
    private filteringHotelsService: FilteringHotelsService,
    private ngRedux: NgRedux<FilterState>
  ) {}

  ngOnInit(): void {
    this.filteringHotelsService.getAccommodationType()
      .then(types => this.accommodationTypes = types);
  }

  onCheckToggle(accommodationType) {
    accommodationType.checked = !accommodationType.checked;
    this.ngRedux.dispatch({ type: 'ACCOMMODATION_TYPE_CHANGE', payload: accommodationType});
  }
}
