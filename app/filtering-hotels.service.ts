import { Injectable } from '@angular/core';

import { AccommodationType } from './accommodation-type/accommodation-type';
import { ACCOMMODATION_TYPE } from './accommodation-type/mock-accommodation-type';

@Injectable()
export class FilteringHotelsService {
  getAccommodationType(): Promise<AccommodationType[]> {
    return Promise.resolve(ACCOMMODATION_TYPE);
  }
}
