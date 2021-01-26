<template>
  <div id="app" class="font-sans bg-gray-50 py-12">
    <div
      class="max-w-5xl mx-auto p-10 bg-white text-brownish-gray rounded-lg border"
    >
      <div>
        <button
          type="button"
          class="flex items-center space-x-2 text-xs font-semibold text-pink-primary"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
          <span class="uppercase">Back</span>
        </button>
      </div>
      <div class="mt-5">
        <h2 class="font-heading font-extrabold text-xl">
          Search and Customize from Employees List
        </h2>
      </div>
      <div class="mt-16">
        <EmployeesDataTable />
      </div>
      <div class="mt-11">
        <div class="flex justify-center items-center space-x-2.5">
          <button
            type="button"
            class="py-2 px-8 text-xs font-semibold bg-pink-primary text-white uppercase tracking-widest rounded-lg border border-pink-primary hover:bg-opacity-80 hover:border-opacity-80 transition ease-in duration-150"
          >
            Submit
          </button>
          <button
            type="button"
            class="py-2 px-8 text-xs font-semibold bg-white uppercase tracking-widest rounded-lg border border-kado-gray hover:border-gray-400 transition ease-in duration-150"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeesDataTable from "@/components/EmployeesTable";

export default {
  name: "App",
  components: {
    EmployeesDataTable,
  },
  data: () => ({}),
  created() {},
};
</script>
