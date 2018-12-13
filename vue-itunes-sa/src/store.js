import Vue from "vue";
import Vuex from "vuex";
import VModal from "vue-js-modal";

Vue.use(Vuex);
Vue.use(VModal);

export default new Vuex.Store({
  state: {
    music: [],
    account: [],
    podcasts: []
  },
  mutations: {},
  actions: {}
});
