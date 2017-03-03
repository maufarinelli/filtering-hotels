import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import * as _ from "lodash";

import { FilterState } from '../state/app.initialState';

import { FilteringHotelsService } from '../filtering-hotels.service';

@Component({
  moduleId: module.id,
  selector: 'hotels-list',
  templateUrl: './hotels-list.html'
})
export class HotelsListComponent implements OnInit {
  private hotels: Object[];
  private allHotels: Object[];
  private accommodationTypesState$

  constructor(
    private filteringHotelsService: FilteringHotelsService,
    private ngRedux: NgRedux<FilterState>
  ) {

    this.accommodationTypesState$ = this.ngRedux.subscribe(() => {
      console.log(this.ngRedux.getState());
      this.onFilterHotels(this.ngRedux.getState());
    });
  }

  ngOnInit() {
    this.filteringHotelsService.getHotels()
      .then(hotels => {
        this.allHotels = hotels;
        this.onFilterHotels(this.ngRedux.getState());
      });
  }

  onFilterHotels(state) {
    var selectedAccommodations = state.accommodationTypes.filter(accommodationType => accommodationType.checked);

    var hotels = this.allHotels.filter(hotel => {
      var x = false;
      selectedAccommodations.forEach(accommodation => {
        x = accommodation.name === hotel.accommodationType;
      });
      return x;
    });

    this.hotels = hotels;
  }
}
