<script setup>
import { FormKit } from "@formkit/vue";
import RouterLink from "../components/RouterLink.vue";
import HeadingVue from "../components/UI/Heading.vue";

defineProps({
  titulo: {
    type: String,
  },
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="inicio"> Volver </RouterLink>
    </div>

    <HeadingVue>{{ titulo }}</HeadingVue>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit type="form">
          <FormKit
            type="text"
            label="Nombre"
            placeholder="Nombre de Cliente"
            validation="required"
            :validation-messages="{
              required: 'El nombre del cliente es obligatorio',
            }"
          />

          <FormKit
            type="text"
            label="Apellido"
            placeholder="Apellido del Cliente"
            validation="required"
            :validation-messages="{
              required: 'El apellido del cliente es obligatorio',
            }"
          />

          <FormKit
            type="text"
            label="Email"
            placeholder="Email del Cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El email del cliente es obligatorio',
              email: 'Coloca un email válido',
            }"
          />
        </FormKit>

        <FormKit
          type="email"
          label="Teléfono"
          placeholder="Teléfono del Cliente"
          validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/"
          :validation-messages="{
            matches: 'El formato no es válido',
          }"
        />
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
