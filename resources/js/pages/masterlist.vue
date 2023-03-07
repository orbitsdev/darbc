



<script setup>
import { ref, defineComponent, defineProps } from "vue";

import LotForm from "@/components/LotForm.vue";



import { router } from '@inertiajs/vue3';

import { useForm } from '@inertiajs/vue3'

const form = useForm({
  folder: '',
  file_name: '',
  file_type: '',

})

// router.post('/companies', data, {
//   errorBag: 'createCompany',
// })

// router.post('/users', data, {
//   errorBag: 'createUser',
// })


const props = defineProps({
  items: Object,
  // filters: Object,
});

const items = ref(props.items);
const search = ref("");

const show_dialog = ref(false);
const show_search = ref(false);

const show_actual = ref(false);
const show_update = ref(false);
const show_draw = ref(false);
const is_file_upload = ref(true);
const is_sidebar_open = ref(false);

const lands = ref([]);

function showSideBar() {
  is_sidebar_open.value = true;
}

function toggle() {
  show_dialog.value = !show_dialog.value;


}

function handelFilePath(file){

  if(file!= null){

    
     form.folder = file.folder;
     form.file_name = file.file_name;
     form.file_type = file.file_type;
  }
  
  // console.log(filepath);
   
}

function handleFileRemove(){
  form.reset();
}

function importFile(){


  form.post(route('file.import'),{
    onSuccess: ()=> {
        form.reset();
        is_file_upload.value = false;
    },
  });


}
</script>

<template>
  <!-- {{ items.data }} -->

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
      <DarButton class="min-w-40 mr-2" @click="toggle"
        ><i class="mr-2 fa-solid fa-plus"></i> Add Land Owner</DarButton
      >
      <DarButton class="min-w-40 mr-2" @click="is_file_upload = true"
        ><i class="mr-2 fa-solid fa-file-arrow-up"></i> Import</DarButton
      >
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
    <DarTable
      :items="props.items"
      @click="showSideBar"
      @showDetails="show_details = true"
      @showDraw="show_draw = true"
    >
    </DarTable>
  </div>

  <LotForm :isOpen="show_dialog" @close="show_dialog = false" />

  <DarDialog :isOpen="is_file_upload" :contentClass="'bg-white p-4'" :width="'560'">

  <p class="mb-2"> Csv Or Excel</p>
    <div class="dardialog overflow-y-auto ">

      
     <FileUploadBase @fileuploaded="handelFilePath" @fileRemove="handleFileRemove" :file_type="'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/csv'" /> 
      
      <section class="flex justify-end mr-4">
        <DarButton
          @click="is_file_upload = false"
          class="mr-4 h-10"
          :color="'border bg-white shadow hover:bg-gray-300 hover:dr-text-purple-900'"
        >
          Close</DarButton
        >




        <!-- <DarButton v-if="props.is_updating === false" >
          Save</DarButton
        > -->

        <SaveButton v-if="form.folder != ''" :processing="form.processing" @click="importFile"> Import </SaveButton>
      </section>
    </div>
  </DarDialog>
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
