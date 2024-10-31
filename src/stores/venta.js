import { defineStore } from 'pinia';
import { getAll, store, destroy, upload, update, getAllDetails } from "./../services/ventaService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useVentaStore = defineStore('venta', {
  state: () => {
    return {
      loading: false,
      loadingUplo: false,
      venta: [],
      productosVenta: ref([]),
      moProducts: false,
      moOrder: false,
      moDetails: false,
      ventaDetalle: [],
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
    },
    getMoDetails(state) {
      return state.moDetails
    },
    getVentaDetalle(state) {
      return state.ventaDetalle.length == 0 ? [] : state.ventaDetalle
    }
  },
  actions: {

    moProductsManage(param) {
      this.moProducts = param
    },

    moOrderManage(param) {
      this.moOrder = param
    },

    moOrderDetails(param) {
      this.moDetails = param
    },

    async aprobarOrder(param) {
      this.loading = true
      try {
        let response = await update(param)
        this.loading = false
        Notify.create({
          type: 'positive',
          message: "Compra confirmada",
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

    async detalleVentas(param) {
      this.loading = true
      try {
        let response = await getAllDetails(param.id)
        this.ventaDetalle = { productos: response, venta: param }

        this.loading = false
        this.moDetails = true
        return this.ventaDetalle
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
        this.venta = await getAll()
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
