<template>
  <q-page class="flex flex-center">
    <div
      class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10"
    >
      <!-- <div class="text-center">
        <q-img
          src="/public/icons/logo_sucy4.png"
          spinner-color="white"
          style="height: 140px; max-width: 150px"
        />
      </div> -->
      <div class="w-full animate__animated animate__fadeIn" v-if="showLogin">
        <div class="text-center">
          <h1 class="text-3xl font-semibold text-gray-900">Iniciar sesión</h1>
          <p class="mt-2 text-gray-500">
            Inicie sesión a continuación para acceder a su cuenta
          </p>
        </div>
        <div class="mt-5">
          <q-form @submit="sendLogin" @reset="onReset">
            <div class="relative mt-6">
              <q-input
                v-model="email"
                lazy-rules
                :rules="[(val) => emailVal(val)]"
              />
              <label
                for="email"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Correo</label
              >
            </div>
            <div class="relative mt-6">
              <q-input
                v-model="password"
                type="password"
                :rules="[
                  (val) =>
                    (val && val.length >= 6) ||
                    'La contraseña debe tener al menos 6 caracteres',
                ]"
              />
              <label
                for="password"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Contraseña</label
              >
            </div>
            <div class="my-6">
              <button
                type="submit"
                class="animate__animated animate__bounce bg-primary w-full rounded-md px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Iniciar sesión
              </button>
            </div>
            <p class="text-center text-sm text-gray-500">
              ¿Aún no tienes una cuenta?
              <a
                @click="showLogin = !showLogin"
                class="font-semibold cursor-pointer text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >Regístrate.</a
              >.
            </p>
          </q-form>
        </div>
      </div>
      <div class="w-full animate__animated animate__fadeIn" v-if="!showLogin">
        <div class="text-center">
          <h1 class="text-3xl font-semibold text-gray-900">Registrarse</h1>
          <p class="mt-2 text-gray-500">
            Complete los siguientes campos de registro.
          </p>
        </div>
        <div class="mt-5">
          <q-form @submit="onRegister" @reset="onReset">
            <div class="relative mt-6">
              <q-input
                dense
                v-model="names"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Campo Nombres es requerido',
                ]"
              />
              <label
                for="email"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Nombres</label
              >
            </div>
            <div class="relative mt-6">
              <q-input
                dense
                v-model="LastNames"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Campo Apellidos es requerido',
                ]"
              />
              <label
                for="password"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Apellidos</label
              >
            </div>
            <div class="relative mt-6">
              <q-input
                dense
                v-model="email"
                lazy-rules
                :rules="[(val) => emailVal(val)]"
              />
              <label
                for="email"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Correo</label
              >
            </div>
            <div class="relative mt-6">
              <q-input
                dense
                v-model="password"
                type="password"
                :rules="[
                  (val) =>
                    (val && val.length >= 6) ||
                    'La contraseña debe tener al menos 6 caracteres',
                ]"
              />
              <label
                for="password"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Contraseña</label
              >
            </div>
            <!--  <div class="relative mt-6">
              <q-select
                dense
                :options="nacList"
                v-model="naci"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'Campo Nacionalidad es requerido',
                ]"
              />
              <label
                for="email"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Nacionalidad</label
              >
            </div>
            <div class="relative mt-6">
              <q-input
                dense
                v-model="cedula"
                :rules="[(val) => cedulaVal(val)]"
              />
              <label
                for="password"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Cédula</label
              >
            </div>
            <div class="relative mt-6">
              <q-input
                dense
                v-model.number="birthdate"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'Campo Fecha de nacimiento es requerido',
                ]"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="birthdate">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <label
                for="email"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Fecha de nacimiento</label
              >
            </div>
            <div class="relative mt-6">
              <label
                for="password"
                class="pb-4 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Número de teléfono</label
              >
            </div>
            <div class="relative mt-6">
              <div class="flex flex-wrap">
                <div class="w-full px-1 sm:w-1/2">
                  <div class="mb-5">
                    <q-select
                      label="Código"
                      dense
                      :options="codeOpeList"
                      v-model="codeOpe"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) ||
                          'Campo Código es requerido',
                      ]"
                    />
                  </div>
                </div>
                <div class="w-full px-1 sm:w-1/2">
                  <div class="mb-5">
                    <q-input
                      label="Número"
                      dense
                      mask="#######"
                      v-model="numeroPhone"
                      :rules="[
                        (val) =>
                          (val && val.length == 7) ||
                          'El campo Número debe tener 7 dígitos',
                      ]"
                    />
                  </div>
                </div>
              </div>
            </div> -->
            <div class="my-6">
              <button
                type="submit"
                class="animate__animated animate__bounce bg-primary w-full rounded-md px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Registro
              </button>
            </div>
            <p class="text-center text-sm text-gray-500">
              ¿Ya tienes una cuenta?
              <a
                @click="showLogin = !showLogin"
                class="font-semibold cursor-pointer text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >Iniciar sesión.</a
              >.
            </p>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import "animate.css";
import { date, Loading, QSpinnerOval } from "quasar";
import { useAuthStore } from "./../../stores/auth";
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { Notify } from "quasar";
const authStore = useAuthStore();
const router = useRouter();
defineOptions({
  name: "LoginPage",
});
watchEffect(() => {
  if (authStore.loading) {
    Loading.show({
      spinner: QSpinnerOval,
      spinnerColor: "primary",
      spinnerSize: 120,
      backgroundColor: "cyan-1",
      messageColor: "black",
    });
  }
  if (!authStore.loading) {
    Loading.hide();
  }
});
const handleRouter = (name, params = {}, query = {}) => {
  router
    .push({
      name: name,
    })
    .catch(() => {});
};
onMounted(() => {});
const sendLogin = async () => {
  const user = {
    email: email.value,
    password: password.value,
  };
  try {
    await authStore.loginUser(user);
    handleRouter("dashboard");
  } catch (error) {
    console.log(error);
  }
};
const onRegister = async () => {
  const user = {
    name: names.value + " " + LastNames.value,
    email: email.value,
    password: password.value,
    password_confirmation: password.value,
  };
  try {
    await authStore.registerUser(user);
    handleRouter("dashboard");
  } catch (error) {
    Notify.create({
      type: "negative",
      message: error.response.data.errors.email[0],
      position: "bottom-right",
    });
    console.log(error);
  }
};
const currentDate = ref(date.formatDate(new Date(), "YYYY/MM/DD"));
// Definición de variables reactivas
const showLogin = ref(true);
const email = ref("");
const password = ref("");
/////register
const names = ref("");
const LastNames = ref("");
const naci = ref("");
const cedula = ref();
const birthdate = ref(date.formatDate(new Date(), "YYYY/MM/DD"));
const nacList = ref(["Venezolano", "Extranjero"]);
const codeOpe = ref("");
const codeOpeList = ref(["0414", "0424", "0416", "0426", "0412"]);
const numeroPhone = ref();
const validaNumero = (val) => {
  const numVal = parseInt(val, 10);

  if (isNaN(numVal)) return "Ingrese un número válido";
  if (val.toString().length < 6)
    return "El número debe tener al menos 6 dígitos";
  return true;
};
const cedulaVal = (val) => {
  const numVal = parseInt(val, 10);
  if (val === "") return "El campo Cédula no puede estar vacío";
  if (isNaN(numVal)) return "Ingrese un número válido";
  if (val.toString().length < 6)
    return "El campo Cédula debe tener al menos 6 dígitos";
  return true;
};
// Funciones
const emailVal = (val) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(val) || "Ingrese un correo válido";
};
</script>
