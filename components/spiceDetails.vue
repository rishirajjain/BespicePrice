<template>
  <div>
    <div
      class="flex justify-between mt-6"
      v-for="spice in spiceData.SellerData"
      :key="spice._uid"
    >
      <div
        v-if="spice.Name == '' && spice.date == '' && spice.Price == ''"
        class="capitalize"
      >
        No data!
      </div>
      <div v-else class="capitalize">{{ spice.Name }}</div>

      <div v-if="spice.Name == '' && spice.date == '' && spice.Price == ''">
        No data!
      </div>
      <div v-else>{{ formatDate(spice.date) }}</div>
      <div v-if="spice.Name == '' && spice.date == '' && spice.Price == ''">
        No data!
      </div>

      <div v-else>₹{{ spice.Price }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["spiceData"],
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>


<style>
</style>