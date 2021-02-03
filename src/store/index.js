/* eslintrc-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleData: '1323',
    name: 'emri',
    apiData: {}
  },
  mutations: {
    changeName(state, name) {
      state.name = name;
    },
    getData(state, data){
      state.apiData = data;
    }
  },
  actions: {
    changeName({ commit }) {
      commit('changeName', 'surname');
    },

    async apiData({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          commit('getData', response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  },
});
