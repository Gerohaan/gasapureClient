<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-header>
      <Navbar></Navbar>
    </q-header>

    <q-drawer v-model="manageLayout.sideBarOpen" show-if-above>
      <Sidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
      <Footer />
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: "MainLayoutAuth",
});
import { ref } from "vue";
import { useManageLayout } from "./../stores/manageLayout";
import Sidebar from "./partials/SidebarComponent.vue";
import Navbar from "./partials/NavbarComponent.vue";
import Footer from "./partials/FooterComponent.vue";
const leftDrawerOpen = ref(false);
const manageLayout = useManageLayout();
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
