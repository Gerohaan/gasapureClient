<template>
  <q-dialog v-model="ventaStore.getMoDetails" persistent>
    <q-card style="width: 900px; max-width: 80vw">
      <q-bar class="bg-primary text-white">
        Detalle de la venta
        <q-space />
        <q-btn
          dense
          flat
          icon="close"
          @click="ventaStore.moOrderDetails(false)"
        >
          <q-tooltip>Cerrar</q-tooltip>
        </q-btn>
      </q-bar>
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
                v-for="(product, index) in ventaStore.getVentaDetalle.productos"
                :key="index"
              >
                <td class="text-left">{{ product.producto.nombre }}</td>
                <td class="text-right">{{ product.cantidad }}</td>
                <td class="text-right">{{ product.producto.precio }}</td>
                <td class="text-right">{{ product.total }} Bs</td>
              </tr>
              <tr>
                <th colspan="4" class="text-right">
                  Total:
                  {{
                    ventaStore.getVentaDetalle.productos.reduce(
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
          <q-field outlined label="Referencia" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ ventaStore.getVentaDetalle.venta.referencia }}
              </div>
            </template>
          </q-field>
        </div>
        <div class="col-6 q-pa-md">
          <q-field outlined label="Observación" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                {{ ventaStore.getVentaDetalle.venta.observacion }}
              </div>
            </template>
          </q-field>
        </div>
        <div class="col q-pa-md">
          <div class="col-6">
            <p
              v-if="
                ventaStore.getVentaDetalle.venta.comprobante.split('.').pop() ==
                'pdf'
              "
            >
              <a
                :href="`${baseImage}/${ventaStore.getVentaDetalle.venta.comprobante}`"
                target="_blank"
                class="text-blue"
                >Ver Comprobante en PDF</a
              >
            </p>
            <p v-else>
              <q-img
                crossorigin="anonymous"
                :src="`${baseImage}/${ventaStore.getVentaDetalle.venta.comprobante}`"
              >
                <div class="absolute-bottom-right text-subtitle2">
                  {{ ventaStore.getVentaDetalle.venta.referencia }}
                </div>
              </q-img>
            </p>
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          :disable="ventaStore.getVentaDetalle.venta.status === 'pagada'"
          no-caps
          :label="
            ventaStore.getVentaDetalle.venta.status === 'pagada'
              ? 'Aprobada'
              : 'Aprobar'
          "
          color="primary"
          @click="aprobarO(ventaStore.getVentaDetalle.venta)"
          :loading="ventaStore.loading"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useVentaStore } from "../../../stores/venta";
import tableProducts from "./tableProducts.vue";
import { useProductosStore } from "../../../stores/productos";
import { baseURL } from "./../../../utils/headers";
const productosStore = useProductosStore();
const ventaStore = useVentaStore();
const moProduct = ref(false);
const reference = ref(null);
const comprobant = ref(null);
const observacions = ref("");
const fileUpload = ref(null);
const baseImage = `${baseURL}/uploads`;
const onFileChange = async (event) => {
  comprobant.value = event.target.files[0];
  const formData = new FormData();
  formData.append("comprobant", comprobant.value);
  try {
    fileUpload.value = await ventaStore.uploadComprobant(formData);
  } catch (error) {}
};

const submitOrder = async () => {
  if (fileUpload.value == null) return false;
  let items = productosStore.productosSelected.map((el) => {
    return {
      idProducto: el.id,
      cantidad: el.cantidad,
      total: el.total,
    };
  });
  let monto = productosStore.productosSelected.reduce(
    (acumulador, item) => parseFloat(acumulador) + parseFloat(item.total),
    0
  );
  let montoPagado = productosStore.productosSelected.reduce(
    (acumulador, item) => parseFloat(acumulador) + parseFloat(item.total),
    0
  );
  let ventaObjet = {
    idUserClient: localStorage.getItem("idUser"),
    emailClient: localStorage.getItem("emailUser"),
    monto,
    montoPagado,
    observacion: observacions.value,
    pago: monto == montoPagado ? "Si" : "No",
    comprobante: fileUpload.value.file.filename,
    referencia: reference.value,
    items: items,
  };
  try {
    await ventaStore.ventaAdd(ventaObjet);
    productosStore.productosPreSelected = [];
    productosStore.productosSelected = [];
    reference.value = null;
    comprobant.value = null;
    observacions.value = "";
    fileUpload.value = null;
    ventaStore.moOrderManage(false);
  } catch (error) {}
};

const aprobarO = async (param) => {
  try {
    await ventaStore.aprobarOrder(param);
    ventaStore.moOrderDetails(false);
    await ventaStore.ventaAll();
  } catch (error) {
    console.log(error);
  }
};
</script>
