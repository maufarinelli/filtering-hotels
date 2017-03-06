import { Reducer } from '../state/app.reducers';
import { FilterState, initialState } from '../state/app.initialState';

export const scoresReducer: Reducer<FilterState> = function(state = initialState, action) {
  switch (action.type) {
    case 'SCORE_START_CHANGE':
      state.scores.map(score => {
        score.id === action.payload.id ?
          Object.assign({}, score, score.value = action.payload.value) :
          score
      });
    case 'SCORE_END_CHANGE':
      state.scores.map(score => {
        score.id === action.payload.id ?
          Object.assign({}, score, score.value = action.payload.value) :
          score
      });
  }
  return state.scores;
};
