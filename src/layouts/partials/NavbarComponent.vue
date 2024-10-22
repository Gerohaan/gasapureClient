<template>
  <div class="sticky top-0 z-40">
    <div class="w-full h-20 px-6 bg-primary flex items-center justify-between">
      <!-- left navbar -->
      <div class="flex">
        <!-- mobile hamburger -->
        <div class="inline-block lg:hidden flex items-center mr-4">
          <button
            class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
            @click="manageLayout.toggleSidebar()"
          >
            <svg
              class="h-5 w-5"
              v-bind:style="{ fill: 'white' }"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <!-- search bar -->
        <div class="relative text-gray-600">
          <!-- <input
            type="search"
            name="serch"
            placeholder="Buscar..."
            class="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none"
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg
              class="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button> -->
          <p class="text-h5 text-bold text-white">GasApure</p>
        </div>
      </div>

      <!-- right navbar -->
      <div class="flex items-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          class="fill-current mr-3 hover:text-blue-500"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
          />
        </svg>
        <img
          src="data:image/png;base64,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"
          class="w-12 h-12 rounded-full shadow-lg"
          @click="dropDownOpen = !dropDownOpen"
        />
      </div>
    </div>

    <!-- dropdown menu -->
    <div
      class="absolute bg-gray-100 border border-t-0 shadow-xl text-gray-700 rounded-b-lg w-48 right-0 mr-6"
      :class="dropDownOpen ? '' : 'hidden'"
    >
      <a href="#" class="block px-4 py-2 hover:bg-gray-200">Cuenta</a>
      <a href="#" class="block px-4 py-2 hover:bg-gray-200">Configuración</a>
      <a
        @click="logout()"
        class="cursor-pointer block px-4 py-2 hover:bg-gray-200"
        >Salir</a
      >
    </div>
    <!-- dropdown menu end -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useManageLayout } from "./../../stores/manageLayout";
import { useAuthStore } from "./../../stores/auth";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

defineOptions({
  name: "NavbarComponent",
});
const manageLayout = useManageLayout();
const authStore = useAuthStore();
const router = useRouter();
const dropDownOpen = ref(false);
const $q = useQuasar();
const handleRouter = (name, params = {}, query = {}) => {
  router
    .push({
      name: name,
    })
    .catch(() => {});
};
const logout = () => {
  $q.dialog({
    title: "Salir",
    message: "¿Confirma salir de la aplicación?",
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
      return;
      try {
        await authStore.logoutUser();
        handleRouter("login");
      } catch (error) {
        console.log(error);
      }
    })
    .onCancel(() => {})
    .onDismiss(() => {});
};
</script>
