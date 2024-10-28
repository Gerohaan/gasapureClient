<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="p-6 bg-gray-100 mb-20">
      <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center text-blue-500">
            <a href="#" class="text-gray-700">Administración</a>
            <svg
              class="fill-current w-3 h-3 mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              />
            </svg>
          </li>
          <li class="flex items-center">
            <a href="#" class="text-gray-600">Crear Orden</a>
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->

      <div class="">
        <q-form @submit="sendVenta()">
          <div class="q-pa-md">
            <div class="row">
              <div class="col-12">
                <q-btn
                  round
                  color="primary"
                  @click="ventaStore.moProductsManage(true)"
                  icon="shopping_cart"
                >
                  <q-tooltip>Productos</q-tooltip>
                </q-btn>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <productos-add-venta></productos-add-venta>
              </div>
            </div>
            <div class="row">
              <div class="col q-pa-sm text-right">
                <q-btn
                  :disable="productosStore.getproductosSelected.length == 0"
                  outline
                  color="blue"
                  style="border-radius: 8px"
                  class=""
                  @click="ventaStore.moOrderManage(true)"
                  no-caps
                  label="Solicitar"
                />
              </div>
            </div>
          </div>
        </q-form>
      </div>
      <modal-products v-if="ventaStore.moProducts"></modal-products>
      <modal-create-order v-if="ventaStore.getMoOrder"></modal-create-order>
    </div>
  </div>
</template>
<script setup>
import "animate.css";
import { date } from "quasar";
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useTypesStore } from "../../stores/types";
import { useVentaStore } from "../../stores/venta";
import { useProductosStore } from "../../stores/productos";
import productosAddVenta from "../ventas/component/productosAddVenta.vue";
import modalProducts from "./component/modalProducts.vue";
import modalCreateOrder from "./component/modalCreateOrder.vue";
const typesStore = useTypesStore();
const ventaStore = useVentaStore();
const productosStore = useProductosStore();
const router = useRouter();
const loading = ref(false);
const loadingType = ref(false);
const name = ref("");
const date_begin = ref("");
const date_end = ref("");
const participants = ref(1);
const monto_cuota = ref(0);
const type_id = ref(null);
const status = ref("");
const statusOptions = ["Activo", "Inactivo"];
const user_id = ref(null);
const typesList = ref([]);
const usersList = [
  {
    value: 3,
    label: "pedro delgado",
  },
  {
    value: 4,
    label: "Gerohaan Torrealba",
  },
  {
    value: 5,
    label: "gerohaan torrealba",
  },
];
defineOptions({
  name: "addVentaComponent",
});
onMounted(async () => {
  await typesStore.typesAll();
});
watchEffect(async () => {
  loadingType.value = typesStore.loading;
  loading.value = ventaStore.loading;
  if (typesStore.getTypes.value) {
    typesList.value = await typesStore.getTypes.value.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
  }
});
const handleRouter = (name, params = {}, query = {}) => {
  router
    .push({
      name: name,
    })
    .catch(() => {});
};
const sendVenta = async () => {
  const sucy = {
    name: name.value,
    participants: participants.value,
    date_begin: date_begin.value,
    date_end: date_end.value,
    monto_cuota: monto_cuota.value,
    type_id: type_id.value.value,
    share: participants.value,
    user_id: user_id.value.value,
    status: status.value,
  };

  try {
    await ventaStore.sucyAdd(sucy);
    handleRouter("sucy");
  } catch (error) {
    console.log(error);
  }
};
</script>
