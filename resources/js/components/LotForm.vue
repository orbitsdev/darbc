<script setup>
import { ref, onMounted, defineProps, defineComponent, defineEmits, watch } from "vue";

import LotForm from "@/components/LotForm.vue";
import FormStep from "@/components/FormStep.vue";
import { router } from '@inertiajs/vue3'
import { useForm } from "@inertiajs/vue3";


import moment from 'moment';


let props = defineProps({
  is_open: {
    type: Boolean,
    default: false,
  },
  is_updating: {
    type: Boolean,
    default: false,
  },


});



const tabs = ref([
  {
    index: 1,
    title: "Basic Information",
    active: false,
    completed: false,
  },
  {
    index: 2,
    title: "Actual Information",
    active: false,
    completed: false,
  },
  {
    index: 3,
    title: "Tax Information",
    active: false,
    completed: false,
  },
  {
    index: 4,
    title: "Amortization",
    active: false,
    completed: false,
  },
]);

const selected_tab = ref(1);

defineComponent({
  LotForm,
  FormStep,
});

const emit = defineEmits(["close"]);

function changeTab(tab) {
  tabs.value.forEach((element) => {
    element.active = false;
  });

  tab.active = true;

  selected_tab.value = tab.index;
}


const form = useForm({
  is_updating: false,
  no: '',
  lot_no: '',
  survey_no: '',
  title_area: '',
  awarded_area: '',
  previous_land_owner:'',
  field_no: '',
  location:'',
  municipality:'',
  title:'',
  cloa_no:'',
  page:'',
  encumbered_area:'',
  encumbered_variance:'',
  previous_copy_of_title_type:'',
  previous_copy_of_title_no:'',
  title_status:'',
  title_copy:'',
  remarks:'',
  status:'',
  land_bank_amortization:'',
  amount:'',
  date_paid:  moment().format('YYYY-MM-DD'),
  date_cert:  moment().format('YYYY-MM-DD'),
  ndc_direct_payment_scheme:'',
  ndc_remarks:'',
  notes:'',

});




function save(){
  form.post('/lot', {
    preserveScroll: true,
    
    onSuccess: () => {
      form.reset();
      emit('close');
    },
    onFinish: () => {

    },
  });
}
</script>

<template>
  <DarDialog :isOpen="props.is_open" :contentClass="'bg-white p-4'" :width="'560'">
    <div class="dardialog overflow-y-auto mb-4">
      <!-- <StepForm/>

 -->

      <div class="sticky top-0 bg-white z-30 w-full">
        <!-- <nav class="" aria-label="Progress">
    <ol role="list" class="rounded-md border lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
     <SterpCard  v-for="tab in tabs" :key="tab"  :index="tab.index"  :title="tab.title" :active="tab.active" />
    </ol>
  </nav> -->
      </div>

      <section class="p-2">
        <div class=" ">
          <h3 class="text-base font-semibold leading-6 text-gray-900 uppercase">
            Basic Information
          </h3>
        </div>

        <div class="rounded-lg mt-2 p-4 border bg-gray-50">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6">
              <label for="first-name" class="block text-sm font-medium text-gray-700"
                >No.</label
              >
              <InputField  v-model="form.no"/>
              <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.no"> {{ $page.props.errors.no }} </p>
            </div>

            <div class="col-span-6">
              <label for="last-name" class="block text-sm font-medium text-gray-700"
                >Lot No.</label
              >

              <InputField  v-model="form.lot_no"/>
                            <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.lot_no"> {{ $page.props.errors.lot_no }} </p>

            </div>

            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Surver No.</label
              >
               <InputField   v-model="form.survey_no"/>
                             <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.survey_no"> {{ $page.props.errors.survey_no }} </p>

            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Title Area Has.S</label
              >



                             <InputField  v-model="form.title_area"/>
              <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.title_area"> {{ $page.props.errors.title_area }} </p>


            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Awarded Area Has.S</label
              >



                             <InputField  v-model="form.awarded_area"/>
              <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.title_area"> {{ $page.props.errors.title_area }} </p>


            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Previous Land Owner</label
              >



                             <InputField :placeholder="''"  v-model="form.previous_land_owner"/>

                                           <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.previous_land_owner"> {{ $page.props.errors.previous_land_owner }} </p>


            </div>
            <!-- <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Previouse Land Owner
              </label>
                <InputField v-model="form.previous_land_owner"/>
            </div> -->
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Field No.
              </label>
                            <InputField v-model="form.field_no"/>

                                          <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.field_no"> {{ $page.props.errors.field_no }} </p>


            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Location
              </label>
                                          <InputField v-model="form.location"/>

                                                        <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.location"> {{ $page.props.errors.location }} </p>


            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Municipality
              </label>
             
             <InputField v-model="form.municipality"/>

                           <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.municipality"> {{ $page.props.errors.municipality }} </p>


            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Title
              </label>    


                          <InputField v-model="form.title"/>

                           <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.title"> {{ $page.props.errors.title }} </p>



            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Cloa No.
              </label>
                           <InputField v-model="form.cloa_no"/>

              <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.cloa_no"> {{ $page.props.errors.cloa_no }} </p>

            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700">
                Page
              </label>
                       <InputField v-model="form.page"/>

                                     <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.page"> {{ $page.props.errors.page }} </p>

 
            </div>

            <div class="col-span-6">
              <p class="block text-sm font-medium text-gray-700">Encumbered</p>
              <div class="grid grid-cols-6 gap-6 mt-2">
                <div class="col-span-3 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Area</label
                  >
               <InputField v-model="form.encumbered_area"/>

                             <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.encumbered_area"> {{ $page.props.errors.encumbered_area }} </p>

 
                </div>
                <div class="col-span-3 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Variance</label
                  >
                 
                   <InputField v-model="form.encumbered_variance"/>

                                 <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.encumbered_variance"> {{ $page.props.errors.encumbered_variance }} </p>

                </div>
              </div>
            </div>
            <div class="col-span-6">
              <!-- <p class="block text-sm font-medium text-gray-700"></p> -->
              <div class="grid grid-cols-6 gap-6 mt-2">
                <div class="col-span-3 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Previous copy of title type</label
                  >

                  <InputField v-model="form.previous_copy_of_title_type"/>

                                <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.previous_copy_of_title_type"> {{ $page.props.errors.previous_copy_of_title_type }} </p>

                </div>
                <div class="col-span-3 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Previous copy of title no.</label
                  >

                  <InputField v-model="form.previous_copy_of_title_no"/>
                                <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.previous_copy_of_title_no"> {{ $page.props.errors.previous_copy_of_title_no }} </p>

                </div>
              </div>
            </div>
            <div class="col-span-6">
              <div class="grid grid-cols-6 gap-6 mt-2">
                <div class="col-span-6 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Title Status</label
                  >

                  <InputField v-model="form.title_status"/>

                                <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.title_status"> {{ $page.props.errors.title_status }} </p>

                </div>
                <div class="col-span-6 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Title Copy</label
                  >

                  <InputField v-model="form.title_copy"/>

                                <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.title_copy"> {{ $page.props.errors.title_copy }} </p>

                </div>
                  <div class="col-span-6">
                  <label for="country" class="block text-sm font-medium text-gray-700"
                    >Remarks</label
                  >
                  <div class="mt-1">
                    <div>
                      <div class="mt-1">
                        <textarea
                        v-model="form.remarks"
                          rows="4"
                          class="block w-full rounded-md border p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>

                                      <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.remarks"> {{ $page.props.errors.remarks }} </p>

                      </div>
                    </div>
                  </div>
                </div>
                  <div class="col-span-6">
                  <label for="country" class="block text-sm font-medium text-gray-700"
                    >Status</label
                  >
                  <div class="mt-1">
                    <div>
                      <div class="mt-1">
                        <textarea
                        v-model="form.status"
                          rows="4"
                          class="block w-full rounded-md border p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>

                                      <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.status"> {{ $page.props.errors.status }} </p>

                      </div>
                    </div>
                  </div>
                </div>
                 <div class="col-span-6 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Land Bank Amortization</label
                  >

                  <InputField v-model="form.land_bank_amortization"/>
                                <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.land_bank_amortization"> {{ $page.props.errors.land_bank_amortization }} </p>

                </div>
                 <div class="col-span-6 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Amount</label
                  >

                  <InputField v-model="form.amount"/>

                                <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.amount"> {{ $page.props.errors.amount }} </p>

                </div>
                 <div class="col-span-6 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Date Paid</label
                  >
                   

                  {{ form.date_paid }}

                  <input type="date" v-model="form.date_paid"    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                </div>
                 <div class="col-span-6 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Date Of Cert</label
                  >

                   {{ form.date_cert }}
                  <input type="date" v-model="form.date_cert"    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                </div>

                  <div class="col-span-6 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >NDC Direct Payment Scheme</label
                  >

                  <InputField v-model="form.ndc_direct_payment_scheme"/>
                                <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.ndc_direct_payment_scheme"> {{ $page.props.errors.ndc_direct_payment_scheme }} </p>

                </div>
                    <div class="col-span-6">
                  <label for="country" class="block text-sm font-medium text-gray-700"
                    >NDC REMARKS</label
                  >
                  <div class="mt-1">
                    <div>
                      <div class="mt-1">
                        <textarea
                        v-model="form.ndc_remarks"
                          rows="4"
                          class="block w-full rounded-md border p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>

                                      <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.ndc_remarks"> {{ $page.props.errors.ndc_remarks }} </p>

                      </div>
                    </div>
                  </div>
                </div>
                    <div class="col-span-6">
                  <label for="country" class="block text-sm font-medium text-gray-700"
                    >Notes</label
                  >
                  <div class="mt-1">
                    <div>
                      <div class="mt-1">
                        <textarea
                        v-model="form.notes"
                          rows="4"
                          class="block w-full rounded-md border p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>

                                      <p class="text-sm text-red-600 mt-1" v-if="$page.props.errors.notes"> {{ $page.props.errors.notes }} </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="p-2">
        <div>
          <h3 class="text-base font-semibold leading-6 text-gray-900 uppercase">
            Actual
          </h3>
        </div>

        <div class="rounded-lg mt-2 p-4 border bg-gray-50">
          <div class="grid grid-cols-6 gap-6">
            <div class="sm:col-span-6">
              <label for="country" class="block text-sm font-medium text-gray-700"
                >Land Status</label
              >
              <div class="mt-1">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Leased / Unplanted</option>
                  <option>Leased/Grower</option>
                  <option>Grower</option>
                  <option>Unplannted</option>
                </select>
              </div>
            </div>

            <div class="col-span-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-3 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Leased Area</label
                  >
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div class="col-span-3 rounded-lg">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Unplanted Area</label
                  >
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="sm:col-span-6">
                  <label for="country" class="block text-sm font-medium text-gray-700"
                    >Status</label
                  >
                  <div class="mt-1">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>TWC</option>
                      <option>TWOC</option>
                      <option>UWOC</option>
                      <option>UWC</option>
                    </select>
                  </div>
                </div>
                <div class="sm:col-span-6">
                  <label for="country" class="block text-sm font-medium text-gray-700"
                    >Remarks</label
                  >
                  <div class="mt-1">
                    <div>
                      <div class="mt-1">
                        <textarea
                          rows="4"
                          name="comment"
                          id="comment"
                          class="block w-full rounded-md border p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="p-2">
        <div>
          <h3 class="text-base font-semibold leading-6 text-gray-900 uppercase">TAX</h3>
        </div>

        <div class="rounded-lg mt-2 p-4 border bg-gray-50">
          <div class="grid grid-cols-6 gap-6">
            <div class="sm:col-span-6">
              <label for="country" class="block text-sm font-medium text-gray-700"
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

            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Area in title HA./S
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Tax Declaration
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Owner
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Market Value
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Assed Value
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Paid By
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Leased to Dolefil
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Tax payment
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="sm:col-span-6">
              <label for="country" class="block text-sm font-medium text-gray-700"
                >Year of Payment</label
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
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Offical Reciept
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="p-2">
        <div>
          <h3 class="text-base font-semibold leading-6 text-gray-900 uppercase">
            Land Amortization
          </h3>
        </div>

        <div class="rounded-lg mt-2 p-4 border bg-gray-50">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Amortization
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Amount
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Date Paid
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Date Cert
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >NDC DORECT PAYMENT SHEME
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >NDC REMARKS
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div class="col-span-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >NOTES
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autocomplete="email"
                class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </section> -->
    </div>
    <template #actions>
      <section class="flex justify-end mr-4">
        <DarButton
          @click="emit('close')"
          class="mr-4"
          :color="'border  bg-white shadow hover:bg-gray-300 hover:dr-text-purple-900'"
        >
          Close</DarButton
        >


          <SaveButton @click="save" :processing="form.processing" v-if="props.is_updating === false"> Save </SaveButton>

        <!-- <DarButton v-if="props.is_updating === false" >
          Save</DarButton
        > -->
        <DarButton v-else @click="showDialog = false"> Update</DarButton>
      </section>
    </template>
  </DarDialog>
</template>

<style lang="scss" scoped></style>
