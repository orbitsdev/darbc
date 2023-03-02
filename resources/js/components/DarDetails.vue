<script setup>
import { ref, onMounted, defineProps, defineComponent, defineEmits } from "vue";



import LotForm from '@/components/LotFrom.vue';


let props = defineProps({
  is_open: {
    type: Boolean,
    default: false,
  }
});


defineComponent({
  LotForm,
});


const emit = defineEmits(['close_details']);


const is_lotform_open = ref(false);


const selected_item = ref(null);
const tax_items = ref([
  {
    id: 1,
    area_title: "10.6291",
    tax_decleration: "M-0701556",
    owner: "DARBC",
    market_value: "5,600,350.00",
    assed_value: "2,236,910.00",
    tax_payment: "2,236,910.00",
    or: "REMEDIOS DE LEON",
  },
  {
    id: 2,
    area_title: "23.4424",
    tax_decleration: "M-0701552",
    owner: "NDC",
    market_value: "14 350.00",
    assed_value: "910.00",
    tax_payment: "6,242.00",
    or: "ANDRES DE LEON",
  },
  {
    id: 3,
    area_title: "10.6291",
    tax_decleration: "N-1700050",
    owner: "ALFONZO",
    market_value: "5,40",
    assed_value: "91310",
    tax_payment: "12.0849",
    or: "PANGANORON, CHARLIE V",
  },
]);

onMounted(() => {
  selected_item.value = tax_items.value[0];
});

function handleChange(e) {}

function closeForm(){
  console.log('close');

  is_lotform_open.value = false;
}
</script>
<template>
  <DarDialog
    :fullScreen="true"
    :contentClass="'bg-white'"
    :width="'970'"
    :isOpen="props.is_open"
  >
    <!-- <DarNavigation/> -->
    <div class="flex items-center justify-end">
      <DarButton
        :color="'cursor-pointer hover:scale-95 transition-all ease-in-out text-gray-400 hover:text-purple-700'"
        @click="emit('close_details')"
        class="mr-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-10 h-10"
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </DarButton>
    </div>

    <div class="grid grid-cols-12 mt-2">
      <div class="col-span-3 rounded-sm bg-white py-6 px-4">
        <div class="flex justify-center">
          <img src="/assets/sample1.jpg" alt="lot" class="h-60 w-80 rounded" />
        </div>
        <div>
          <div class="mt-4">
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <div
                class="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <p class="mb-2 font-bold text-gray-900 uppercase">Lot Documents</p>
            <ul
              role="list"
              class="divide-y divide-gray-200 rounded-md border border-gray-200"
            >
              <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                <div class="flex w-0 flex-1 items-center">
                  <svg
                    class="h-5 w-5 flex-shrink-0 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2 w-0 flex-1 truncate">Contract to sell.pdf</span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
                    >Download</a
                  >
                </div>
              </li>
              <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                <div class="flex w-0 flex-1 items-center">
                  <svg
                    class="h-5 w-5 flex-shrink-0 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2 w-0 flex-1 truncate">Certificate of Title.pdf</span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
                    >Download</a
                  >
                </div>
              </li>
              <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                <div class="flex w-0 flex-1 items-center">
                  <svg
                    class="h-5 w-5 flex-shrink-0 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2 w-0 flex-1 truncate">Certificate of Owner</span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
                    >Download</a
                  >
                </div>
              </li>
            </ul>
          </div>

          <div class="mt-4">
            <p class="mb-2 font-bold text-gray-900 uppercase">Other Documents</p>
            <ul
              role="list"
              class="divide-y divide-gray-200 rounded-md border border-gray-200"
            >
              <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                <div class="flex w-0 flex-1 items-center">
                  <svg
                    class="h-5 w-5 flex-shrink-0 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2 w-0 flex-1 truncate">Land.pdf</span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
                    >Download</a
                  >
                </div>
              </li>
              <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                <div class="flex w-0 flex-1 items-center">
                  <svg
                    class="h-5 w-5 flex-shrink-0 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2 w-0 flex-1 truncate">Tax.pdf</span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
                    >Download</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-span-9 h-full rounded-sm bg-white py-6 border rounded-xl shadow-lg">
        <section class="">
          <div class="flex items-center justify-between pr-6">
            <p class="font-rubik text-xl font-bold uppercase px-6">Basic Information</p>
            <DarButton 
            @click="is_lotform_open = true"
            class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Update</DarButton
            >
          </div>

          <ul role="list" class="divide-y divide-gray-200 border-gray-200">
            <li
              class="relative py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
            >
              <!-- <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Status</p>
              <div class="font-rubik text-black uppercase text-sm tex t-right">
                Unplanted
              </div>
            </div> -->
              <div class="">
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">No.</p>
                  <div
                    class="font-rubik text-black uppercase text-sm text-right rounded rounded"
                  >
                    1
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Lot No.</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">6</div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Surver No.</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    gss-390
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Title Area</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    12.08490
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Award Area</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    9.930123
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">
                    Previous Land Owner
                  </p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    Tomas Bayan
                  </div>
                </div>

                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Field No.</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    118b
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Barangay</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    polo
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Municipality</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    polomolok
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Title</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    t-1
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Cloa No.</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">1</div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Page</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    None
                  </div>
                </div>

                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Encumbered</p>
                  <div class="lg:w-24 font-rubik mb-1">
                    <p class="text-sm text-gray-900">Area</p>
                    <p class="text-sm text-black fot-rubik">97.087</p>
                  </div>
                  <div class="lg:w-24 font-rubik mb-1">
                    <p class="text-sm text-gray-900">Variance</p>
                    <p class="text-sm uppercase">None</p>
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Previous Copy of Title </p>
                  <div class="lg:w-24 font-rubik ">
                    <p class="text-sm text-gray-900 mb-1 " >Type of title</p>
                    <p class="text-sm text-black fot-rubik">TCT</p>
                  </div>
                  <div class="lg:w-24 font-rubik ">
                    <p class="text-sm text-gray-900  mb-1 ">No.</p>
                    <p class="text-sm uppercase"> T-13716</p>
                  </div>
                </div>

                  <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">TITLE</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    TWC
                  </div>
                </div>
                  <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">TITLE</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                 Affidavit of Loss (Mismatch )
                  </div>
                </div>
                
              </div>
            </li>
          </ul>
        </section>
        <section class=" ">
          <div class="px-6">
            <p class="font-rubik text-xl font-bold uppercase">Actual</p>
          </div>
          <ul role="list" class="divide-y divide-gray-200 border-gray-200">
            <li
              class="relative py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
            >
              <!-- <div class="">
             <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Land Status</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  "> Unplantded</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Unplanted Area</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right ">41.7065</div>
                </div>
               
          </div>
          <div class="">
             <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Land Status</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  "> Leased</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Leased Area</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right ">71.7065</div>
                </div>
               
          </div> -->
              <div class="">
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Land Status</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    Leased/Unplanted
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Leased Area</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    82.7065
                  </div>
                </div>

                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">
                    Unplanted Area
                  </p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    247.233
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Status</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    TWOC
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Remarks</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    AREAS NOT PLANTED TO P/A AS AGREED W/ DFL & DARBC
                  </div>
                </div>
              </div>

              <!-- <div class="">
             <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Land Status</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  "> Unplantded</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Unplanted Area</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right ">41.7065</div>
                </div>
          </div>

          <div class="">
             <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Land Status</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  "> Grower</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Grower Area</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right ">41.7065</div>
                </div>
               
          </div>
          <div class="">
             <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Land Status</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  "> Grower / Leased</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Grower Area</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right ">41.7065</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Leased Area</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right ">5.17065</div>
                </div>
               
          </div>
          <div class="">
             <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Land Status</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  "> Grower / Unplannted</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Grower Area</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right"></div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-600">Leased Area</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right ">5.17065</div>
                </div>
               
          </div> -->
            </li>
          </ul>
        </section>
        <section class=" ">
          <div class="px-6">
            <p class="font-rubik text-xl font-bold uppercase">Tax</p>

            <select
              @change="handleChange($event)"
              id="location"
              name="location"
              class="w-40 border mt-4 block rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option :value="1">2023</option>
              <option :value="2">2022</option>
              <option :value="3">2021</option>
            </select>
          </div>
          <ul role="list" class="divide-y divide-gray-200 border-gray-200">
            <li
              class="relative py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
            >
             <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Year</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                  2023
                  </div>
                </div>
              <div class="" v-if="selected_item != null">
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">
                   Area in Title HA./S
                  </p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    {{ selected_item.area_title }}
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">
                    Tax Declaration No.
                  </p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    {{ selected_item.tax_decleration }}
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Owner</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    {{ selected_item.owner }}
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Market Value</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                 ₱   {{ selected_item.market_value }}
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Assesed Value</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                   ₱ {{ selected_item.assed_value }}
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Paid By</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                      Dolefile
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Leased To Dolefil</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    10.6291
                  </div>
                </div>
               
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Tax Payment</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
               ₱ 5456.64
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Year of Payment</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                2023
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Official Reciept</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                       229436
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section class=" ">
          <div class="px-6">
            <p class="font-rubik text-xl font-bold uppercase">Land Amortization</p>

            <ul role="list" class="divide-y divide-gray-200 border-gray-200">
              <li
                class="relative py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
              >
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Amortization </p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                        FULLY PAID
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600"> AMOUNT </p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                     ₱ 124,985.6
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Date Paid</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    March 1, 2023
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">Date of Cert</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    April 7, 2023
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">
                    NDC DIRECT PAYMENT SCHEME
                  </p>
                  <div class="font-rubik text-black uppercase text-sm text-right bg-green-600 text-white px-2 rounded ">

                  FULLY PAID
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">NDC REMARKS</p>
                  <div class="font-rubik text-black uppercase text-sm text-right">
                    March 24, 2023
                  </div>
                </div>
                <div class="flex items-start border-b py-2">
                  <p class="lg:w-48 border-r mr-2 text-sm text-gray-600">NOTES</p>
                  <div class="font-rubik text-black uppercase text-sm left ">
                    DEED OF SALE (ALFREDO RADAZA-NDC) ORIGINAL CERTIFICATE TITLE P-21334 5 HA. IN DEED OF SALE AND 3.6HA IN DEED OF AWARD AND TRANSFER 1.4 HA LEASED CONTRACT TO DOLEFIL BETWEEN RADAZA. 
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div class="mb-20"></div>
    </div>
  </DarDialog>

  <LotForm :is_open="is_lotform_open" @close="closeForm" :is_updating="true" />
</template>

<script></script>

<style lang="scss" scoped></style>
