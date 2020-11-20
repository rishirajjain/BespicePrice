<template >
  <div
    class="content-wrapper bg-gray-200 bg-no-repeat bg-right-top"
    style="background-image: url(/illus.svg)"
  >
    <Nav />
    <Nuxt />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>
