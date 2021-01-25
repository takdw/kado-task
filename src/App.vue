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
        <p class="text-xs">
          You could customize vouchers either individually or perform a mass
          action.
        </p>
      </div>
      <div class="mt-4">
        <div class="grid grid-cols-5 gap-2">
          <div class="col-span-3">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <input
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
                id="team"
                class="w-full p-3 bg-white border border-kado-gray text-sm rounded-lg focus:outline-none focus:border-pink-primary transition ease-in duration-150 appearance-none"
              >
                <option value="">Team 1</option>
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
      <div class="mt-6">
        <div
          class="border border-kado-gray divide-y divide-kado-gray rounded-sm"
        >
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
          <EmployeeRow v-for="i in 10" :key="i" />
        </div>
      </div>
      <div class="mt-9">
        <div class="flex justify-center items-center space-x-2">
          <button type="button">
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
          <p class="text-xs"><span class="text-pink-primary">1</span> of 10</p>
          <button type="button">
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
import Checkbox from "@/components/Checkbox";
import EmployeeRow from "@/components/EmployeeRow";

export default {
  name: "App",
  components: {
    Checkbox,
    EmployeeRow,
  },
};
</script>
