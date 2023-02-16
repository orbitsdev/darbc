<script setup>
import { ref } from "vue";

const items = ref([1, 2, 3, 4, 5, 1, 2, 3, 4, 51, 2, 3, 4, 51, 2, 3, 4, 5]);
const showDialog = ref(false);
const showSearch = ref(false);
const showDetails = ref(false);
const showActual = ref(false);
const showDraw = ref(false);
const isSideBarOpen = ref(false);

function showSideBar() {
  isSideBarOpen.value = true;

  console.log("clidsad");
}
const search = ref("");

function toggle() {
  showDialog.value = !showDialog.value;
}
</script>

<template>
  <main class="px-6">
    <w-app>
      <div class="py-4">
        <DarNavigation />
      </div>
     
      <section class="flex justify-between">
        <div class="flex-1 mr-4 relative">
          <div class="flex items-center">
            <input
              v-model.trim="search"
              type="text"
              class="border border-gray-300 h-10 rounded-lg px-4 pl-10 font-rubik text-sm focus:border-gray-400 border-0.5 outline-none w-full"
              placeholder="Searc.. "
            />
            <div class="absolute top-2 left-4">
              <i class="fa-solid fa-magnifying-glass text-gray-300 text-sm"></i>
            </div>
          </div>
          <div
            v-if="search.length > 0"
            class="darscroll max-h-96 overflow-y-auto absolute bg-white mt-2 shadow-xl right-0 z-10 w-full"
          >
            <div
              class="py-2 px-2 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
            >
              <div class="">
                <p class="font-roboto text-sm uppercase">Mari Terisia Kanlungan</p>
              </div>
              <div>
                <DarButton :color="'h-8 dr-bg-purple text-white text-xs'">
                  Make as ownner</DarButton
                >
              </div>
            </div>
            <div
              class="py-2 px-2 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
            >
              <div class="">
                <p class="font-roboto text-sm uppercase">Mari Terisia Kanlungan</p>
              </div>
              <div>
                <DarButton :color="'h-8 dr-bg-purple text-white text-xs'">
                  Make as ownner</DarButton
                >
              </div>
            </div>
            <div
              class="py-2 px-2 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
            >
              <div class="">
                <p class="font-roboto text-sm uppercase">Mari Terisia Kanlungan</p>
              </div>
              <div>
                <DarButton :color="'h-8 dr-bg-purple text-white text-xs'">
                  Make as ownner</DarButton
                >
              </div>
            </div>
            <div
              class="py-2 px-2 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
            >
              <div class="">
                <p class="font-roboto text-sm uppercase">Mari Terisia Kanlungan</p>
              </div>
              <div>
                <DarButton :color="'h-8 dr-bg-purple text-white text-xs'">
                  Make as ownner</DarButton
                >
              </div>
            </div>
            <div
              class="py-2 px-2 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
            >
              <div class="">
                <p class="font-roboto text-sm uppercase">Mari Terisia Kanlungan</p>
              </div>
              <div>
                <DarButton :color="'h-8 dr-bg-purple text-white text-xs'">
                  Make as ownner</DarButton
                >
              </div>
            </div>
            <div
              class="py-2 px-2 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
            >
              <div class="">
                <p class="font-roboto text-sm uppercase">Mari Terisia Kanlungan</p>
              </div>
              <div>
                <DarButton :color="'h-8 dr-bg-purple text-white text-xs'">
                  Make as ownner</DarButton
                >
              </div>
            </div>
            <div
              class="py-2 px-2 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
            >
              <div class="">
                <p class="font-roboto text-sm uppercase">Mari Terisia Kanlungan</p>
              </div>
              <div>
                <DarButton :color="'h-8 dr-bg-purple text-white text-xs'">
                  Make as ownner</DarButton
                >
              </div>
            </div>
            <div
              class="py-2 px-2 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
            >
              <div class="">
                <p class="font-roboto text-sm uppercase">Mari Terisia Kanlungan</p>
              </div>
              <div>
                <DarButton :color="'h-8 dr-bg-purple text-white text-xs'">
                  Make as ownner</DarButton
                >
              </div>
            </div>
            <div
              class="py-2 px-2 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
            >
              <div class="">
                <p class="font-roboto text-sm uppercase">Mari Terisia Kanlungan</p>
              </div>
              <div>
                <DarButton :color="'h-8 dr-bg-purple text-white text-xs'">
                  Make as ownner</DarButton
                >
              </div>
            </div>
            <div
              class="py-2 px-2 flex items-center justify-between border-b border-gray-300 hover:bg-gray-100 transition-all ease-in-out cursor-pointer"
            >
              <div class="">
                <p class="font-roboto text-sm uppercase">Mari Terisia Kanlungan</p>
              </div>
              <div>
                <DarButton :color="'h-8 dr-bg-purple text-white text-xs'">
                  Make as ownner</DarButton
                >
              </div>
            </div>
          </div>
        </div>
        <div>
         
          <DarButton  class="min-w-40 mr-2 " @click="toggle">
            <i class=" mr-2 fa-solid fa-plus"></i> Add Land Owner</DarButton
          >
            
          <DarButton  class="min-w-40 mr-2 " @click="showActual = true">
            <i class="fa-solid fa-file-contract mr-2 "></i> Actual </DarButton
          >
            
       
         
        </div>
      </section>
      <div>

      <div class="flex items-center justify-between"> 
        <div class="mt-2 py-1 rounded flex items-center justify-start mb-2">
          <div class="border">
            <select
              class="border py-0.5 px-2 rounded bg-gray-200 min-w-96 border-gray-400 mx-1"
            >
              <option value="">Polomolok</option>
            </select>
          </div>
          <div class="border">
            <select
              class="border py-0.5 px-2 rounded bg-gray-200 min-w-96 border-gray-400 mx-1"
            >
              <option value="">Hectars</option>
            </select>
          </div>
          <div class="border">
            <select
              class="border py-0.5 px-2 rounded bg-gray-200 min-w-96 border-gray-400 mx-1"
            >
              <option value="">Date</option>
            </select>
          </div>
          <div class="border">
            <select
              class="border py-0.5 px-2 rounded bg-gray-200 min-w-96 border-gray-400 mx-1"
            >
              <option value="">Location</option>
            </select>
          </div>
          <div class="border">
            <select
              class="border py-0.5 px-2 rounded bg-gray-200 min-w-96 border-gray-400 mx-1"
            >
              <option value="">Tax</option>
            </select>
          </div>
          
        </div>
        <!-- <DarButton class="">
          <i class="fa-solid fa-file-contract mr-2 "></i> Actual </DarButton
        > -->
      </div>
    
    </div>

      <div class="mb-20">
        <DarTable
          @click="showSideBar"
          @showDetails="showDetails = true"
          @showDraw="showDraw = true"
        ></DarTable>
        <div class="py-2 flex items-center justify-between">
          <p class="text-xs py-1">Showing 1 to 10 results</p>
          <div class="flex items-center justify-center">
            <div class="px-2 mx-0.5 bg-white"><i class="fa-solid fa-angle-left"></i></div>
            <div class="px-2 mx-0.5 bg-white">1</div>
            <div class="px-2 mx-0.5 bg-white">2</div>
            <div class="px-2 mx-0.5 bg-white">3</div>
            <div class="px-2 mx-0.5 bg-white">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>

      <DarDialog :isOpen="showDialog">
        <div class="mb-4 dardialog overflow-y-auto">
          <!-- <p class="text-2xl font-rubik font-bold font-roboto capitalize text-gray-800"> Create new land record </p> -->
          <aside class="mt-1">
            <p class="font-roboto text-lg font-medium">Basic Information</p>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  No
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Lot No
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Survery No
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Title Area
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Awarded Area
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Previouse Land Owner
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <p class="font-roboto text-lg font-medium">More Information</p>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Location
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <select
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    >
                      <option value="">Polomolok</option>
                      <option value="">Isulan</option>
                      <option value="">Taucurong</option>
                      <option value="">Marbel</option>
                    </select>
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Municipality
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <select
                      id="location"
                      name="location"
                      class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 font-rubik text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    >
                      <option>Marbel</option>
                      <option selected>Gensan</option>
                      <option>Suralah</option>
                    </select>
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Cloa
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Page
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Encumbered
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Remarks
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="px-4 mx-auto mt-2">
              <div class="grid grid-cols-12 mb-4">
                <div
                  class="col-span-4 flex items-center justify-end pr-4 font-roboto text-sm"
                >
                  Status
                </div>
                <div class="col-span-8 relative flex items-center w-full">
                  <div class="w-full relative">
                    <input
                      required
                      class="font-rubik text-base block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-500"
                    />
                    <!-- <p class="font-roboto text-red-600 text-xs mt-1"> Required </p> -->
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <section class="flex justify-end mr-4">
          <DarButton
            @click="showDialog = false"
            class="mr-4"
            :color="'border  bg-white shadow hover:bg-gray-300 hover:dr-text-purple-900'"
          >
            Close</DarButton
          >
          <DarButton @click="showDialog = false"> Save</DarButton>
        </section>
      </DarDialog>

      <DarDialog :fullScreen="true" :width="'970'" :isOpen="showDetails">
        <div class="mb-2 z-50">
          <DarNavigation />
        </div>
        <div class="flex items-center justify-end">
          <DarButton @click="showDetails = false" class="mr-4">
            <i class="fa-solid fa-arrow-left mr-2"></i> Go Back</DarButton
          >
        </div>

        <w-divider class="mt-4 " color="purple" />
        <div class="bg-gray-300 p-10 grid grid-cols-12 gap-x-2">
            <div class=" col-span-4">
              <p class="font-rubik text-lg">Basic Information</p>
                <div class="mt-3">
                  <img src="/assets/sample1.jpg" alt="lot" class="h-60 w-80">
                </div>
            </div>
            <div class=" col-span-8">
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">No.</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">1</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Lot No</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">6</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Surver No.</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">gss-390</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Title Area</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">12.08490</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Award Area</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">9.930123</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Previous Land Owner</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">Tomas Bayan</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Field No.</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">118b</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Location</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">polo</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Municipality</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">polomolok</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">title</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">t-1</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Cloa No</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">1</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Page</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">c-169</div>
                </div>
               
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Encumbered</p>
                    <div>

                      <div class="lg:w-24 font-rubik  mb-1 ">
                        <p class="text-sm text-gray-700 italic ">
                        Area
                      </p>
                      <p class="text-sm font-medium text-black fot-rubik ">97.087</p>
                    </div>
                    <div class="lg:w-24 font-rubik text-black font-medium mb-1">
                      <p class="text-sm text-gray-700 italic">
                        Variance
                      </p>
                      <p class="text-sm uppercase">None</p>
                      </div>
                    </div>

                </div>
               
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Encumbered</p>
                    <div>

                      <div class="lg:w-24 font-rubik  mb-2 ">
                        <p class="text-sm text-gray-700 italic ">
                        Type of title
                      </p>
                      <p class="text-sm font-medium text-black fot-rubik uppercase ">tct</p>
                    </div>
                    <div class="lg:min-w-24 font-rubik text-black font-medium mb-2">
                      <p class="text-sm text-gray-700 italic">
                       No.
                      </p>
                      <p class="text-sm uppercase">(t-131631) t-2-17</p>
                      </div>
                    </div>

                </div>
                
                

                <div class="flex items-start mb-2    ">
                  <p class="lg:w-48  text-gray-700 font-rubik text-sm">Title Status</p>
                  <div class="font-rubik text-black font-medium uppercase text-sm">Twc</div>
              </div>
                
                <div class="flex items-start mb-2    ">
                  <p class="lg:w-48  text-gray-700 font-rubik text-sm">Title Copy</p>
                  <div class="font-rubik text-black font-medium uppercase text-sm">Affidavit of loss</div>
              </div>
                
            </div>
        
         
        </div>
        <w-divider class="" color="purple" />
        <div class="bg-gray-300  p-10 grid grid-cols-12 gap-x-2">
            <div class=" col-span-4">
              <p class="font-rubik text-lg">Tax</p>
                <div>
                  
                </div>
            </div>
            <div class=" col-span-8 ">
                <div class="mb-4">
                  <p class="lg:w-48  text-black font-medium font-rubik text-sm  mb-1">Select Year</p>
                  <select
                  class="lg:w-96  border py-1 px-2 rounded bg-gray-200 min-w-96 border-gray-400 mx-1 text-sm"
                >
                  <option value="">2023</option>
                  <option value="">2022</option>
                  <option value="">2021</option>
                </select>
                </div>
             
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Area of title</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">1.9172</div>
                </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Tax Declaration No.</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">m-0701556</div>
                </div>
                <div class="flex items-start mb-2    ">
                  <p class="lg:w-48  text-gray-700 font-rubik text-sm">Market Value</p>
                  <div class="font-rubik text-black font-medium uppercase text-sm">3,0781295</div>
              </div>
                <div class="flex items-start mb-2    ">
                  <p class="lg:w-48  text-gray-700 font-rubik text-sm">Assessed Value</p>
                  <div class="font-rubik text-black font-medium uppercase text-sm">41213</div>
              </div>
                <div class="flex items-start mb-2    ">
                  <p class="lg:w-48  text-gray-700 font-rubik text-sm">Year</p>
                  <div class="font-rubik text-black font-medium uppercase text-sm">2023</div>
              </div>
                <div class="flex items-start mb-2    ">
                    <p class="lg:w-48  text-gray-700 font-rubik text-sm">Remarks</p>
                    <div class="font-rubik text-black font-medium uppercase text-sm">Area not plnadted to p/a as agrred w /dfl & darbc</div>
                </div>
             
              </div>
        
         
        </div>

     
      </DarDialog>

      <DarDialog :isOpen="showDraw" :width="'540'">
        <div class="flex justify-between">
          <p class="font-rubik font-bold dr-text-purple-900">Make Land Draw</p>
          <button @click="showDraw = false">
            <i class="fa-solid fa-xmark text-gray-500"></i>
          </button>
        </div>
        <div class="mt-2">
          <p class="font-rubik text-sm font-medium">Draw Date</p>
          <input
            required
            class="dr-text-purple-100 font-rubik dr-text-purple-900 text-lg pl-12 block w-full appearance-none rounded-md border border-gray-400 px-3 py-2 h-10 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>
        <DarButton @click="showDraw = false" class="w-full mt-2">
          Save Draw Date
        </DarButton>
      </DarDialog>

      <DarDialog :isOpen="showActual"  :fullScreen="true">
        <div class="mb-2 z-50">
          <DarNavigation />
        </div>
        <div class="flex items-center justify-end">
          <DarButton @click="showActual = false" class="mr-4">
            <i class="fa-solid fa-arrow-left mr-2"></i> Go Back</DarButton
          >
        </div>

        <div class="px-6">
          <DarTable2 class="mt-4"/>
        </div>
      </DarDialog>

      
    </w-app>
  </main>
</template>

<style scoped>
.dardialog::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.dardialog::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 4px;
}

.dardialog::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  border-radius: 4px;
}

.dardialog::-moz-scrollbar {
  width: 8px;
  height: 8px;
}

.dardialog::-moz-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 4px;
}

.dardialog::-moz-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.drlabel {
  min-width: 140px;
}

.darlabel2 {
  min-width: 160px;
}

.ctd{
  min-width: 260px;
}
</style>
