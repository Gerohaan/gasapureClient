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
            <a href="#" class="text-gray-600">Sucy</a>
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->

      <div class="lg:flex justify-between items-center mb-6">
        <p class="text-2xl font-semibold mb-2 lg:mb-0">Listado de Sucys</p>
        <!-- <button
            class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow"
          >
            View Logs
          </button> -->
      </div>

      <div class="">
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
          <q-table
            :rows="rows"
            :loading="loading"
            :columns="columns"
            row-key="id"
          >
            <template v-slot:loading>
              <q-inner-loading showing color="primary" />
            </template>
            <template v-slot:body-cell-date_begin="props">
              <q-td :props="props">
                {{ formatDate(props.row.date_begin) }}
              </q-td>
            </template>
            <template v-slot:body-cell-date_end="props">
              <q-td :props="props">
                {{ formatDate(props.row.date_end) }}
              </q-td>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  color="primary"
                  icon="visibility"
                  @click="detailsSucy(props.row.id)"
                  flat
                  round
                  dense
                />
                <q-btn
                  color="negative"
                  icon="delete"
                  @click="confirmDelete(props.row.id)"
                  flat
                  round
                  dense
                />
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
        @click="handleRouter('addSucy')"
      />
    </q-page-sticky>
  </div>
</template>
<script setup>
import "animate.css";
import { date } from "quasar";
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useSucyStore } from "../../stores/sucy";
import { useQuasar } from "quasar";
const sucyStore = useSucyStore();
const router = useRouter();
const $q = useQuasar();
import { useManageLayout } from "../../stores/manageLayout";
const manageLayout = useManageLayout();
const loading = ref(false);
const columns = [
  {
    name: "id",
    required: true,
    label: "Id",
    align: "left",
    field: (row) => row.id,
    sortable: true,
  },
  {
    name: "name",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "date_begin",
    required: true,
    label: "Fecha de inicio",
    align: "left",
    field: (row) => row.date_begin,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "date_end",
    required: true,
    label: "Fecha de culminación",
    align: "left",
    field: (row) => row.date_end,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "participants",
    required: true,
    label: "Participantes",
    align: "left",
    field: (row) => row.participants,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "monto_cuota",
    required: true,
    label: "Monto cuota",
    align: "left",
    field: (row) => row.monto_cuota,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "type_id",
    required: true,
    label: "Tipo",
    align: "left",
    field: (row) => row.type_id,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "user_id",
    required: true,
    label: "Usuario",
    align: "left",
    field: (row) => row.user_id,
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
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
defineOptions({
  name: "sucyComponent",
});
onMounted(async () => {
  await sucyStore.sucyAll();
  rows.value = await sucyStore.getSucy?.value;
});
watchEffect(async () => {
  loading.value = sucyStore.loading;
});
const detailsSucy = async (id) => {};
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
    await sucyStore.sucyDelete(id);
    await sucyStore.sucyAll();
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
