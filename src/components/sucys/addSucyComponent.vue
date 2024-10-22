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
            <a href="#" class="text-gray-600">Agregar Sucy</a>
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->

      <div class="">
        <q-form @submit="sendSucy()">
          <div class="q-pa-md example-row-equal-width">
            <div class="row">
              <div
                class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
              >
                <q-input
                  label="Nombre"
                  color="blue"
                  v-model="name"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Campo Nombre es requerido',
                  ]"
                />
              </div>
              <div
                class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
              >
                <q-input
                  label="Participantes"
                  color="blue"
                  v-model.number="participants"
                  type="number"
                  lazy-rules
                  :rules="[
                    (val) => !!val || 'Campo Participantes es requerido',
                    (val) =>
                      parseInt(val) >= 1 ||
                      'Debe asignar al menos un participante',
                  ]"
                />
              </div>
              <div
                class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
              >
                <q-input
                  label="Fecha de inicio"
                  color="blue"
                  v-model="date_begin"
                  lazy-rules
                  mask="date"
                  :rules="[
                    'date',
                    (val) => !!val || 'Campo Fecha de inicio es requerido',
                  ]"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date_begin">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="cerrar"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div
                class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
              >
                <q-input
                  label="Fecha de culminación"
                  color="blue"
                  v-model="date_end"
                  lazy-rules
                  :rules="[
                    'date',
                    (val) => !!val || 'Campo Fecha de inicio es requerido',
                  ]"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date_end">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="cerrar"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div
                class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
              >
                <q-input
                  label="Monto cuota ($)"
                  color="blue"
                  v-model.number="monto_cuota"
                  type="number"
                  lazy-rules
                  :rules="[
                    (val) => !!val || 'Campo Monto cuota es requerido',
                    (val) => parseInt(val) >= 1 || 'Monto incorrecto',
                  ]"
                />
              </div>
              <div
                class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
              >
                <q-select
                  label="Tipo"
                  color="blue"
                  v-model="type_id"
                  :options="typesList"
                  :loading="loadingType"
                  lazy-rules
                  :rules="[(val) => !!val || 'Campo Tipo es requerido']"
                />
              </div>
              <div
                class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
              >
                <q-select
                  label="Usuario"
                  color="blue"
                  v-model="user_id"
                  :options="usersList"
                  lazy-rules
                  :rules="[(val) => !!val || 'Campo Usuario es requerido']"
                />
              </div>
              <div
                class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
              >
                <q-select
                  label="Estatus"
                  color="blue"
                  v-model="status"
                  :options="statusOptions"
                  lazy-rules
                  :rules="[(val) => !!val || 'Campo Estatus es requerido']"
                />
              </div>
            </div>
            <div class="row">
              <div class="col q-pa-sm text-right">
                <q-btn
                  :loading="loading"
                  outline
                  type="submit"
                  color="blue"
                  style="border-radius: 8px"
                  class=""
                  no-caps
                  label="Registrar"
                />
              </div>
            </div>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import "animate.css";
import { date } from "quasar";
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useTypesStore } from "../../stores/types";
import { useSucyStore } from "../../stores/sucy";
const typesStore = useTypesStore();
const sucyStore = useSucyStore();
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
  name: "addSucyComponent",
});
onMounted(async () => {
  await typesStore.typesAll();
});
watchEffect(async () => {
  loadingType.value = typesStore.loading;
  loading.value = sucyStore.loading;
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
const sendSucy = async () => {
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
    await sucyStore.sucyAdd(sucy);
    handleRouter("sucy");
  } catch (error) {
    console.log(error);
  }
};
</script>
