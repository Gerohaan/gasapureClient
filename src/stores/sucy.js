import { defineStore } from 'pinia';
import { getAll, store, destroy } from "./../services/sucyService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useSucyStore = defineStore('sucy', {
  state: () => {
    return {
      loading: false,
      sucy: ref([])
    };
  },
  getters: {
    getSucy(state) {
      return state.sucy
    }
  },
  actions: {

    async sucyAll() {
      this.loading = true
      try {
        this.sucy.value = await getAll()
        this.loading = false
      } catch (error) {
        this.loading = false
        Notify.create({
          type: 'negative',
          message: error.response.data.message,
          position: 'bottom-right'
        })
        console.log(error);

        throw error
      }
    },

    async sucyAdd(param) {
      this.loading = true
      try {
        let response = await store(param)
        this.loading = false
        Notify.create({
          type: 'positive',
          message: response.message,
          position: 'bottom-right'
        })
        return response
      } catch (error) {
        this.loading = false
        Notify.create({
          type: 'negative',
          message: error.response.data.message,
          position: 'bottom-right'
        })
        console.log(error);

        throw error
      }
    },

    async sucyDelete(id) {
      this.loading = true
      try {
        let response = await destroy(id)
        this.loading = false
        Notify.create({
          type: 'positive',
          message: response.message,
          position: 'bottom-right'
        })
      } catch (error) {
        this.loading = false
        Notify.create({
          type: 'negative',
          message: error.response.data.message,
          position: 'bottom-right'
        })
        console.log(error);

        throw error
      }
    }
  },
});
