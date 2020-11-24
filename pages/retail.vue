<template>
  <div class="h-screen">
    <div class="flex flex-wrap justify-center">
      <div class="container flex flex-col justify-between w-11/12">
        <nuxt-link to="/" class="hover:underline">Back</nuxt-link>
        <div class="md:grid md:grid-cols-6 md:gap-20 my-8">
          <div
            v-for="item in gallery.imdata"
            :key="item.id"
            class="flex flex-col items-center justify-center"
          >
            <div
              @click="
                showFull = !showFull;
                filename = item.image.filename;
              "
              :style="{
                'background-image': 'url(' + item.image.filename + ')',
              }"
              class="w-48 h-56 bg-contain bg-no-repeat bg-center cursor-pointer"
            ></div>
            <div class="uppercase text-xs mt-4 font-semibold">
              {{ formatDate(item.date) }}
            </div>
            <div
              v-if="showFull"
              @click="showFull = false"
              class="flex z-50 items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800"
            >
              <div class="w-full md:w-1/2">
                <svg
                  class="ml-auto fill-current text-white w-6 h-6 cursor-pointer self-end"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                  />
                </svg>
                <div class="flex items-center justify-center p-4">
                  <img :src="filename" alt="Work images" class="h-screen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getSpiceImages();
  },

  computed: {
    ...mapState(["gallery"]),
  },
  methods: {
    ...mapActions(["setGallery"]),
    getSpiceImages() {
      this.setGallery();
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  data() {
    return {
      showFull: false,
      filename: "",
    };
  },
};
</script>
