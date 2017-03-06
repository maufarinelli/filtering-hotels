import { Reducer } from '../state/app.reducers';
import { FilterState, initialState } from '../state/app.initialState';

export const pricesReducer: Reducer<FilterState> = function(state = initialState, action) {
  switch (action.type) {
    case 'PRICE_START_CHANGE':
      state.prices.map(price => {
        price.id === action.payload.id ?
          Object.assign({}, price, price.value = action.payload.value) :
          price
      });
    case 'PRICE_END_CHANGE':
      state.prices.map(price => {
        price.id === action.payload.id ?
          Object.assign({}, price, price.value = action.payload.value) :
          price
      });
  }
  return state.prices;
};
