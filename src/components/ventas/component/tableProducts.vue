<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Productos"
      :rows="rows"
      :columns="columns"
      row-key="nombre"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
      :loading="loadingProducts"
    >
      <template v-slot:body-cell-imagen="props">
        <q-td :props="props">
          <q-img
            v-if="props.row.imagen === 'img1'"
            src="/public/productos/gas10.jpg"
            alt="Producto imagen"
            style="width: 50px; height: 50px"
          />
          <q-img
            v-if="props.row.imagen === 'img2'"
            src="/public/productos/gas18.avif"
            alt="Producto imagen"
            style="width: 50px; height: 50px"
          />
          <q-img
            v-if="props.row.imagen === 'img3'"
            src="/public/productos/gas27.webp"
            alt="Producto imagen"
            style="width: 50px; height: 50px"
          />
          <q-img
            v-if="props.row.imagen === 'img4'"
            src="/public/productos/gas43.jpg"
            alt="Producto imagen"
            style="width: 50px; height: 50px"
          />
        </q-td>
      </template>
    </q-table>

    <!-- <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div> -->
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted, watchEffect } from "vue";
import { useProductosStore } from "../../../stores/productos";
const productosStore = useProductosStore();

const columns = [
  {
    name: "nombre",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "imagen",
    align: "center",
    label: "Imagen",
    field: (row) => row.imagen,
    sortable: true,
  },
  {
    name: "presentacion",
    label: "Presentación",
    field: (row) => row.presentacion,
    sortable: true,
  },
  {
    name: "unidadDeMedida",
    label: "Unidad de medida",
    field: (row) => row.unidadDeMedida,
    sortable: true,
  },
  {
    name: "precio",
    label: "Precio",
    field: (row) => row.precio + " Bs",
    sortable: true,
  },
  {
    name: "status",
    label: "Status",
    field: (row) => row.status,
    sortable: true,
  },
];

const rows = ref([]);
const loadingProducts = ref(false);
const $q = useQuasar();

const selected = ref([]);
const lastIndex = ref(null);
const tableRef = ref(null);
const getSelectedString = () => {
  return selected.value.length === 0
    ? ""
    : `${selected.value.length} registro${
        selected.value.length > 1 ? "s" : ""
      } seleccionado de ${rows.value.length}`;
};

onMounted(async () => {
  await productosStore.productosAll();
});

watchEffect(async () => {
  loadingProducts.value = productosStore.loading;
  rows.value = productosStore.getproductos;
  selected.value;
  productosStore.maganeProductosSelected(JSON.stringify(selected.value));
});
</script>
