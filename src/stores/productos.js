import { defineStore } from 'pinia';
import { getAll, store, destroy } from "./../services/productosService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useProductosStore = defineStore('productos', {
  state: () => {
    return {
      loading: false,
      productosList: [],
      productosSelected: []
    };
  },
  getters: {
    getproductos(state) {
      return state.productosList
    },
    getproductosSelected(state) {
      return state.productosSelected
    },
  },
  actions: {

    maganeProductosSelected(param) {
      this.productosSelected = JSON.parse(param)
    },

    async productosAll() {
      this.loading = true
      try {
        this.productosList = await getAll()
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

    async productosAdd(param) {
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

    async productosDelete(id) {
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
