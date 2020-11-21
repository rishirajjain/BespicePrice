<template>
  <div v-if="auth.authorised" class="flex flex-wrap justify-center h-screen">
    <div class="container flex justify-between w-11/12">
      <div class="flex flex-col w-full">
        <nuxt-link to="/spices" class="underline mb-10">Back</nuxt-link>
        <div class="flex justify-between items-center">
          <div class="font-bold text-3xl">{{ spiceDataIndi.name }}</div>
          {{ formatDate(spiceDataIndi.date) }}
        </div>
        <p><b>Specification :</b> {{ spiceDataIndi.specification }}</p>
        <div class="mt-12">
          <div class="flex justify-between">
            <div class="font-bold text-xl">Name of seller</div>
            <div class="font-bold text-xl">Price(PerKG)</div>
          </div>
          <spiceDetails :spiceData="spiceDataIndi" />
        </div>
      </div>
    </div>
  </div>
  <!-- Unauth -->
  <div v-else class="h-screen">
    <div class="flex flex-wrap justify-center">
      <div class="container flex justify-between w-11/12">
        <div class="w-full flex flex-col">
          <div
            class="text-2xl md:text-3xl p-4 border-2 border-gray-100 rounded hover:bg-white"
          >
            You are Unauthorised to view this page. Try logging In to a
            different account.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spiceDetails from "@/components/spiceDetails";
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      this.getSpiceData(this.$route.fullPath);
      this.$nuxt.$loading.finish();
    });
  },
  components: { spiceDetails },
  computed: {
    ...mapState(["spiceDataIndi", "auth"]),
  },
  methods: {
    ...mapActions(["loadSpiceIndi"]),
    getSpiceData(params) {
      this.loadSpiceIndi(params);
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
</style>