<template>
  <div v-if="auth.authorised" class="h-screen">
    <div class="flex flex-wrap justify-center">
      <div class="container flex justify-between w-11/12">
        <div class="w-full flex flex-col">
          <nuxt-link to="/spices">
            <div
              class="text-2xl md:text-3xl p-4 border-2 border-gray-100 rounded hover:bg-white"
            >
              View Price List
            </div>
          </nuxt-link>
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
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["auth"]),
  },
};
</script>
