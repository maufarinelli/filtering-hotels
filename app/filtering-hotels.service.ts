import { Injectable } from '@angular/core';

import { AccommodationType } from './accommodation-type/accommodation-type';
import { SCORE_VALUES } from './score/mock-scores';
import { initialState } from './state/app.initialState';

@Injectable()
export class FilteringHotelsService {
  getAccommodationType(): Promise<AccommodationType[]> {
    return Promise.resolve(initialState.accommodationTypes);
  }

  getScoreValues(): Promise<any[]> {
    return Promise.resolve(SCORE_VALUES);
  }
}
