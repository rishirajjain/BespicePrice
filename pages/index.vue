<template>
  <div class="">
    <div class="flex flex-wrap justify-center">
      <div class="container flex flex-col justify-between w-11/12">
        <div class="mt-12 flex flex-wrap items-center justify-between">
          <div class="capitalize flex flex-col">
            <span class="text-5xl font-bold">Fresh Spices at best prices</span>
            <span>Delivered to your doorstep</span>
          </div>
          <img
            src="/spice.svg"
            alt="illustration"
            class="hidden md:block w-64"
          />
        </div>
        <div
          class="w-full flex flex-wrap justify-evenly md:justify-between text-center mt-6 mb-40"
        >
          <nuxt-link to="/spices" v-if="auth.authorised" class="mt-4">
            <div
              class="flex flex-col items-center justify-center w-64 h-64 text-2xl md:text-3xl p-4 border-2 border-gray-100 rounded-lg hover:bg-white"
            >
              <img src="/list.svg" alt="illustration" class="w-24" />
              <span class="text-xl mt-6 uppercase">View Price List</span>
            </div>
          </nuxt-link>
          <nuxt-link to="/retail" class="mt-4">
            <div
              class="flex flex-col items-center justify-center w-64 h-64 text-2xl md:text-3xl p-4 border-2 border-gray-100 rounded-lg hover:bg-white"
            >
              <img src="/retail.svg" alt="illustration" class="w-24" />

              <span class="text-xl mt-6 uppercase">View Retail</span>
            </div>
          </nuxt-link>
          <nuxt-link to="/wholesale" class="mt-4">
            <div
              class="flex flex-col items-center justify-center w-64 h-64 text-2xl md:text-3xl p-4 border-2 border-gray-100 rounded-lg hover:bg-white"
            >
              <img src="/wholesale.svg" alt="illustration" class="w-24" />

              <span class="text-xl mt-6 uppercase"> View Wholesale</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["auth"]),
  },
};
</script>
