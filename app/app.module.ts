import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { createStore, Store, combineReducers } from 'redux';
import { FilterState } from './state/app.initialState';

import { accommodationReducer } from './accommodation-type/accommodation-type.reducer';
import { pricesReducer } from './prices/prices.reducer';
import { scoresReducer } from './score/scores.reducer';

import { FilteringHotelsService } from './filtering-hotels.service';
import { AccommodationTypeComponent }  from './accommodation-type/accommodation-type.component';
import { ScoresComponent } from './score/scores.component';
import { PricesComponent } from './prices/prices.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { AppComponent }  from './app.component';

let filterReducer = combineReducers({
  accommodationTypes: accommodationReducer,
  scores: scoresReducer,
  prices: pricesReducer
});

export const appStore: Store<FilterState> = createStore(filterReducer);

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgReduxModule.forRoot() ],
  declarations: [ AppComponent, AccommodationTypeComponent, ScoresComponent, PricesComponent, HotelsListComponent ],
  providers:    [ FilteringHotelsService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule {
  constructor(ngRedux: NgRedux<FilterState>) {
    ngRedux.provideStore(appStore);
  }
}
