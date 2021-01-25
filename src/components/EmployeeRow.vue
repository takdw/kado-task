<template>
  <div class="flex py-4 hover:bg-gray-50 transition ease-in duration-150">
    <div class="flex-shrink-0 px-4">
      <Checkbox :value="selected" />
    </div>
    <div class="flex-1 grid grid-cols-10 gap-y-5">
      <div class="col-span-3 text-xs">{{ employee.name }}</div>
      <div class="col-span-3 text-xs">{{ employee.email }}</div>
      <div class="col-span-2 text-xs">€ 10,00</div>
      <div class="col-span-2 text-xs">NL</div>
      <div class="col-span-6">
        <p
          class="text-xxs uppercase text-pink-primary font-semibold tracking-widest"
        >
          Message
        </p>
        <p class="text-xs">
          Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Unde.
        </p>
      </div>
      <div class="col-span-2">
        <p
          class="text-xxs uppercase text-pink-primary font-semibold tracking-widest"
        >
          Delivery Date
        </p>
        <p class="text-xs">DD/MM/YYYY</p>
      </div>
      <div class="col-span-2">
        <p
          class="text-xxs uppercase text-pink-primary font-semibold tracking-widest"
        >
          Delivery Time
        </p>
        <p class="text-xs">HH:MM</p>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox";

export default {
  props: {
    employee: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Checkbox,
  },
  data: () => ({}),
  created() {},
  computed: {},
  methods: {},
};
</script>

<style></style>
