<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import HeadingVue from "../components/UI/Heading.vue";
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="agregar-cliente"> Agregar Cliente </RouterLink>
    </div>

    <HeadingVue>Listado de Clientes</HeadingVue>
  </div>
</template>
