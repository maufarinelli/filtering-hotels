import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { FilterState } from '../state/app.reducers';

import { FilteringHotelsService } from '../filtering-hotels.service';
import { Score } from './score';

@Component({
  moduleId: module.id,
  selector: 'scores',
  templateUrl: './scores.html',
})
export class ScoresComponent {
  scores: Score[];
  selectedValue: number;

  constructor(
    private filteringHotelsService: FilteringHotelsService,
    private ngRedux: NgRedux<FilterState>
  ) {}

  ngOnInit(): void {
    this.filteringHotelsService.getScores()
      .then(scores => this.scores = scores);
  }

  onCheckToggle(score) {
    this.selectedValue = this.selectedValue;
    this.ngRedux.dispatch({ type: 'SCORE_CHANGE', payload: this.selectedValue})
  }

}
