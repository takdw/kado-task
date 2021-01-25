<template>
  <div>
    <div class="border border-kado-gray divide-y divide-kado-gray rounded-sm">
      <div class="flex py-2">
        <div class="flex-shrink-0 px-4">
          <Checkbox />
        </div>
        <div class="flex-1 grid grid-cols-10">
          <div
            class="col-span-3 text-xxs uppercase text-pink-primary font-semibold tracking-widest"
          >
            To
          </div>
          <div
            class="col-span-3 text-xxs uppercase text-pink-primary font-semibold tracking-widest"
          >
            Email
          </div>
          <div
            class="col-span-2 text-xxs uppercase text-pink-primary font-semibold tracking-widest"
          >
            Amount
          </div>
          <div
            class="col-span-2 text-xxs uppercase text-pink-primary font-semibold tracking-widest"
          >
            Language
          </div>
        </div>
      </div>
      <EmployeeRow
        v-for="employee in pageData"
        :key="employee.id"
        :employee="employee"
      />
    </div>
    <div class="mt-9">
      <div class="flex justify-center items-center space-x-2">
        <button @click="previousPage" type="button">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <p class="text-xs">
          <span class="text-pink-primary">{{ page + 1 }}</span> of
          {{ lastPage + 1 }}
        </p>
        <button @click="nextPage" type="button">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox";
import EmployeeRow from "@/components/EmployeeRow";

export default {
  props: {
    employees: {
      type: Array,
      default: () => [],
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
  components: {
    Checkbox,
    EmployeeRow,
  },
  data: () => ({
    page: 0,
  }),
  computed: {
    total() {
      return this.employees.length;
    },
    lastPage() {
      return Math.floor(this.total / this.perPage);
    },
    pageData() {
      const start = this.page * this.perPage;
      return this.employees.slice(start, start + this.perPage);
    },
  },
  methods: {
    nextPage() {
      if (this.page < this.lastPage) {
        this.page++;
      }
    },
    previousPage() {
      if (this.page > 0) {
        this.page--;
      }
    },
  },
};
</script>
