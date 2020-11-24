<template>
  <div>
    <div class="relative inline-block text-left">
      <div class="flex items-center">
        <div class="hidden md:block title font-semibold mr-3">
          <span class="font-normal">Welcome, </span>{{ auth.name }}
        </div>
        <div class="self-end">
          <button
            type="button"
            class="pointer-events-auto text-base inline-flex justify-center w-full leading-5 focus:outline-none transition ease-in-out duration-150"
            @click="showMenu = !showMenu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <img :src="auth.img" alt="profile thumb" class="rounded-full w-8" />
          </button>
          <button
            v-if="showMenu"
            @click="showMenu = false"
            tabindex="-1"
            class="fixed inset-0 h-full w-full z-30 cursor-default focus:outline-none"
          ></button>
        </div>
      </div>
      <div
        class="origin-top-right absolute z-50 right-0 mt-2 rounded-md shadow-lg"
        v-if="showMenu"
      >
        <div class="bg-white flex flex-col items-center justify-center">
          <div
            class="p-8 bg-white flex flex-col items-center justify-center rounded"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <img :src="auth.img" alt="profile pic" class="rounded-full" />
            <div class="items-start">
              <div class="text-lg font-semibold mt-8 uppercase">
                {{ auth.name }}
              </div>
              <div class="text-base text-gray-700">{{ auth.email }}</div>
              <div>
                <googleSignIn
                  :clientId="'501525525432-jok4m6ci0c4pdlpiu2dneto6gnbjuclm.apps.googleusercontent.com'"
                  :successCallBack="onSuccess"
                  :failureCallBack="onFailed"
                  :customButton="true"
                  customButtonId="switchAc"
                />
              </div>
            </div>
            <button
              id="switchAc"
              class="w-full self-center mt-4 rounded bg-gray-100 hover:bg-gray-300 py-4 px-2"
            >
              Switch Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import googleSignIn from "google-signin-vue/src/googleSignIn.vue";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  components: {
    googleSignIn,
  },
  computed: {
    ...mapState(["auth"]),
  },
  methods: {
    ...mapActions(["authData"]),

    onSuccess(data) {
      this.authData(data);
    },
    onFailed(data) {
      console.log("Failed", data);
    },
  },
};
</script>



