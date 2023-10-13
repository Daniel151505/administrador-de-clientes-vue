<script setup>
import RouterLink from "../components/RouterLink.vue";
import HeadingVue from "../components/UI/Heading.vue";

defineProps({
  titulo: {
    type: String
  }
}) 
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="inicio"> Volver </RouterLink>
    </div>

    <HeadingVue>{{ titulo }}</HeadingVue>
  </div>
</template>
