
<script setup>
    import {ref} from 'vue'

    const items = ref([1,2,3,4,5]);
</script>

<template>
  <main class="px-6">
    <DarNavigation/>

    <section class="flex justify-between">
            <div class="flex-1 mr-4">
                <input type="text" class="border border-gray-300  h-10 rounded-lg px-4 font-rubik text-sm focus:border-gray-400 border-0.5  outline-none  w-full" placeholder="Searc.. "> 
            </div>
            <div>
                <DarButton> <i class="fa-solid fa-plus mr-2 "></i> Add Land Owner</DarButton>
            </div>
    </section>

    <section class="mt-6 overflow-x-auto pb-2">
        <table class=" divide-y divide-gray-600 table-auto ">
            <thead class="dr-bg-purple-active text-gray-300  divide-y divide-gray-200 bg-white ">
              <tr class=" divide-x divide-y  divide-gray-600" >
                <th  class="  text-center  text-sm font-roboto uppercase ">  No </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Lot# </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Survey no. </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Title Area </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Awarded Area </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Previous </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Field No. </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Location  </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Municpality  </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Title </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  CLOA </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Page </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Encumbered </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Previouse Copy of title </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Title Title </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Remakrs </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Status </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Land Banck </th>
                
                <!-- <th  class="  text-center  text-sm font-roboto uppercase ">  Date Paid </th>
                    <th  class="  text-center  text-sm font-roboto uppercase ">  Amount </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Date Cert </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Ndc </th>
                <th  class="  text-center  text-sm font-roboto uppercase ">  Notes </th>
              </tr>
              <tr class="divide-x divide-gray-200 dr-bg-purple-light ">
                <th  class="drth text-center  text-sm font-roboto uppercase ">   </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">   </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">   </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  has./s </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  has./s </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  land owner </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  No. </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">    </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">   </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  No </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">   </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">
                    <section class="grid grid-cols-2 w-full">
                        <aside  class="drth text-center  text-sm font-roboto uppercase ">  Area </aside>
                        <aside  class="drth text-center  text-sm font-roboto uppercase "> Variance </aside>
                    </section> 
                    Area | Variance
                    </th>
               
                <th  class="drth text-center  text-sm font-roboto uppercase ">  Type title | no </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  status | copy </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">   </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">   </th>
                <th  class="drth text-center  text-sm font-roboto uppercase "> AMORTIZATION </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  php </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  month day year </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  month day year </th>
                <th  class="drth text-center  text-sm font-roboto uppercase ">  direct payment sheme</th>
                <th  class="drth text-center  text-sm font-roboto uppercase "> </th> -->
              </tr>
             
            </thead>
            <tbody class="bg-white">
                <tr class=" divide-x divide-gray-200 align-top" v-for="item in items" :key="item">
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  101</td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  42 </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  gsss-211 </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  11 7931 </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  12 </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">   (VICENTE LIMBANA) ROGELIO ALFARAS, JR</td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  2056/2064. </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  POLO </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  POlomolok  </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  p-626 </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  1012 </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  a </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase "> 

                        11.7437 | 11.7437 

                    <!-- <section class="grid grid-cols-2  ">
                        <aside  class=" text-center  text-sm font-roboto uppercase ">  11.7437 </aside>
                        <aside  class=" text-center  text-sm font-roboto uppercase "> 0.2464 </aside>
                    </section>  -->
                    </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase "> oct | 873123  </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  UWC | Affidavit of Loss (Mismatch) </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  COMPROMISE AGREEMENT WITH B'LAAN</td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  CANCELLED LOAN  </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  Fully paid </td>
                    <!-- <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  3335,555 </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  Date Paid </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  01/20/2020 </td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase ">  Fully paid</td>
                    <td  class=" text-center text-gray-700  text-sm font-roboto uppercase "> 1.9678.71 PER TITLE,  With CLOA P-624-A issued to DARBC. Patentee Claimant-Valentin Coling, subject of DARAB Order in re: XI-049-SC-94 ordering the exclusion of Lot 43, Gss-211 from the coverage of CLOA No. 00001013and OCT P-624.as annotated at the back of the title  under Entry No.5591 dated Feb. 2, 1995; leased by Dole to Valentin Coling and to DARBC (DAR REMARKS)</td> -->
                  </tr> 
             </tbody>
          </table>
    </section>
  </main>
</template>


<style scoped>
th {
    min-width: 100px;

    white-space: nowrap; 
    padding: 16px 24px;
 }

 .drth{

    max-width: 300px;
  
    white-space: nowrap;
  
    padding: 4px 8px;
    
 }
td {
    min-width: 100px !important;
    max-width: 600px !important;
    padding: 8px 8px;
 }
</style>
