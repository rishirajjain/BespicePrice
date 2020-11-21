<template>
  <nav class="text-base text-txt-pri py-8 w-full">
    <div class="flex justify-center">
      <div class="container flex justify-between w-11/12">
        <div class="flex justify-between">
          <nuxt-link to="/" class="flex justify-center items-center">
            <img src="/bespiceslogo.png" alt="BESpices" class="w-12" />
            <div class="uppercase md:text-xl font-semibold ml-2 logoText">
              Bharatexotics
            </div>
          </nuxt-link>
        </div>
        <div class="flex items-center justify-between">
          <googleSignIn
            v-if="!auth.authorised"
            :clientId="'501525525432-jok4m6ci0c4pdlpiu2dneto6gnbjuclm.apps.googleusercontent.com'"
            :successCallBack="onSuccess"
            :failureCallBack="onFailed"
          />
          <profile v-else />
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>
.logoText {
  font-family: "Montserrat Alternates";
}
</style>
<script>
import profile from "@/components/profile.vue";
import googleSignIn from "google-signin-vue/src/googleSignIn.vue";
import { mapActions, mapState } from "vuex";

export default {
  head: {
    script: [
      {
        src: "https://apis.google.com/js/platform.js",
      },
    ],
  },

  components: {
    googleSignIn,
    profile,
  },
  computed: {
    ...mapState(["auth"]),
  },
  methods: {
    ...mapActions(["authData"]),

    onSuccess(data) {
      this.authData(data);
      this.$router.push("/spices");
    },
    onFailed(data) {
      console.log("Failed", data);
    },
  },
};
</script>