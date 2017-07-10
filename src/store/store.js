import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    projects: {
      projectList: [
        { id: 1, name: 'IgorAmidzic-1' },
        { id: 2, name: 'IgorAmidzic-2' },
        { id: 3, name: 'IgorAmidzic-3' },
        { id: 4, name: 'IgorAmidzic-4' }
      ],
      activeProject: { id: 1, name: 'IgorAmidzic-1' }
    }
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    }
  },
  mutations: {
    increment: state => {
      state.counter++
    }
  }
})
