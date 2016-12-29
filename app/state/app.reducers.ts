import { ACCOMMODATION_TYPE } from '../accommodation-type/mock-accommodation-type';
import { Action } from './app.actions';

export interface FilterState {
  accommodationType: any
};

export interface Reducer<T> {
  (state: T, action: Action): T
};

const initialState: FilterState = Object.assign({}, {accommodationType: ACCOMMODATION_TYPE});

export const filterReducer: Reducer<FilterState> = function(state = initialState, action) {
  switch (action.type) {
    case 'ACCOMMODATION_TYPE_CHANGE':
      return state.accommodationType.map(type => {
        type.id === action.payload.id ?
          Object.assign({}, type, {checked: action.payload.checked}) :
          type;
      });
  }
};
