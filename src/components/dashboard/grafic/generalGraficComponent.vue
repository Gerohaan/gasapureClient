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
import { useAuthStore } from "./../../../stores/auth";
const authStore = useAuthStore();
const router = useRouter();
import { useManageLayout } from "../../../stores/manageLayout";
const manageLayout = useManageLayout();
const series = [
  {
    name: "",
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65],
  },
];
const chartOptions = {
  annotations: {
    points: [
      {
        x: "",
        seriesIndex: 0,
        label: {
          borderColor: "#775DD0",
          offsetY: 0,
          style: {
            color: "#fff",
            background: "#775DD0",
          },
          text: "",
        },
      },
    ],
  },
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  grid: {
    row: {
      colors: ["#fff", "#f2f2f2"],
    },
  },
  xaxis: {
    labels: {
      rotate: -45,
    },
    categories: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    tickPlacement: "on",
  },
  yaxis: {
    title: {
      text: "",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100],
    },
  },
};
defineOptions({
  name: "generalGraficComponent",
});
</script>
