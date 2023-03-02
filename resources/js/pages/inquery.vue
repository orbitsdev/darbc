<template>
  <section class="bg-white p-6">
    <div class="">
      <section aria-labelledby="payment-details-heading">
        <form action="#" method="POST">
          <div class="rounded-md">
            <div class="bg-white">
              <div class="">
                <div class="flex items-center">
                  <h2
                    id="payment-details-heading"
                    class="text-lg font-medium leading-6 text-gray-900 mr-1"
                  >
                    Search
                  </h2>
                </div>
                <p class="text-sm text-gray-500">
                  You can search anything you like as long as the datails existed in the
                  table columns
                </p>
              </div>

              <div class="mt-2 flex items-center relative">
                <input
                  type="text"
                  class="border border-gray-300 h-10 rounded-lg px-4 pl-10 font-rubik text-sm focus:border-gray-400 border-0.5 outline-none w-full"
                  placeholder="Searc.. "
                />
                <div class="absolute top-2 left-4">
                  <i class="fa-solid fa-magnifying-glass text-gray-600 text-sm"></i>
                </div>
              </div>

              <div class="mt-2 grid grid-cols-4 gap-x-4 gap-y-1">
                <label
                  class="cursor-pointer hover:bg-gray-50 rounded p-2 border flex items-center"
                  v-for="option in options"
                  :key="option"
                >
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 rounded-none border-purple-600 accent-purple-900 bg-purple-600 checked:bg-purple-900 focus:ring-purple-500 mr-2"
                  />
                  <span class="uppercase text-xs">{{ option }} </span>
                </label>
              </div>

              <!-- <div class="grid grid-cols-6 mt-3 gap-x-3 ">
                <div class="sm:col-span-1 ">
                  <label for="country" class="block text-sm  text-gray-700"
                    >Tax</label
                  >
                  <div class="mt-1">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                    </select>
                  </div>
                </div>
                <div class="sm:col-span-1 ">
                  <label for="country" class="block text-sm  text-gray-700"
                    >Year</label
                  >
                  <div class="mt-1">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                    </select>
                  </div>
                </div>
                <div class="sm:col-span-1 ">
                  <label for="country" class="block text-sm  text-gray-700"
                    >Year</label
                  >
                  <div class="mt-1">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                    </select>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </form>
      </section>
    </div>

    <div class=" " id="table-to-print">
      <div class="flex items-center justify-end py-2">
        <DarButton @click="printTable" class="flex items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              fill-rule="evenodd"
              d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
              clip-rule="evenodd"
            />
          </svg>
          Print
        </DarButton>
      </div>
      <DarTable class="" />
    </div>
  </section>
</template>

<script>
import adminlayout from "../layouts/adminlayout.vue";
export default {
  layout: adminlayout,

  methods: {
    printTable() {
      const printContents = document.getElementById("table-to-print").innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    },
  },

  data() {
    return {
      options: [
        "No.",
        "Lot No.",
        "Surevy No.",
        "Title Area",
        "Awarded-area",
        "Previous land owner",
        "Field",
        "Location",
        "Municipality",
        "Tittle",
        "Cloa No.",
        "Page",
        "Enconmbered",
        "Area",
        "Variance",
        "Previouse Copy of title",
        "Title Status",
        "Title Copy",
        "Remarks",
        "Status",
        "Amortization",
        "Amount",
        "Date  Paid",
        "Date of Cert",
        "NDC",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
