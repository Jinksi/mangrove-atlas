import {
  fetchRequested,
  fetchSucceeded,
  fetchFailed,
  collapseAll,
  expandAll,
  toggleCollapse,
  toggleActive,
  toggleActiveByLayerId
} from './actions';

export default {
  [fetchRequested]: state => ({
    ...state,
    isLoading: true,
    error: null
  }),
  [fetchSucceeded]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    list: payload
  }),
  [fetchFailed]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload
  }),
  [collapseAll]: state => ({
    ...state,
    isCollapsed: true,
    list: state.list.map(item => ({ ...item, isCollapsed: true }))
  }),
  [expandAll]: state => ({
    ...state,
    isCollapsed: false,
    list: state.list.map(item => ({ ...item, isCollapsed: false }))
  }),
  [toggleCollapse]: (state, { payload }) => {
    const list = state.list.map((item) => {
      if (item.id !== payload.id) return item;
      return ({ ...item, isCollapsed: !item.isCollapsed });
    });
    const noCollapsed = list.find(item => item.isCollapsed === false);

    return {
      ...state,
      list,
      isCollapsed: !noCollapsed
    };
  },
  [toggleActive]: (state, { payload }) => ({
    ...state,
    list: state.list.map((item) => {
      if (item.id !== payload.id) return item;
      return ({ ...item, isActive: payload.isActive });
    })
  }),
  [toggleActiveByLayerId]: (state, { payload }) => ({
    ...state,
    list: state.list.map((item) => {
      if (item.layerId !== payload.layerId) return item;
      return ({ ...item, isActive: payload.isActive });
    })
  })
};
