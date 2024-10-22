import { defineStore } from 'pinia';
import { getAll, store, update, show, destroy } from "./../services/typesService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useTypesStore = defineStore('types', {
  state: () => {
    return {
      loading: false,
      types: ref([]),
      typeById: ref({})
    };
  },
  getters: {
    getTypes(state) {
      return state.types
    },
    getTypeById(state) {
      return state.typeById
    }
  },
  actions: {

    async typesAll() {
      this.loading = true
      try {
        this.types.value = await getAll()
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

    async typeShow(id) {
      this.loading = true
      try {
        let response = await show(id)
        this.typeById.value = response.data
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

    async typesAdd(param) {
      this.loading = true
      try {
        let response = await store(param)
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
    },

    async typesUpdate(param, id) {
      this.loading = true
      try {
        let response = await update(param, id)
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
    },

    async typesDelete(id) {
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
