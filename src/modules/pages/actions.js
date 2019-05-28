import { createAction } from 'vizzuality-redux-tools';

import pages from './constants';

export const pageActions = pages.reduce(
  (acc, page) => ({ ...acc, [page.name]: createAction(`PAGES/${page.name}`) }),
  {}
);
export const setPage = createAction('PAGES/setPage');
