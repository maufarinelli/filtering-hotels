import { Injectable } from '@angular/core';

import { AccommodationType } from './accommodation-type/accommodation-type';
import { Score } from './score/score';
import { initialState } from './state/app.initialState';

@Injectable()
export class FilteringHotelsService {
  getAccommodationType(): Promise<AccommodationType[]> {
    return Promise.resolve(initialState.accommodationTypes);
  }

  getScores(): Promise<Score[]> {
    return Promise.resolve(initialState.scores);
  }
}
