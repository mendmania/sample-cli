/* eslintrc-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleData: '1323',
    name: 'mendim',
    apiData: {}
  },
  mutations: {
    changeName(state, name) {
      state.name = name;
    },
    GET_DATA(state, data){
      state.apiData = data;
    }
  },
  actions: {
    changeName({ commit }) {
      commit('changeName', 'mendmania');
    },

    async apiData({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          commit('GET_DATA', response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  },
});
