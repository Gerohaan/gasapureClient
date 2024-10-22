import { defineStore } from 'pinia';
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useManageLayout = defineStore('manageLayout', {
  state: () => {
    return {
      sideBarOpen: true
    };
  },
  getters: {
    getSideBar(state) {
      return state.sideBarOpen
    }
  },
  actions: {

    toggleSidebar() {

      this.sideBarOpen = !this.sideBarOpen

    },

  },
});
