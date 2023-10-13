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
      <FormKit type="form">
        <FormKit
          type="text"
          label="Nombre"
          placeholder="Nombre de Cliente"
          help="Coloca el Nombre del cliente que desear registrar"
          validation="required"
          :validation-messages="{ required: 'El nombre del cliente es obligatorio'}"
          validation-visibility="live"
        />
      </FormKit>
    </div>
  </div>
</template>
