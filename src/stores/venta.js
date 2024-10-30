import { defineStore } from 'pinia';
import { getAll, store, destroy, upload } from "./../services/ventaService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useVentaStore = defineStore('venta', {
  state: () => {
    return {
      loading: false,
      loadingUplo: false,
      venta: ref([]),
      productosVenta: ref([]),
      moProducts: false,
      moOrder: false,
    };
  },
  getters: {
    getVenta(state) {
      return state.venta
    },
    getProductosVenta(state) {
      return state.productosVenta
    },
    getMoProducts(state) {
      return state.moProducts
    },
    getMoOrder(state) {
      return state.moOrder
    }
  },
  actions: {

    moProductsManage(param) {
      this.moProducts = param
    },

    moOrderManage(param) {
      this.moOrder = param
    },
    async uploadComprobant(param) {
      this.loadingUplo = true
      try {
        let response = await upload(param)
        this.loadingUplo = false
        Notify.create({
          type: 'positive',
          message: response.message,
          position: 'bottom-right'
        })
        return response
      } catch (error) {

        this.loadingUplo = false
        Notify.create({
          type: 'negative',
          message: error.response.data.message,
          position: 'bottom-right'
        })
        console.log(error);

        throw error
      }
    },
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
          message: "Orden creada, espere respuesta del administrador del sistema.",
          position: 'bottom-right'
        })
        return response
      } catch (error) {

        this.loading = false
        error.response.data.errors.map(item => {
          Notify.create({
            type: 'negative',
            message: item.msg,
            position: 'bottom-right'
          })
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
