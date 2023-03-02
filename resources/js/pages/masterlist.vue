<script setup>
import { ref , defineComponent} from "vue";

import LotForm from '@/components/LotFrom.vue';
const items = ref([1, 2, 3, 4, 5, 1, 2, 3, 4, 51, 2, 3, 4, 51, 2, 3, 4, 5]);
const show_dialog = ref(false);
const show_search = ref(false);

const show_actual = ref(false);
const show_update = ref(false);
const show_draw = ref(false);
const is_sidebar_open = ref(false);




function showSideBar() {
  is_sidebar_open.value = true;


}
const search = ref("");

function toggle() {
  show_dialog.value = !show_dialog.value;
}
</script>

<template>
  <section class="flex justify-between">
    <div class="flex-1 mr-4 relative">
      <div class="flex items-center">
        <input
          v-model.trim="search"
          type="text"
          class="border border-gray-300 h-10 rounded-lg px-4 pl-10 font-rubik text-sm focus:border-gray-400 border-0.5 outline-none w-full"
          placeholder="Search..."
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
      <DarButton class="min-w-40 mr-2" @click="toggle">
        <i class="mr-2 fa-solid fa-plus"></i> Add Land Owner</DarButton
      >
      <!--          
            
          <DarButton  class="min-w-40 mr-2 " @click="show_actual = true">
            <i class="fa-solid fa-file-contract mr-2 "></i> Actual </DarButton
          >
             -->
    </div>
  </section>
  <div class="mt-4">
    <!-- <div class="flex items-center justify-between"> 
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
       
      </div> -->
  </div>

  <div class="mb-20">
    <DarTable   @click="showSideBar"  @showDetails="show_details = true" @showDraw="show_draw = true"> </DarTable>
    
  </div>

  <LotForm :isOpen="show_dialog" @close="show_dialog = false" />


</template>
<script>
import adminlayout from "../layouts/adminlayout.vue";
export default {
  layout: adminlayout,
};
</script>

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

.ctd {
  min-width: 260px;
}
</style>
