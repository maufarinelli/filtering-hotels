import { Action } from './app.actions';
import { FilterState, initialState } from './app.initialState';

export interface Reducer<T> {
  (state: T, action: Action): T
}

export const filterReducer: Reducer<FilterState> = function(state = initialState, action) {
  switch (action.type) {
    case 'ACCOMMODATION_TYPE_CHANGE':
      state.accommodationTypes.map(type => {
        type.id === action.payload.id ?
          Object.assign({}, type, {checked: action.payload.checked}) :
          type;
      });
      console.log(state.accommodationTypes);
      return state;
    case 'SCORE_START_CHANGE':
      state.scores.map(score => {
        score.id === action.payload.id ?
          Object.assign({}, score, score.value = action.payload.value) :
          score
      });
      console.log(state.scores);
      return state;
    case 'SCORE_END_CHANGE':
      state.scores.map(score => {
        score.id === action.payload.id ?
          Object.assign({}, score, score.value = action.payload.value) :
          score
      });
      console.log(state.scores);
      return state;
  }
};
