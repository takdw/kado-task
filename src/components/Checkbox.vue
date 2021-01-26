<template>
  <div>
    <label :for="id" class="block p-1 cursor-pointer">
      <div
        class="flex items-center justify-center h-3 w-3 border border-gray-400 rounded-full"
        :class="{ 'border-gray-400': !checked, 'border-pink-primary': checked }"
      >
        <div
          class="h-1.5 w-1.5 bg-pink-primary rounded-full transition ease-in duration-150"
          :class="{ 'opacity-100': checked, 'opacity-0': !checked }"
        ></div>
      </div>
    </label>
    <input
      class="hidden"
      :id="id"
      @change="$emit('input', $event.target.checked)"
      type="checkbox"
      v-model="checked"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    const id = Math.random().toString(36).substr(2, 5);

    return {
      id,
      checked: this.value,
    };
  },
  watch: {
    value() {
      this.checked = this.value;
    },
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
