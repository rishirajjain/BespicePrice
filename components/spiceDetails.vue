<template>
  <div>
    <div
      class="flex justify-between"
      v-for="spice in spiceData.SellerData"
      :key="spice._uid"
    >
      <div class="py-6" v-for="spice in spice.body" :key="spice._uid">
        {{ spice.value }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["spiceData"],
};
</script>


<style>
</style>