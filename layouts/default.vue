<template >
  <div
    class="content-wrapper bg-gray-200 bg-no-repeat bg-right-top"
    style="background-image: url(/illus.svg)"
  >
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>
