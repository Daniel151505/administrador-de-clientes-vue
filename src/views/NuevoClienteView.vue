<script setup>
import { FormKit } from "@formkit/vue";
import { useRouter } from "vue-router";
import axios from "../lib/axios";
import RouterLink from "../components/RouterLink.vue";
import HeadingVue from "../components/UI/Heading.vue";

const router = useRouter();

defineProps({
  titulo: {
    type: String,
  },
});

const handleSubmit = (data) => {
  axios
    .post("/clientes", data)
    .then((respuesta) => {
      console.log(respuesta);
      // Redireccionar
      router.push({ name: "inicio" });
    })
    .catch((error) => console.log(error));
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="listado-clientes"> Volver </RouterLink>
    </div>

    <HeadingVue>{{ titulo }}</HeadingVue>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Agregar Cliente"
          incomplete-message="No se pudo enviar, revisa los mensajes"
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            label="Nombre"
            name="nombre"
            placeholder="Nombre de Cliente"
            validation="required"
            :validation-messages="{
              required: 'El nombre del cliente es obligatorio',
            }"
          />

          <FormKit
            type="text"
            label="Apellido"
            name="apellido"
            placeholder="Apellido del Cliente"
            validation="required"
            :validation-messages="{
              required: 'El apellido del cliente es obligatorio',
            }"
          />

          <FormKit
            type="text"
            label="Email"
            name="email"
            placeholder="Email del Cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El email del cliente es obligatorio',
              email: 'Coloca un email válido',
            }"
          />

          <FormKit
            type="text"
            label="Teléfono"
            name="telefono"
            placeholder="Teléfono del Cliente"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/"
            :validation-messages="{
              matches: 'El formato no es válido',
            }"
          />

          <FormKit
            type="text"
            label="Empresa"
            name="empresa"
            placeholder="Empresa a la que pertenece el cliente"
          />

          <FormKit
            type="text"
            label="Puesto"
            name="puesto"
            placeholder="Puesto del Cliente"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
