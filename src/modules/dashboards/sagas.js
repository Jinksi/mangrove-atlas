import { takeLatest, put, call } from 'redux-saga/effects';
import DatasetService from 'services/dataset-service';
import { fetchRequested, fetchSucceeded, fetchFailed } from './actions';

const service = new DatasetService({ entityName: 'dashboards' });

function* getDashboards() {
  yield put(fetchRequested());
  try {
    const dashboards = yield call(service.fetch, []);
    yield put(fetchSucceeded(dashboards));
  } catch (err) {
    yield put(fetchFailed(err));
  }
}

export default function* dashboardsSagas() {
  yield takeLatest('DASHBOARDS/GET_ALL', getDashboards);
}
