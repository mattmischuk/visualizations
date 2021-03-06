'use strict';

import EventEmitter from 'events';
import fgeo from 'fgeo';
import nibelung from 'nibelung';
import dispatcher from '../dispatcher/dispatcher';
import { rosetteActionTypes } from '../actions/rosette.actions';
import { RosetteDefaults } from './rosette.constants';

var store = new nibelung.Hoard({
  namespace: 'rosette-',
  persistent: true,
  version: '1'
});

store.getState = function getState() {
  return {
    numSamples: this.getOne('num-samples') || RosetteDefaults.NUM_SAMPLES,
    center: new fgeo.point.Point(
      this.getOne('center-x') || RosetteDefaults.X,
      this.getOne('center-y') || RosetteDefaults.Y),
    guideRadius: this.getOne('guide-radius') || RosetteDefaults.GUIDE_RADIUS,
    radius: this.getOne('radius') || RosetteDefaults.RADIUS,
    cellSize: this.getOne('cell-size') || RosetteDefaults.CELL_SIZE,
    constructionMode: this.getOne('constructionMode') || RosetteDefaults.CONSTRUCTION_MODE
  };
};

dispatcher.register(function _processAction(action) {
  switch (action.actionType) {
    case rosetteActionTypes.SET_SAMPLES:
      return this.putOne('num-samples', action.numSamples);

    case rosetteActionTypes.SET_RADIUS:
      return this.putOne('radius', action.radius);

    case rosetteActionTypes.SET_X:
      return this.putOne('center-x', action.x);

    case rosetteActionTypes.SET_Y:
      return this.putOne('center-y', action.y);

    case rosetteActionTypes.SET_GUIDE_RADIUS:
      return this.putOne('guide-radius', action.radius);

    case rosetteActionTypes.SET_CELL_SIZE:
      return this.putOne('cell-size', action.sizePercent);

    case rosetteActionTypes.SET_CONSTRUCTION_MODE:
      return this.putOne('constructionMode', action.constructionMode);
  }
}.bind(store));

export default store;
