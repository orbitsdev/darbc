




<template>
  <div class="bg-gray-200 rounded-xl">
    <section class="grid grid-cols-12 gap-x-2">
      <div class="col-span-5 ">
        <section
          class="bg-white mb-2 darpi-max-h rounded-lg flex items-center justify-center relative"
        >
          <div class="absolute top-2 left-4">
            <p class="font-medium uppercase">Darbc Land Status</p>
          </div>
          <Pie
            class="flex items-center justify-center"
            :data="data1"
            :radius="[0, 100]"
            :title="'DARBC LAND STATUS'"
          />
        </section>

        <section
          class="bg-white mb-2 darpi-max-h rounded-lg flex items-center justify-center relative"
        >
          <div class="absolute top-2 left-4">
            <p class="font-medium uppercase">DARBC LAND</p>
          </div>

          <Pie
            class="flex items-center justify-center"
            :data="data2"
            :radius="[0, 100]"
            :title="'DARBC LAND'"
          />
        </section>
      </div>

      <section class="col-span-7 rounded-md bg-white py-4 px-2">
        <div class="flex items-center justify-center overflow-hidden">
          <img
            src="/assets/darbcmap3.jpg "
            alt=""
            class="object-fill di-max-h rounded-md w-auto"
          />
        </div>

        <aside class="">
          <div class="flex items-center justify-center border relative h-2 mt-2">
            <p
              class="font-medium uppercase text-center border py-1 px-2 absolute bg-gray-100 rounded text-sm "
            >
              Total LandHoldings
            </p>
          </div>

          <div class="mt-4 flex justify-center items-center whitespace-normal">
            <div class="py-1 px-2 whitespace-normal">
              <!-- <p class="font-medium uppercase text-xs  rounded "> Total Land Holdings</p> -->
              <p class="font-medium uppercase text-3xl word-break">9,086,8016,123</p>
            </div>
          </div>

                   

          <div>
            <div class="block">
              <nav class="flex space-x-4" aria-label="Tabs">

                <div
                @click="changeTab(tab.index)"
                v-for="tab in tabs" :key="tab"
                  href="#"
                  :class="[tab.index === selected_tab ?  'cursor-pointer bg-gray-50 text-gray-800 rounded px-2 border py-2 text-xs font-medium' : 'cursor-pointer text-gray-500 hover:bg-gray-100 hover:border border border-transparent hover:text-gray-700 rounded px-2 py-2 text-xs']"
                  aria-current="page"
                  >{{tab.label}}</div
                >


                <!-- <a
                  href="#"
                  class="cursor-pointer text-gray-500 hover:bg-gray-100 hover:border border border-transparent hover:text-gray-700 rounded px-2 py-2 text-xs"
                  >Land Status</a
                > -->
              </nav>
            </div>
          </div>

          <div class="mt-2 grid grid-cols-2 gap-2">
            <aside class="col-span-2 dar-ov " v-if="selected_tab === 1">
            <div class="mt-2 ">
                <div class="flow-root">
                  <div class="overflow-x-auto">
                    <div class="inline-block min-w-full align-middle">
                      <table class="min-w-full">
                        <tbody class="bg-white">
                          <tr class="border-t border-gray-200">
                            <th
                              colspan="3"
                              scope="colgroup"
                              class="bg-gray-50 px-2 py-2  text-left text-xs font-semibold text-gray-900 "
                            >
                           Polomolok Area: <span class="ml-2 inline-block">6,669,4968</span>
                            
                            </th>
                          </tr>
                          <tr class="border-t border-gray-200">
                            <th
                              colspan="col"
                              scope="colgroup"
                              class=" py-2 pl-4 pr-3 text-left text-xs  text-gray-900 sm:pl-3"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              class="px-2 py-1.5 leading-3 text-left text-xs  text-gray-900"
                            >
                              Area in hectars
                            </th>
                            <th
                              scope="col"
                              class="px-2 leading-3 py-1.5 text-left text-xs  text-gray-900"
                            >
                              No. of lots
                            </th>
                          </tr>

                          <tr class="bg-purple-50 border-t border-gray-200 bg--100">
                            <td
                              class="whitespace-nowrap  py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Title With COA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              5,300,1180
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              434
                            </td>
                          </tr>
                          <tr class=" border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Title Without CLOA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              380,000
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              46
                            </td>
                          </tr>
                          <tr class="bg-purple-50 border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Untitle With COA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              380,000
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              447
                            </td>
                          </tr>
                          <tr class="border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Untitle Without CLOA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              380,000
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              54
                            </td>
                          </tr>
                        </tbody>
                        <tbody class="bg-white">
                          <tr class="border-t border-gray-200">
                            <th
                              colspan="3"
                              scope="colgroup"
                              class="bg-gray-50 px-2 py-2  text-left text-xs font-semibold text-gray-900 "
                            >
                           Tupi Area: <span class="ml-2 inline-block">6,669,4968</span>
                            
                            </th>
                          </tr>
                          <tr class="border-t border-gray-200">
                            <th
                              colspan="col"
                              scope="colgroup"
                              class=" py-2 pl-4 pr-3 text-left text-xs  text-gray-900 sm:pl-3"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              class="px-2 leading-3 py-1.5 text-left text-xs font-semibold text-gray-900"
                            >
                              Area in hectars
                            </th>
                            <th
                              scope="col"
                              class="leading-3 px-2 py-1.5 text-left text-xs font-semibold text-gray-900"
                            >
                              No. of lots
                            </th>
                          </tr>

                          <tr class="bg-purple-50 border-t  border-gray-200">
                            <td
                              class="whitespace-nowrap  py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Title With COA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              5,300,1180
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              434
                            </td>
                          </tr>
                          <tr class="border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Title Without CLOA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              380,000
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              46
                            </td>
                          </tr>
                          <tr class="bg-purple-50 border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Untitle With COA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              380,000
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              447
                            </td>
                          </tr>
                          <tr class="border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Untitle Without CLOA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              380,000
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              54
                            </td>
                          </tr>
                        </tbody>
                        <tbody class="bg-white">
                          <tr class="border-t border-gray-200">
                            <th
                              colspan="3"
                              scope="colgroup"
                              class="bg-gray-50 px-2 py-2  text-left text-xs font-semibold text-gray-900 "
                            >
                           Gensasn Area: <span class="ml-2 inline-block">6,669,4968</span>
                            
                            </th>
                          </tr>
                          <tr class="border-t border-gray-200">
                            <th
                              colspan="col"
                              scope="colgroup"
                              class=" py-2 pl-4 pr-3 text-left text-xs  text-gray-900 sm:pl-3"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              class="px-2 leading-3 py-1.5 text-left text-xs font-semibold text-gray-900"
                            >
                              Area in hectars
                            </th>
                            <th
                              scope="col"
                              class="leading-3 px-2 py-1.5 text-left text-xs font-semibold text-gray-900"
                            >
                              No. of lots
                            </th>
                          </tr>

                          <tr class="bg-purple-50 border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Title With COA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              5,300,1180
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              434
                            </td>
                          </tr>
                          <tr class="border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Title Without CLOA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              380,000
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              46
                            </td>
                          </tr>
                          <tr class="bg-purple-50 border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Untitle With COA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              380,000
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              447
                            </td>
                          </tr>
                          <tr class="border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Untitle Without CLOA
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              380,000
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              54
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <aside class="col-span-2 dar-ov " v-if="selected_tab === 2">

            
            <div class="mt-2 ">
            <div class="flow-root">
              <div class="overflow-x-auto">
                <div class="inline-block min-w-full align-middle">
                  <table class="min-w-full">
                    <tbody class="bg-white">
                      <tr class="border-t border-gray-200">
                        <th
                          colspan="col"
                          scope="colgroup"
                          class=" py-2 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-3"
                        >
                          Land Status
                        </th>
                        <th
                          colspan="col"
                          scope="colgroup"
                          class=" py-2 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-3"
                        >
                         Areas In hectars
                        </th>
                      </tr>
                     

                          <tr class="bg-purple-50 border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Area Leased by Dolefill
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                            7,6431,6981

                            <p class="text-xs ">under Agreement</p>
                            </td>
                          
                          </tr>

                          <tr class="border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Darbc Growership
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                          1,809,39

                            <p class="text-xs ">under Agreement</p>
                            </td>
                          
                          </tr>

                      

                          <tr class="bg-purple-50 border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Idle Lands
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              150, 0766

                            <p class="text-xs ">under Agreement</p>
                            </td>
                          
                          </tr>

                      


                          <tr class="border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                              Problematic Land
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
                              483,5057

                            <p class="text-xs ">under Agreement</p>
                            </td>
                          
                          </tr>

                          
                          <tr class="bg-purple-50 border-t border-gray-200">
                            <td
                              class="whitespace-nowrap py-1.5 pl-4 pr-3 text-xs text-gray-900 sm:pl-3"
                            >
                             Free Lots
                            </td>
                            <td
                              class="whitespace-nowrap px-2 py-1.5 text-xs text-gray-500"
                            >
  205,4304

                            <p class="text-xs ">under Agreement</p>
                            </td>
                          
                          </tr>

                      


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> 
            </aside>
          </div>
        </aside>
      </section>
    </section>

    <!-- <Chart/> -->
  </div>
</template>

<script>
import adminlayout from "../layouts/adminlayout.vue";
export default {
  layout: adminlayout,
  methods: {
    changeTab(tab) {
      this.selected_tab = tab;
    },
  },
  data() {
    return {

      selected_tab: 1,

      tabs: [
        {
          index:1,
          label: 'Area Status',
        },
        {
          index:2,
          label: 'Land Status',
        },
      ],
      data1: {
        labels: [
          "information 1",
          "information 2",
          "information 3",
          "Loss in Case",
          "Cloa",
          "Leased",
          "Qc",
        ],
        value: [
          { value: 24, name: "information 1" },
          { value: 23, name: "information 2" },
          { value: 22, name: "information 3" },
          { value: 21, name: "Loss in Case" },
          { value: 240, name: "Qc" },
          { value: 25, name: "Cloa" },
          { value: 27, name: "Leased" },
        ],
      },
      data2: {
        labels: ["Unplanted", "Growers", "Leased"],
        value: [
          { value: 1548, name: "Unplanted" },
          { value: 335, name: "Growers" },
          { value: 310, name: "Leased" },
        ],
      },

      bardata: {
        labels: [
          "Gensan",
          "Tupi",
          "Marbel",
          "Polomolok",
          "Tantangan",
          "Poland",
          "Isulan",
          "Gensan",
        ],
        value: [
          { value: 1548, name: "Gensan" },
          { value: 1335, name: "Tupi" },
          { value: 1310, name: "Marbel" },
          { value: 1130, name: "Polomolok" },
          { value: 1330, name: "Tantangan" },
          { value: 410, name: "Poland" },
          { value: 820, name: "Isulan" },
          { value: 960, name: "Gensan" },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
