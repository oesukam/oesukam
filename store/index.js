import Vuex from 'vuex';
// import VuexPersist from 'vuex-persistedstate';
import mocks from './mocks';
import forms from './forms';

// const vuexLocalStorage = new VuexPersist({
//   // storage: window.localStorage, // or window.sessionStorage or localForage instance.
//   // Function that passes the state and returns the state with only the objects you want to store.
//   reducer: state => ({
//     user: state.user,
//     forms: state.forms,
//     items: state.items,
//     mocks: state.mocks,
//   }),
// })

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      locales: ['en', 'fr'],
      locale: 'en'
    }),
    mutations: {
      SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
      }
    },
    actions: {},
    getters: {
      getAuthModel: (state) => state.authModel
    },
    modules: {
      forms,
      mocks,
    },
    // plugins: [vuexLocalStorage],
    // strict: true,
  })
}

export default createStore
