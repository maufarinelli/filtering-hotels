import { Reducer } from '../state/app.reducers';
import { FilterState, initialState } from '../state/app.initialState';

export const accommodationReducer: Reducer<FilterState> = function(state = initialState, action) {
  switch (action.type) {
    case 'ACCOMMODATION_TYPE_CHANGE':
      state.accommodationTypes.map(type => {
        type.id === action.payload.id ?
          Object.assign({}, type, {checked: action.payload.checked}) :
          type;
      });
  }
  return state.accommodationTypes;
};
