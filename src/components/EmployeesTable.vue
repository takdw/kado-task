<template>
  <div>
    <div class="grid grid-cols-5 gap-2">
      <div class="col-span-3">
        <label for="search" class="sr-only">Search</label>
        <div class="relative">
          <input
            @input="search"
            v-model="searchQuery"
            id="search"
            class="w-full p-3 pr-10 text-sm border border-kado-gray rounded-lg focus:outline-none focus:border-pink-primary transition ease-in duration-150"
            placeholder="Search"
          />
          <div
            class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-pink-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <label for="team" class="sr-only">Team</label>
        <div class="relative">
          <select
            @change="teamSelected"
            id="team"
            class="w-full p-3 bg-white border border-kado-gray text-sm rounded-lg focus:outline-none focus:border-pink-primary transition ease-in duration-150 appearance-none"
          >
            <option value="">Team</option>
            <option
              v-for="team in teams"
              :value="team.id"
              :key="`team-${team.id}-option`"
            >
              {{ team.name }}
            </option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-pink-primary"
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
    </div>
    <div
      class="mt-6 border border-kado-gray divide-y divide-kado-gray rounded-sm"
    >
      <div class="flex py-2">
        <div class="flex-shrink-0 px-4">
          <Checkbox v-model="selectAll" />
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
        :selected="selected.includes(employee.id)"
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
    employeesData: {
      type: Array,
      default: () => [],
    },
    teams: {
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
    selectAll: false,
    selected: [],
    selectedTeam: "",
    searchResults: [],
    searchQuery: "",
  }),
  watch: {
    selectAll(val) {
      this.selected = val ? this.employees.map(employee => employee.id) : [];
    },
    searchQuery(val) {
      if (!val) {
        this.searchResults = [];
      }
      if (this.page !== 0) this.page = 0;
    },
    selectedTeam(val) {
      if (val && this.page !== 0) this.page = 0;
    },
  },
  computed: {
    employees() {
      return this.searchQuery || this.selectedTeam
        ? this.searchResults
        : this.employeesData;
    },
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
    teamSelected(e) {
      this.selectedTeam = e.target.value;
      this.selectAll = false;

      if (!e.target.value) return;

      this.searchResults = this.employeesData.filter(
        employee => employee.team.id == e.target.value
      );
    },
    search(e) {
      this.searchResults = this.employeesData.filter(employee =>
        employee.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    },
  },
};
</script>
