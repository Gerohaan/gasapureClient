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
            <a href="#" class="text-gray-600">Venta</a>
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->

      <div class="lg:flex justify-between items-center mb-6">
        <p class="text-2xl font-semibold mb-2 lg:mb-0">Listado de Ventas</p>
        <!-- <button
            class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow"
          >
            View Logs
          </button> -->
      </div>

      <div class="">
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
          <q-table
            :rows="ventaStore.getVenta"
            :loading="loading"
            :columns="columns"
            row-key="id"
          >
            <template v-slot:loading>
              <q-inner-loading showing color="primary" />
            </template>
            <template v-slot:body-cell-date_begin="props">
              <q-td :props="props">
                {{ formatDate(props.row.fecha) }}
              </q-td>
            </template>
            <template v-slot:body-cell-date_end="props">
              <q-td :props="props">
                <!-- {{ formatDate(props.row.hora) }} -->
                {{ props.row.hora }}
              </q-td>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  color="primary"
                  icon="visibility"
                  @click="detailsVenta(props.row)"
                  flat
                  round
                  dense
                />
                <!-- <q-btn
                  color="negative"
                  icon="delete"
                  @click="confirmDelete(props.row.id)"
                  flat
                  round
                  dense
                /> -->
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        dense
        color="blue"
        @click="handleRouter('addVenta')"
      />
    </q-page-sticky>
    <modal-details></modal-details>
  </div>
</template>
<script setup>
import "animate.css";
import { date, Loading, QSpinnerOval } from "quasar";
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useVentaStore } from "../../stores/venta";
import { useQuasar } from "quasar";
import modalDetails from "./component/modalDetails.vue";
const ventaStore = useVentaStore();
const router = useRouter();
const $q = useQuasar();
import { useManageLayout } from "../../stores/manageLayout";
const manageLayout = useManageLayout();
const loading = ref(false);
const columns = [
  /* {
    name: "id",
    required: true,
    label: "Id",
    align: "left",
    field: (row) => row.id,
    sortable: true,
  }, */
  {
    name: "name",
    required: true,
    label: "Razon social",
    align: "left",
    field: (row) => row.userClient.userName,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "fecha",
    required: true,
    label: "Fecha",
    align: "left",
    field: (row) => row.fecha,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "hora",
    required: true,
    label: "Hora",
    align: "left",
    field: (row) => row.hora,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "monto",
    required: true,
    label: "Monto",
    align: "left",
    field: (row) => row.monto + " Bs",
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "montoPagado",
    required: true,
    label: "Monto Pagado",
    align: "left",
    field: (row) => row.montoPagado + " Bs",
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "referencia",
    required: true,
    label: "Referencia",
    align: "left",
    field: (row) => row.referencia,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "email",
    required: true,
    label: "email",
    align: "left",
    field: (row) => row.userClient.email,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "status",
    required: true,
    label: "Status",
    align: "left",
    field: (row) => row.status,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "actions",
    required: true,
    label: "Acciones",
    align: "center",
    sortable: false,
  },
];
const rows = ref([]);
const listItemSale = ref([]);
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
const loadingShowHide = (param) => {
  if (param == "show") {
    Loading.show({
      spinner: QSpinnerOval,
      spinnerColor: "primary",
      spinnerSize: 120,
      backgroundColor: "cyan-1",
      messageColor: "black",
    });
  } else {
    Loading.hide();
  }
};
defineOptions({
  name: "ventaComponent",
});
onMounted(async () => {
  await ventaStore.ventaAll();
});
watchEffect(async () => {
  loading.value = ventaStore.loading;
  /* if (ventaStore.moDetails === false) {
    await ventaStore.ventaAll();
  } */
});
const detailsVenta = async (params) => {
  loadingShowHide("show");
  try {
    listItemSale.value = await ventaStore.detalleVentas(params);
    loadingShowHide("hide");
  } catch (error) {
    console.log(error);
    loadingShowHide("hide");
  }
};
const confirmDelete = async (id) => {
  $q.dialog({
    title: "Eliminar",
    message: "¿Confirma eliminar el registro?",
    cancel: true,
    persistent: true,
    ok: {
      push: true,
      color: "blue",
    },
    cancel: {
      push: true,
      color: "negative",
    },
  })
    .onOk(async () => {
      await deleteSucy(id);
    })
    .onCancel(() => {})
    .onDismiss(() => {});
};
const deleteSucy = async (id) => {
  try {
    await ventaStore.sucyDelete(id);
    await ventaStore.sucyAll();
    rows.value = await typesStore.getTypes?.value;
  } catch (error) {
    console.log(error);
  }
};
const handleRouter = (name, params = {}, query = {}) => {
  router
    .push({
      name: name,
    })
    .catch(() => {});
};
</script>
