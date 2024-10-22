import { defineStore } from 'pinia';
import { getAll, store, destroy } from "./../services/ventaService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useVentaStore = defineStore('venta', {
  state: () => {
    return {
      loading: false,
      venta: ref([]),
      productosVenta: ref([])
    };
  },
  getters: {
    getVenta(state) {
      return state.venta
    },
    getProductosVenta(state) {
      return state.productosVenta
    },
  },
  actions: {

    async ventaAll() {
      this.loading = true
      try {
        this.venta.value = await getAll()
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

    async ventaAdd(param) {
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

    async ventaDelete(id) {
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
