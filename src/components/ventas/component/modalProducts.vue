<template>
  <q-dialog v-model="ventaStore.moProducts" persistent>
    <q-card style="width: 900px; max-width: 80vw">
      <q-bar class="bg-primary text-white">
        Selección de productos
        <!-- <q-icon name="network_wifi" />
        <q-icon name="network_cell" />
        <q-icon name="battery_full" />
        <div>9:34</div> -->

        <q-space />

        <q-btn
          dense
          flat
          icon="close"
          @click="ventaStore.moProductsManage(false)"
        >
          <q-tooltip>Cerrar</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <table-products></table-products>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          no-caps
          label="Cerrar"
          color="primary"
          @click="ventaStore.moProductsManage(false)"
        />
        <q-btn
          no-caps
          label="Aceptar"
          color="primary"
          :disabled="productosStore.getproductosSelected.length == 0"
          @click="ventaStore.moProductsManage(false)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useVentaStore } from "../../../stores/venta";
import tableProducts from "./tableProducts.vue";
import { useProductosStore } from "../../../stores/productos";
const productosStore = useProductosStore();

const moProduct = ref(false);
const ventaStore = useVentaStore();
</script>
