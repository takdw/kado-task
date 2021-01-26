<template>
  <div class="flex py-4 hover:bg-gray-50 transition ease-in duration-150">
    <div class="flex-shrink-0 px-4">
      <Checkbox :disabled="true" />
    </div>
    <div class="flex-1 grid grid-cols-10 gap-y-5">
      <div class="col-span-3 text-xs">
        <span class="h-6 w-64 bg-gray-200 text-transparent animate-pulse"
          >Loading...</span
        >
      </div>
      <div class="col-span-3 text-xs">
        <span class="h-6 w-64 bg-gray-200 text-transparent animate-pulse"
          >Loading...</span
        >
      </div>
      <div class="col-span-2 text-xs">
        <div class="w-16 flex space-x-1">
          <!-- <span class="">€</span>
          <input
            type="text"
            class="w-full bg-transparent border-b border-transparent focus:border-pink-primary transition ease-in duration-150"
            v-model="amount"
          /> -->
          <span class="h-6 w-64 bg-gray-200 text-transparent animate-pulse"
            >Loading...</span
          >
        </div>
      </div>
      <div class="col-span-2 text-xs">
        <div class="relative w-16">
          <span class="h-6 w-64 bg-gray-200 text-transparent animate-pulse"
            >Loading...</span
          >
        </div>
      </div>
      <div class="col-span-6">
        <span class="h-6 w-64 bg-gray-200 text-transparent animate-pulse"
          >Loading...</span
        >
        <div class="pr-10 py-1">
          <span
            class="block w-full h-6 max-w-sm bg-gray-200 text-transparent animate-pulse"
            >Loading...</span
          >
        </div>
      </div>
      <div class="col-span-2">
        <span class="h-6 w-64 bg-gray-200 text-transparent animate-pulse"
          >Loading...</span
        >
      </div>
      <div class="col-span-2">
        <span class="h-6 w-64 bg-gray-200 text-transparent animate-pulse"
          >Loading...</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox";

export default {
  components: {
    Checkbox,
  },
  watch: {},
  created() {},
  computed: {},
  methods: {},
};
</script>

<style></style>
