

<template>
    <section id="darscroll" class=" dartable overflow-x-auto ">
        <table class=" w-full overflow-y-auto overflow-x-auto  divide-y divide-gray-600 table-auto">
          <thead
            class="sticky  top-0 dr-bg-purple-active text-gray-300 divide-y divide-gray-200 bg-white"
          >
            <tr class=" divide-y divide-gray-600  top-0 dr-bg-purple-active">
              <th class="text-center text-sm font-roboto uppercase">DOLPHIL</th>
              <th class="text-center text-sm font-roboto uppercase">Manage by</th>
              <th class="text-center text-sm font-roboto uppercase">Other Area</th>
              <th class="text-center text-sm font-roboto uppercase">Status</th>
              <th class="text-center text-sm font-roboto uppercase">Remarks</th>
              <th class="text-center text-sm font-roboto uppercase">Gross Area</th>
              <th class="text-center text-sm font-roboto uppercase">Planted Area</th>
              <th class="text-center text-sm font-roboto uppercase">Gully</th>
              <th class="text-center text-sm font-roboto uppercase">Total Area</th>
              <th class="text-center text-sm font-roboto uppercase">Facility</th>
              <th class="text-center text-sm font-roboto uppercase">Unutilized</th>
              
            </tr>
            <tr class="sticky divide-y divide-gray-600  top-0 dr-bg-purple-active">
              <th class="text-center text-sm font-roboto uppercase">Leased</th>
              <th class="text-center text-sm font-roboto uppercase">Darbc grower</th>
              <th class="text-center text-sm font-roboto uppercase">owned by darbc but not planted</th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase "></th>
              <th class="text-center text-sm font-roboto uppercase">Area</th>
              <th class="text-center text-sm font-roboto uppercase">Area</th>
              <th class="text-center text-sm font-roboto uppercase">Area</th>
              <th class="text-center text-sm font-roboto uppercase">Area</th>
              <th class="text-center text-sm font-roboto uppercase">Area</th>

              
            </tr>
          </thead>
          <tbody class="bg-white  divide-gray-600">
            <tr class="divide-x cursor-pointer hover:bg-purple-200 transition-all   " v-for="(item, index) in items" :key="item" :class="[index % 2 ===0 ? '':'bg-gray-100']">
                <td class="text-center text-sm font-roboto uppercase ">14.3905</td>
                <td class="text-center text-sm font-roboto uppercase "></td>
                <td class="text-center text-sm font-roboto uppercase ">24.49</td>
                <td class="ctd text-center text-sm font-roboto  ">Order of finality in favor of previous owner</td>
                <td class="ctd text-left leading-4 text-sm font-roboto ">Unplanted Agrred wit dar,darbc & dole</td>
                <td class="text-center text-sm font-roboto uppercase "></td>
                <td class="text-center text-sm font-roboto uppercase ">3.33</td>
                <td class="text-center text-sm font-roboto uppercase  "></td>
                <td class="text-center text-sm font-roboto uppercase ">3.2123</td>
                <td class="text-center text-sm font-roboto uppercase "></td>
                <td class="text-center text-sm font-roboto uppercase "></td>
                
              </tr>
            
          </tbody>
        </table>
      </section>
</template>

<script>
    export default {
        imits: ['itemClick','showDetails','updateDetails', 'showDraw'],
        data() {
            return {
                 items: [1, 2, 3, 4, 5,1, 2, 3, 4, 51, 2, 3, ],
            }
        },
    }
</script>

<style lang="scss" scoped>
th {


    white-space: nowrap;
    padding: 8px 16px;
  }

td{
    padding:6px 4px ;
}

.ctd{
  white-space: nowrap;
 }

.dartable{
    max-height: 75vh;
}
  
#darscroll::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #f5f5f5;
  }
  #darscroll::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  #darscroll:hover::-webkit-scrollbar-thumb {
    opacity: 1;
  }
  
  #darscroll:hover::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #f5f5f5;
  }
  
  #darscroll:hover::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 4px;
  }
  
  #darscroll:hover::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;
  }
</style>