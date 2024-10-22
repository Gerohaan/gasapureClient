<template>
  <div id="chart">
    <apexchartComponent
      type="donut"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchartComponent>
  </div>
</template>
<script setup>
import "animate.css";
import { date } from "quasar";
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../../stores/auth";
const authStore = useAuthStore();
const router = useRouter();
import { useManageLayout } from "../../../stores/manageLayout";
const manageLayout = useManageLayout();
const series = [44, 55, 41, 17, 15];
const chartOptions = {
  chart: {
    type: "donut",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
defineOptions({
  name: "categoriesGraficComponent",
});
</script>
