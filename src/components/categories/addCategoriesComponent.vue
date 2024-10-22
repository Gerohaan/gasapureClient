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
            <a href="#" class="text-gray-600">Agregar categoría</a>
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->

      <div class="">
        <q-form @submit="sendCategory()">
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
                  label="Descripción"
                  color="blue"
                  v-model="description"
                  autogrow
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Campo Descripción es requerido',
                  ]"
                />
              </div>
              <div
                class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
              >
                <q-input
                  label="Estrellas mínimas"
                  color="blue"
                  v-model.number="stars_min"
                  type="number"
                  lazy-rules
                  :rules="[
                    (val) => !!val || 'Campo Estrellas mínimas es requerido',
                    (val) =>
                      parseInt(val) >= 1 ||
                      'Debe asignar al menos una estrella',
                  ]"
                />
              </div>
              <div
                class="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm"
              >
                <q-select
                  label="Estatus"
                  color="blue"
                  v-model="status"
                  :options="['Activo', 'Inactivo']"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Campo Estatus es requerido',
                  ]"
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
import { useCategoriesStore } from "../../stores/categories";
const categorieStore = useCategoriesStore();
const router = useRouter();
const loading = ref(false);
const name = ref("");
const description = ref("");
const stars_min = ref(1);
const status = ref("");
defineOptions({
  name: "addCategoriesComponent",
});
onMounted(async () => {});
watchEffect(async () => {
  loading.value = categorieStore.loading;
});
const handleRouter = (name, params = {}, query = {}) => {
  router
    .push({
      name: name,
    })
    .catch(() => {});
};
const sendCategory = async () => {
  const category = {
    name: name.value,
    description: description.value,
    stars_min: stars_min.value,
    status: status.value,
  };
  try {
    await categorieStore.categoriesAdd(category);
    handleRouter("categories");
  } catch (error) {
    console.log(error);
  }
};
</script>
