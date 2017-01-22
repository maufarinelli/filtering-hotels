import { ACCOMMODATION_TYPE } from '../accommodation-type/mock-accommodation-type';
import { SCORE } from '../score/mock-scores';

export interface FilterState {
  accommodationTypes: any
  scores: any
}

export const initialState: FilterState = Object.assign({}, {
  accommodationTypes: ACCOMMODATION_TYPE,
  scores: SCORE
});
