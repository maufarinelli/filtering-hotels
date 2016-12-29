import { Component, OnInit } from '@angular/core';

import { FilteringHotelsService } from '../filtering-hotels.service';
import { AccommodationType } from './accommodation-type';

@Component({
  moduleId: module.id,
  selector: 'accommodation-type',
  templateUrl: './accommodation-type.html',
})
export class AccommodationTypeComponent  {
  accommodationTypes: AccommodationType[];

  constructor(private filteringHotelsService: FilteringHotelsService) {}

  ngOnInit(): void {
    this.filteringHotelsService.getAccommodationType()
      .then(types => this.accommodationTypes = types);
  }
}
