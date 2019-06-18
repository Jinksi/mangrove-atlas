import { createAction } from 'vizzuality-redux-tools';

export const fetchRequested = createAction('LAYERS/FETCH_REQUESTED');
export const fetchSucceeded = createAction('LAYERS/FETCH_SUCCEDED');
export const fetchFailed = createAction('LAYERS/FETCH_FAILED');
export const fetchLayers = createAction('LAYERS/FETCH_ALL');
