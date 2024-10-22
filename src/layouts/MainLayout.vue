<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> GasApure </q-toolbar-title>

        <div><!-- Sucy v{{ $q.version }} --></div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

// Definición de variables reactivas
const message = ref("Hola, mundo!");

// Funciones
function sayHello() {
  console.log(message.value);
}
</script>
