import { defineStore } from 'pinia';
import { getAll, store, destroy } from "./../services/productosService"
import { Notify } from 'quasar'
import { ref } from 'vue';

export const useProductosStore = defineStore('productos', {
  state: () => {
    return {
      loading: false,
      productosList: [],
      productosPreSelected: [],
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
    priceChange(cantidad, id) {
      if (cantidad <= 0) {
        return
      }
      let precio = this.productosSelected.find(item => item.id == id).precio
      this.productosSelected.find(item => item.id == id).total = parseInt(cantidad * precio).toFixed(2);
    },
    addproductOrder() {
      if (this.productosSelected.length > 0) {
        const idsSelected = new Set(this.productosSelected.map(item => item.id));
        this.productosPreSelected.forEach(item => {
          if (!idsSelected.has(item.id)) {
            this.productosSelected.push(item);
          }
        });
      } else {
        this.productosSelected = this.productosPreSelected
      }
      //this.productosPreSelected = []

    },
    maganeProductosSelected(param) {
      this.productosPreSelected = JSON.parse(param)
      this.productosPreSelected.forEach(item => {
        item.cantidad = 1;
        item.total = item.precio;
      });
      this.addproductOrder()
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
