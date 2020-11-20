<template>
  <div>
    <nuxt-link :to="'/spices/' + id">
      <div class="flex items-center py-6">
        <div class="ml-4">
          <div class="text-lg font-semibold text-gray-900">
            {{ name }}
          </div>
          <div class="text-sm text-gray-500">
            {{ specs }}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["name", "specs", "id"],
};
</script>