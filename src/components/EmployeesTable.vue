<template>
  <div class="mt-16">
    <div v-if="selected.length < 2">
      <p class="text-xs">
        You could customize vouchers either individually or perform a mass
        action.
      </p>
      <div class="mt-4 grid grid-cols-5 gap-2">
        <div class="col-span-3">
          <label for="search" class="sr-only">Search</label>
          <div class="relative">
            <input
              @input="search"
              v-model="searchQuery"
              id="search"
              class="w-full p-3 pr-10 text-xs border border-kado-gray rounded-lg focus:outline-none focus:border-pink-primary transition ease-in duration-150"
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
              class="w-full p-3 bg-white border border-kado-gray text-xs rounded-lg focus:outline-none focus:border-pink-primary transition ease-in duration-150 appearance-none"
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
    </div>
    <div v-else>
      <p class="text-xs">
        <strong class="font-bold">{{ selected.length }}</strong> Employees are
        selected, allowing you to perform a mass action.
      </p>
      <div class="mt-4 grid grid-cols-9 gap-2">
        <div class="col-span-1">
          <label for="search" class="sr-only">Amount</label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none"
            >
              <span class="text-pink-primary">€</span>
            </div>
            <input
              v-model="massUpdate.amount"
              id="search"
              class="w-full p-3 pl-8 text-xs border border-kado-gray rounded-lg focus:outline-none focus:border-pink-primary transition ease-in duration-150"
              placeholder="Amount"
            />
          </div>
        </div>
        <div class="col-span-2">
          <label for="date" class="sr-only">Delivery Date</label>
          <div class="relative">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <input
              type="date"
              v-model="massUpdate.date"
              id="date"
              class="w-full p-3 pr-8 text-xs border border-kado-gray rounded-lg focus:outline-none focus:border-pink-primary transition ease-in duration-150"
              placeholder="Delivery Date"
            />
          </div>
        </div>
        <div class="col-span-2">
          <label for="time" class="sr-only">Delivery Time</label>
          <div class="relative">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <input
              type="time"
              v-model="massUpdate.time"
              id="time"
              class="w-full p-3 pr-8 text-xs border border-kado-gray rounded-lg focus:outline-none focus:border-pink-primary transition ease-in duration-150"
              placeholder="Delivery Date"
            />
          </div>
        </div>
        <div class="col-span-4">
          <label for="message" class="sr-only">Message</label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <input
              v-model="massUpdate.message"
              id="message"
              class="w-full p-3 pl-8 text-xs border border-kado-gray rounded-lg focus:outline-none focus:border-pink-primary transition ease-in duration-150"
              placeholder="Message"
            />
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
      <template v-if="loading">
        <EmployeeRowLoading v-for="i in 10" :key="`loading-emp-${i}`" />
      </template>
      <template v-else>
        <EmployeeRow
          v-for="employee in pageData"
          :key="employee.id"
          :employee="employee"
          :selected="selected.includes(employee.id)"
          @employee-selected="handleEmployeeSelect"
          @employee-deselected="handleEmployeeDeselect"
          :update="massUpdate"
          v-model="selectedEmployeesData[selected.indexOf(employee.id)]"
        />
      </template>
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
import EmployeeRowLoading from "@/components/EmployeeRowLoading";

export default {
  props: {
    perPage: {
      type: Number,
      default: 10,
    },
  },
  components: {
    Checkbox,
    EmployeeRow,
    EmployeeRowLoading,
  },
  data: () => ({
    allEmployees: [],
    teams: [],
    page: 0,
    selectAll: false,
    selectedEmployees: [],
    selectedEmployeesData: [],
    selectedTeam: "",
    searchResults: [],
    searchQuery: "",
    massUpdate: {
      amount: "",
      date: "",
      time: "",
      message: "",
    },
    loading: false,
  }),
  watch: {
    selectAll(val) {
      this.selectedEmployees = val
        ? this.employees.map(employee => ({ employee }))
        : [];
      this.selectedEmployeesData = this.selectedEmployees.map(_ => ({}));
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
  created() {
    this.loading = true;
    Promise.all([fetch("/api/employees"), fetch("/api/teams")])
      .then(([employeesResponse, teamsResponse]) =>
        Promise.all([employeesResponse.json(), teamsResponse.json()])
      )
      .then(([employees, teams]) => {
        this.allEmployees = employees;
        this.teams = teams;
      })
      .catch(err => {})
      .finally(() => (this.loading = false));
  },
  computed: {
    employees() {
      return this.searchQuery || this.selectedTeam
        ? this.searchResults
        : this.allEmployees;
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
    selected() {
      return this.selectedEmployees.map(employee => employee.employee.id);
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

      this.searchResults = this.allEmployees.filter(
        employee => employee.team.id == e.target.value
      );
    },
    search(e) {
      this.searchResults = this.allEmployees.filter(employee =>
        employee.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    },
    handleEmployeeSelect(e) {
      if (!this.selected.includes(e.employee.id)) {
        this.selectedEmployees.push(e);
        this.selectedEmployeesData.push(e.data);
      }
    },
    handleEmployeeDeselect(e) {
      const index = this.selected.indexOf(e);
      if (index !== -1) {
        this.selectedEmployees.splice(index, 1);
        this.selectedEmployeesData.splice(index, 1);
      }
    },
  },
};
</script>
