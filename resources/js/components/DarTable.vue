





<script setup>
  import {ref, defineEmits, defineComponent, defineProps} from 'vue';


const props = defineProps({
  items: Object,
});

  const  items = ref([1, 2, 3, 4, 5,1, 2, 3, 4, 6,7,8,0,2,3]);




  
  const emit = defineEmits(['itemClick','showDetails','showUpdate', 'showDraw']);


  const show_details = ref(false);

</script>

<template>


    <section  class=" dartable overflow-x-auto ">
        <table class=" w-full overflow-y-auto overflow-x-auto  divide-y divide-gray-600 table-auto">
          <thead
            class="sticky  top-0 dr-bg-purple-active text-gray-300   divide-y divide-gray-200 bg-white"
          >
            <tr class=" divide-y divide-gray-600 divide-x  top-0 dr-bg-purple-active">
              <th class="text-center text-sm font-roboto uppercase">No.</th>
              <th class="text-center text-sm font-roboto uppercase">Lot#</th>
              <th class="cth text-center text-sm font-roboto uppercase">Survey No.</th>
              <th class="text-center text-sm font-roboto uppercase">Title Area</th>
              <th class="text-center text-sm font-roboto uppercase">Awarded Area</th>
              <th class="text-center text-sm font-roboto uppercase ">Previous </th>
              <th class="text-center text-sm font-roboto uppercase">Field</th>
              <th class="cth text-center text-sm font-roboto uppercase">Location</th>
              <th class="cth text-center text-sm font-roboto uppercase">Municipality</th>
              <th class="text-center text-sm font-roboto uppercase">Title</th>
              <th class="text-center text-sm font-roboto uppercase">Cloa No</th>
              <th class="text-center text-sm font-roboto uppercase">Page</th>
              <th class="cth text-center text-sm font-roboto uppercase">Encombered</th>
              <th class="cth text-center text-sm font-roboto uppercase">Previous Copy of title</th>
          
              <th class="text-center text-sm font-roboto uppercase">Title</th>
              <th class="text-center text-sm font-roboto uppercase">Title</th>
              <th class="text-center text-sm font-roboto uppercase">Remarks</th>
              <th class="text-center text-sm font-roboto uppercase">Status</th>
              <th class="text-center text-sm font-roboto uppercase">Land Bank</th>
              <th class="text-center text-sm font-roboto uppercase">Amount</th>
              <th class="text-center text-sm font-roboto uppercase">Date Paid</th>
              <th class="text-center text-sm font-roboto uppercase">Date Cert</th>
              <th class="text-center text-sm font-roboto uppercase">NDC</th>
              <th class="text-center text-sm font-roboto uppercase">NDC</th>
              <th class="text-center text-sm font-roboto uppercase">Notes</th>
              <th class="text-center text-sm font-roboto uppercase"></th>
            </tr>
            <tr class="sticky divide-y divide-gray-600  divide-x  top-0 dr-bg-purple-active">
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase">Has./s</th>
              <th class="text-center text-sm font-roboto uppercase">Has./s</th>
              <th class="text-center text-sm font-roboto uppercase ">Land Owner</th>
              <th class="text-center text-sm font-roboto uppercase">No.</th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase">No.</th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase">
                <section class="grid grid-cols-2">
                  <div class="flex items-center justify-center ">
                    <p class="text-left">Area</p>
                  </div>
                  <div class=" ">
                    <p class="flex items-center justify-center ">Variance</p>
                  </div>

                </section>
              </th>

               <th class="cth text-center text-sm font-roboto uppercase">
                <section class="grid grid-cols-2">
                  <div class="flex items-center justify-center ">
                    <p class="leading-4 text-center">Type Of Title</p>
                  </div>
                  <div class="flex items-center justify-center ">
                    <p class="leading-4  "> No.</p>
                  </div>

                </section>
              </th>

              <th class="text-center text-sm font-roboto uppercase">Status</th>
              <th class="text-center text-sm font-roboto uppercase">Copy</th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase">Amortization</th>
              <th class="text-center text-sm font-roboto uppercase">php</th>
              <th class="text-center text-sm font-roboto uppercase">Month Day Year</th>
              <th class="text-center text-sm font-roboto uppercase">Month Day Year</th>
              <th class="text-center text-sm font-roboto uppercase">Direct Payment Scheme</th>
              <th class="text-center text-sm font-roboto uppercase">Remarks</th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase"></th>
            </tr>
          </thead>
          <tbody class="bg-white  divide-gray-600">
            <tr @dblclick="show_details = true"  class="divide-x cursor-pointer hover:bg-purple-200 transition-all   " v-for="(item, index) in items" :key="item" :class="[index % 2 ===0 ? '':'bg-gray-100']">
                <td class="text-center text-sm font-roboto uppercase ">16</td>
                <td class="text-center text-sm font-roboto uppercase ">25</td>
                <td class="ctd text-center text-sm font-roboto uppercase ">SWO-11-000012</td>
                <td class="text-center text-sm font-roboto uppercase ">3.8129</td>
                <td class="text-center text-sm font-roboto uppercase ">3.8129</td>
                <td class="ctd text-center text-sm font-roboto uppercase leading-4 ">DATU GOYMON GALCAN (OCT)/ WILFREDO PORTALISA (QUITCLAIM)</td>
                <td class="text-center text-sm font-roboto uppercase ">108F</td>
                <td class="ctd text-center text-sm font-roboto uppercase  ">Tupi</td>
                <td class="ctd text-center text-sm font-roboto uppercase ">Polomolok </td>
                <td class="text-center text-sm font-roboto uppercase ">p-623</td>
                <td class="text-center text-sm font-roboto uppercase ">No CLOA</td>
                <td class="text-center text-sm font-roboto uppercase ">e</td>
                <td class="text-center text-sm font-roboto uppercase ">
                  <section class="flex justify-center items-center">
                    <div class="w-24 text-center ">
                      <p>21.97892</p>
                    </div>
                    <w-divider class="mx-2 bg-gray-100" vertical color=""></w-divider>
                    <div class="w-24 text-center   ">
                     <p>0.001</p>
                    </div>

                  </section>
                </td>
                <td class="text-center text-sm font-roboto uppercase ">
                  <section class="flex justify-center items-center">
                    <div class="w-24 text-center ">
                      <p>OCT</p>
                    </div>
                    <w-divider class="mx-2 bg-gray-100" vertical color=""></w-divider>
                    <div class="w-24 text-center  ">
                   <p>P-17221</p>
                    </div>

                  </section>
                </td>

              <td class="text-center text-sm font-roboto uppercase ">TWOC</td>
              <td class="ctd text-center text-sm font-roboto uppercase ">Affidavit of Loss (Mismatch) </td>
              <td class="ctd text-center text-sm font-roboto uppercase ">COMPROMISE AGREEMENT WITH BL'AAN </td>
              <td class="ctd text-center text-sm font-roboto uppercase ">STATION 5- 0.78 </td>
              <td class="ctd text-center text-sm font-roboto uppercase ">Fully Paid</td>
              <td class="ctd text-center text-sm font-roboto uppercase "> ₱ 96,880.00</td>
              <td class="ctd text-center text-sm font-roboto uppercase "> 2/8/2018</td>
              <td class="ctd text-center text-sm font-roboto uppercase "> 12/9/2021</td>
              <td class="ctd text-center text-sm font-roboto uppercase "> Fully paid</td>
              <td class="ctd text-center text-sm font-roboto uppercase "> GV-92-0006 PAID TO LANDBANK </td>
              <td class="ctdlng text-center text-sm font-roboto  leading-4 p-4"> 11.9678.71 PER TITLE,  With CLOA P-624-A issued to DARBC. Patentee Claimant-Valentin Coling, subject of DARAB Order in re: XI-049-SC-94 ordering the exclusion of Lot 43, Gss-211 from the coverage of CLOA No. 00001013and OCT P-624.as annotated at the back of the title  under Entry No.5591 dated Feb. 2, 1995; leased by Dole to Valentin Coling and to DARBC (DAR REMARKS) </td>
              <td class="text-center text-gray-700 text-sm font-roboto uppercase">

              <div class="flex items-center justify-center py-1">
              <!-- <button class=" bg-purple-200 mx-1  h-8 w-8 hover:bg-purple-900 hover:text-white flex items-center justify-center rounded  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                
                
              </button> -->
              <!-- <button  @click="emit('showDraw')" class=" bg-purple-200 mx-1  h-8 w-8 hover:bg-purple-900 hover:text-white flex items-center justify-center rounded  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">                 <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                
              </button> -->
              <button @click="emit('showDetails')" class="py-2 bg-gray-300 mx-1  px-2 hover:bg-purple-900 hover:text-white flex items-center justify-center rounded  ">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg> -->
<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 w-6 h-6 mr-1">
  <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 17.25a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zm2.25-3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-5.25z" clip-rule="evenodd" />
  <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
</svg> -->


                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-1">
  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
  <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
</svg>
     
                 View
                
              </button>
              <!-- <button @click="emit('showUpdate')" class=" bg-purple-200 mx-1  h-8 w-8 hover:bg-purple-900 hover:text-white flex items-center justify-center rounded  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
6                 <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
                
              </button> -->
              
            </div>
          </td> 
              </tr>
            
          </tbody>
        </table>
      </section>

      <Pagination   :links="items.links" class="mt-4"/>

        <DarDetails :is_open="show_details" @close_details="show_details = false"/>
</template>

<script>
   
</script>

<style lang="scss" scoped>

</style>