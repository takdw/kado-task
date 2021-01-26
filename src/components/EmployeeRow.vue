<template>
  <div class="flex py-4 hover:bg-gray-50 transition ease-in duration-150">
    <div class="flex-shrink-0 px-4">
      <Checkbox v-model="checked" />
    </div>
    <div class="flex-1 grid grid-cols-10 gap-y-5">
      <div class="col-span-3 text-xs">{{ employee.name }}</div>
      <div class="col-span-3 text-xs">{{ employee.email }}</div>
      <div class="col-span-2 text-xs">
        <div class="w-16 flex space-x-1">
          <span class="">€</span>
          <input
            type="text"
            class="w-full bg-transparent border-b border-transparent focus:border-pink-primary transition ease-in duration-150"
            v-model="data.amount"
          />
        </div>
      </div>
      <div class="col-span-2 text-xs">
        <div class="relative w-16">
          <select
            id="team"
            class="w-full bg-transparent border-b border-transparent focus:border-pink-primary transition ease-in duration-150 appearance-none"
          >
            <option value="">NL</option>
            <option value="">EN</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-pink-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <p
          class="text-xxs uppercase text-pink-primary font-semibold tracking-widest"
        >
          Message
        </p>
        <div class="pr-10">
          <input
            type="text"
            class="w-full text-xs bg-transparent border-b border-transparent focus:border-pink-primary transition ease-in duration-150"
            v-model="data.message"
            placeholder="Message"
          />
        </div>
      </div>
      <div class="col-span-2">
        <p
          class="text-xxs uppercase text-pink-primary font-semibold tracking-widest"
        >
          Delivery Date
        </p>
        <input
          type="date"
          class="w-28 text-xs bg-transparent border-b border-transparent focus:outline-none focus:border-pink-primary transition ease-in duration-150"
          v-model="data.date"
        />
      </div>
      <div class="col-span-2">
        <p
          class="text-xxs uppercase text-pink-primary font-semibold tracking-widest"
        >
          Delivery Time
        </p>
        <input
          type="time"
          class="w-28 text-xs bg-transparent border-b border-transparent focus:outline-none focus:border-pink-primary transition ease-in duration-150"
          v-model="data.time"
        />
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
    update: {
      type: Object,
      default: () => ({
        amount: 10,
        message: "",
        date: "",
        time: "",
      }),
    },
  },
  components: {
    Checkbox,
  },
  watch: {
    selected(val) {
      this.checked = val;
    },
    checked(val) {
      if (val) {
        this.$emit("employee-selected", {
          employee: this.employee,
          data: this.data,
        });
      } else {
        this.$emit("employee-deselected", this.employee.id);
      }
    },
    update: {
      deep: true,
      handler: function (val) {
        this.data.amount = val.amount || 10;
        this.data.message = val.message || "";
        this.data.date = val.date || "";
        this.data.time = val.time || "";
      },
    },
    data: {
      deep: true,
      handler: function (val) {
        if (this.checked) this.$emit("input", val);
      },
    },
  },
  data() {
    return {
      checked: this.selected,
      data: {
        amount: this.update.amount || 10,
        message: this.update.message || "",
        date: this.update.date || "",
        time: this.update.time || "",
      },
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style></style>
