<template>
  <div id="chart">
    <apexchartComponent
      type="bar"
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
const series = [
  {
    data: [100, 80],
  },
];
const chartOptions = {
  chart: {
    type: "bar",
    height: 150,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: "end",
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Activos", "Inactivos"],
  },
};
defineOptions({
  name: "categoriesGraficComponent",
});
</script>
