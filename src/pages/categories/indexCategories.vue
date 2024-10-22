<template>
  <q-page class="flex flex-center">
    <div class="w-full animate__animated animate__fadeIn">
      <categories-component></categories-component>
    </div>
  </q-page>
</template>

<script setup>
import "animate.css";
import { date } from "quasar";
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import categoriesComponent from "../../components/categories/categoriesComponent.vue";
const authStore = useAuthStore();
const router = useRouter();
defineOptions({
  name: "indexCategories",
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
