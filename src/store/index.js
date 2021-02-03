import { createStore } from "vuex";
import { AdModule } from "./modules/AdModule";

export default createStore({
  state: {},
  mutations: {},
  actions: {},

  modules: {
    User: AdModule
  }
});
