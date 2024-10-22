<template>
  <div id="chart">
    <div id="chart">
      <apexchartComponent
        type="area"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchartComponent>
    </div>
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
    name: "",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  },
];
const chartOptions = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
  },
};
defineOptions({
  name: "monthlyOpeningsComponent",
});
</script>
