import * as types from './mutation-types';

const INITIAL_STATE = {
  lang: '',
  members: [],
  cities: [],
  provinces: [],
  categories: []
};

const getters = {
  getLang: state => state.lang || [],
};

const mutations = {
  [types.CLEAR_MOCKS_ALL](state) {
    return { ...INITIAL_STATE };
  }
};

const actions = {
};


export default {
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
