<template>
  <q-dialog v-model="ventaStore.moOrder" persistent>
    <q-card style="width: 900px; max-width: 80vw">
      <q-bar class="bg-primary text-white">
        Confirmar Orden
        <q-space />
        <q-btn dense flat icon="close" @click="ventaStore.moOrderManage(false)">
          <q-tooltip>Cerrar</q-tooltip>
        </q-btn>
      </q-bar>
      <q-form @submit="submitOrder">
        <q-card-section>
          <div class="q-pa-md">
            <q-markup-table class="col-6" separator dense>
              <thead>
                <tr>
                  <th class="text-left">Producto</th>
                  <th class="text-right">Cantidad</th>
                  <th class="text-right">Precio</th>
                  <th class="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(product, index) in productosStore.productosSelected"
                  :key="index"
                >
                  <td class="text-left">{{ product.nombre }}</td>
                  <td class="text-right">{{ product.cantidad }}</td>
                  <td class="text-right">{{ product.precio }}</td>
                  <td class="text-right">{{ product.total }} Bs</td>
                </tr>
                <tr>
                  <th colspan="4" class="text-right">
                    Total:
                    {{
                      productosStore.productosSelected.reduce(
                        (acumulador, item) =>
                          parseFloat(acumulador) + parseFloat(item.total),
                        0
                      )
                    }}
                    Bs
                  </th>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
        </q-card-section>
        <q-card-section class="row">
          <div class="col-6 q-pa-md">
            <q-input
              dense
              outlined
              v-model="reference"
              label="Número de referencia*"
            />
          </div>
          <div class="col-6 q-pa-md">
            <q-input
              dense
              outlined
              v-model="observacions"
              label="Observación"
            />
          </div>
          <div class="col q-pa-md">
            <q-uploader
              v-model="comprobant"
              label="Comprobante (imagen o PDF)"
              accept=".jpg, .jpeg, .png, .pdf"
              @input="onFileChange"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat no-caps label="Cancelar" color="primary" />
          <q-btn no-caps label="Confirmar" type="submit" color="primary" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useVentaStore } from "../../../stores/venta";
import tableProducts from "./tableProducts.vue";
import { useProductosStore } from "../../../stores/productos";
const productosStore = useProductosStore();
const ventaStore = useVentaStore();
const moProduct = ref(false);
const reference = ref(null);
const comprobant = ref(null);
const observacions = ref("");

const onFileChange = async (event) => {
  comprobant.value = event.target.files[0];
  console.log(comprobant.value);
  const formData = new FormData();
  formData.append("comprobant", comprobant.value);
  try {
    await ventaStore.uploadComprobant(formData);
  } catch (error) {}
};

const submitOrder = () => {
  let items = productosStore.productosSelected.map((el) => {
    return {
      idProducto: el.id,
      cantidad: el.cantidad,
      total: el.total,
    };
  });
  let ventaObjet = {
    idUserClient: 1,
    monto: productosStore.productosSelected.reduce(
      (acumulador, item) => parseFloat(acumulador) + parseFloat(item.total),
      0
    ),
    montoPagado: productosStore.productosSelected.reduce(
      (acumulador, item) => parseFloat(acumulador) + parseFloat(item.total),
      0
    ),
    observacion: observacions.value,
    pago: "Si",
    comprobante: formData,
    referencia: reference.value,
    items: items,
  };
  ventaStore.ventaAdd(ventaObjet);
};
</script>
