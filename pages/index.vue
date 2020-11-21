<template>
  <div>
    <div class="flex flex-wrap justify-center">
      <div class="container flex justify-between w-11/12">
        <div class="w-full flex flex-col bg-white">
          <div
            class="text-2xl md:text-3xl p-4 border-2 border-gray-100 rounded"
          >
            List of Products
          </div>
          <div
            class="border-2 border-gray-100 hover:shadow hover:bg-gray-100"
            v-for="spice in spiceData"
            :key="spice.id"
          >
            <spicelist
              :name="spice.name"
              :specs="spice.specification"
              :id="spice.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spicelist from "@/components/spicelist";
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getSpiceData();
  },
  components: {
    spicelist,
  },
  computed: {
    ...mapState(["spiceData"]),
  },
  methods: {
    ...mapActions(["loadSpiceData"]),
    getSpiceData() {
      this.loadSpiceData();
    },
  },
};
</script>
