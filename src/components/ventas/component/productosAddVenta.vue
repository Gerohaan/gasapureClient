<template>
  <div class="rounded-t mb-0 px-0 border-0">
    <div class="flex flex-wrap items-center px-4 py-2">
      <div class="relative w-full max-w-full flex-grow flex-1">
        <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">
          Productos
        </h3>
      </div>
    </div>
    <div class="block w-full">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Nombre
            </th>
            <th
              class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Imagen
            </th>
            <th
              class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Cantidad
            </th>
            <th
              class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              Total
            </th>
            <th
              class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="productosStore.getproductosSelected.length == 0">
            <th class="text-gray-700 dark:text-gray-100 p-4" colspan="5">
              <p>Seleccione uno o varios productos</p>
            </th>
          </tr>
          <tr
            v-else
            class="text-gray-700 dark:text-gray-100"
            v-for="(product, index) in productosStore.productosPreSelected"
            :key="index"
          >
            <th
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              {{ product.nombre }}
            </th>
            <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <q-img
                v-if="product.imagen === 'img1'"
                src="/public/productos/gas10.jpg"
                alt="Producto imagen"
                style="width: 50px; height: 50px"
              />
              <q-img
                v-if="product.imagen === 'img2'"
                src="/public/productos/gas18.avif"
                alt="Producto imagen"
                style="width: 50px; height: 50px"
              />
              <q-img
                v-if="product.imagen === 'img3'"
                src="/public/productos/gas27.webp"
                alt="Producto imagen"
                style="width: 50px; height: 50px"
              />
              <q-img
                v-if="product.imagen === 'img4'"
                src="/public/productos/gas43.jpg"
                alt="Producto imagen"
                style="width: 50px; height: 50px"
              />
            </td>
            <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <q-input
                v-model="product.cantidad"
                :key="product.id"
                @change="chekQuantity(product.cantidad, product.id)"
                dense
                type="number"
                rounded
                outlined
              ></q-input>
            </td>
            <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex items-center">
                <span class="mr-2">{{ product.total }} Bs.</span>
              </div>
            </td>
            <td
              class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex items-center">
                <span class="mr-2">
                  <q-btn
                    dense
                    icon="delete"
                    flat
                    round
                    color="red"
                    class=""
                    no-caps
                    @click="deleteItem(product.id)"
                  />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watchEffect, watch } from "vue";
import { useProductosStore } from "../../../stores/productos";
import TableProducts from "./tableProducts.vue";
const productosStore = useProductosStore();

const cantidad = ref(1);

const chekQuantity = (quantity, id) => {
  if (quantity <= 0) {
    productosStore.productosSelected.find((item) => item.id == id).cantidad = 1;
    return;
  }
  productosStore.priceChange(quantity, id);
};

const deleteItem = (id) => {
  let filteritems = productosStore.productosSelected.filter(
    (item) => item.id != id
  );
  productosStore.productosSelected = filteritems;
};

watchEffect(async () => {});
defineOptions({
  name: "productosAddVenta",
});
onMounted(async () => {});
</script>
