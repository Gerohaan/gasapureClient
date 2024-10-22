<template>
  <q-page class="flex flex-center">
    <div class="w-full animate__animated animate__fadeIn">
      <types-component></types-component>
    </div>
  </q-page>
</template>

<script setup>
import "animate.css";
import { date } from "quasar";
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import typesComponent from "../../components/types/typesComponent.vue";
const authStore = useAuthStore();
const router = useRouter();
defineOptions({
  name: "indexTypes",
});
const userInfo = ref({});
watchEffect(() => {
  userInfo.value = authStore.getUser.value;
});
const handleRouter = (name, params = {}, query = {}) => {
  router
    .push({
      name: name,
    })
    .catch(() => {});
};
onMounted(() => {
  userInfo.value = authStore.getUser.value;
  console.log();
});
</script>
