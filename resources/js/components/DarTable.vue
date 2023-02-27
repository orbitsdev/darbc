

<template>
    <section id="darscroll" class=" dartable overflow-x-auto ">
        <table class=" w-full overflow-y-auto overflow-x-auto  divide-y divide-gray-600 table-auto">
          <thead
            class="sticky  top-0 dr-bg-purple-active text-gray-300 divide-y divide-gray-200 bg-white"
          >
            <tr class=" divide-y divide-gray-600  top-0 dr-bg-purple-active">
              <th class="text-center text-sm font-roboto uppercase">No</th>
              <th class="text-center text-sm font-roboto uppercase">Lot#</th>
              <th class="text-center text-sm font-roboto uppercase">Survey</th>
              <th class="text-center text-sm font-roboto uppercase">Title Area</th>
              <th class="text-center text-sm font-roboto uppercase">Awarded Area</th>
              <th class="text-center text-sm font-roboto uppercase ">Previous </th>
              <th class="text-center text-sm font-roboto uppercase">Field</th>
              <th class="text-center text-sm font-roboto uppercase">Location</th>
              <th class="text-center text-sm font-roboto uppercase">Municipality</th>
              <th class="text-center text-sm font-roboto uppercase">Title</th>
              <th class="text-center text-sm font-roboto uppercase">Cloa No</th>
              <th class="text-center text-sm font-roboto uppercase">Page</th>
              <th class="text-center text-sm font-roboto uppercase">Encombered</th>
              <th class="text-center text-sm font-roboto uppercase"></th>
            </tr>
            <tr class="sticky divide-y divide-gray-600  top-0 dr-bg-purple-active">
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase"></th>
              <th class="text-center text-sm font-roboto uppercase">No.</th>
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
                  <div class="w-100 ">
                    <p>Area</p>
                  </div>
                  <div class="w-100 ">
                    <p>Variance</p>
                  </div>

                </section>
              </th>
              <th class="text-center text-sm font-roboto uppercase"></th>
            </tr>
          </thead>
          <tbody class="bg-white  divide-gray-600">
            <tr class="divide-x cursor-pointer hover:bg-purple-200 transition-all   " v-for="(item, index) in items" :key="item" :class="[index % 2 ===0 ? '':'bg-gray-100']">
                <td class="text-center text-sm font-roboto uppercase ">16</td>
                <td class="text-center text-sm font-roboto uppercase ">4</td>
                <td class="text-center text-sm font-roboto uppercase ">gss-211.</td>
                <td class="text-center text-sm font-roboto uppercase ">219782</td>
                <td class="ctd text-center text-sm font-roboto uppercase ">Benjamin BayanJr</td>
                <td class="text-center text-sm font-roboto uppercase ">205a//204b</td>
                <td class="text-center text-sm font-roboto uppercase ">118b</td>
                <td class="text-center text-sm font-roboto uppercase  ">Tupi</td>
                <td class="text-center text-sm font-roboto uppercase ">Polomolok</td>
                <td class="text-center text-sm font-roboto uppercase ">p-623</td>
                <td class="text-center text-sm font-roboto uppercase ">2</td>
                <td class="text-center text-sm font-roboto uppercase ">c-278</td>
                <td class="text-center text-sm font-roboto uppercase ">
                  <section class="flex justify-center items-center">
                    <div class="w-100 ">
                      <p>21.97892</p>
                    </div>
                    <w-divider class="mx-2 bg-gray-100" vertical color=""></w-divider>
                    <div class="w-100 ">
                      <p></p>
                    </div>
  
                  </section>
                </td>

                 <td class="  text-center text-gray-700 text-sm font-roboto uppercase">

              <div class="flex items-center justify-center py-1">
              <!-- <button class=" bg-purple-200 mx-1  h-8 w-8 hover:bg-purple-900 hover:text-white flex items-center justify-center rounded  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                
                
              </button> -->
              <button  @click="this.$emit('showDraw')" class=" bg-purple-200 mx-1  h-8 w-8 hover:bg-purple-900 hover:text-white flex items-center justify-center rounded  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">                 <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                
              </button>
              <button @click="this.$emit('showDetails')" class="py-2 bg-purple-200 mx-1  h-8 w-8 hover:bg-purple-900 hover:text-white flex items-center justify-center rounded  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                
                
              </button>
              <button @click="this.$emit('showUpdate')" class=" bg-purple-200 mx-1  h-8 w-8 hover:bg-purple-900 hover:text-white flex items-center justify-center rounded  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
6                 <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
                
              </button>
              
            </div>
          </td> 
              </tr>
            
          </tbody>
        </table>
      </section>
</template>

<script>
    export default {
        imits: ['itemClick','showDetails','showUpdate', 'showDraw'],
        data() {
            return {
                 items: [1, 2, 3, 4, 5,1, 2, 3, 4, 51, 2, 3, 4, 51, 2, 3, 4, 5],
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
    padding:0px 4px ;
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