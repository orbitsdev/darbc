<template>
  <section class="bg-white">

  
  
    <!-- <DarNavigation class="mx-4" /> -->

    <!--
       <div class="inline-flex mx-6 items-center  hover:bg-gray-50 p-2 rounded cursor-pointer ">
        

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
  <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clip-rule="evenodd" />
</svg>
    <Link  as="button" href="/dashboard">
         Go to Admin
    </Link>
      
    </div>
     -->
    <div class="px-6 pt-4 ">
     <DarButton @click="printTable" class="flex items-center justify-end"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
  <path fill-rule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z" clip-rule="evenodd" />
</svg>
 Print  </DarButton>
    </div>
       
    <div class=" rounded">

      <section aria-labelledby="payment-details-heading">
          <form action="#" method="POST">
            <div class="shadow sm:overflow-hidden sm:rounded-md">
              <div class="bg-white  px-6 pt-6">
                <div>
                  <h2 id="payment-details-heading" class="text-lg font-medium leading-6 text-gray-900">Available Searchable fields </h2>
                  <p class="mt-1 text-sm text-gray-500">Base in your input it will filter the table</p>
                </div>

                <div class="mt-6 grid grid-cols-4 gap-6">
                  <div class="col-span-4 sm:col-span-2">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Lot Prervious Owner</label>
                    <input type="text" name="first-name" id="first-name" autocomplete="cc-given-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Lot Location</label>
                    <input type="text" name="last-name" id="last-name" autocomplete="cc-family-name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-4 sm:col-span-2">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Lot Status</label>
                    <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm">
                  </div>

                  <div class="col-span-4 sm:col-span-1">
                    <label for="expiration-date" class="block text-sm font-medium text-gray-700">Municipality</label>
                    <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm" placeholder="MM / YY">
                  </div>

                  <div class="col-span-4 sm:col-span-1">
                    <label for="security-code" class="flex items-center text-sm font-medium text-gray-700">
                      <span>Lot Number</span>
                      <svg class="ml-1 h-5 w-5 flex-shrink-0 text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                      </svg>
                    </label>
                    <input type="text" name="security-code" id="security-code" autocomplete="cc-csc" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm">
                  </div>

                 

                  
                </div>
              </div>
              
            </div>
          </form>
        </section>
        <section aria-labelledby="payment-details-heading">
          <form action="#" method="POST">
            <div class="shadow sm:overflow-hidden sm:rounded-md">
              <div class="bg-white py-6 px-4 sm:p-6">
                <div>
                <div class="flex items-center"> 
                  <h2 id="payment-details-heading" class="text-lg font-medium leading-6 text-gray-900 mr-1">Check pariority columns </h2>
                
             
            </div>
                  <p class=" text-sm text-gray-500">Check desire column that you want to display </p>
                </div>

                <div class="mt-6 grid grid-cols-4 gap-x-6 gap-y-3">
                 
                 
                <label class="cursor-pointer hover:bg-gray-50 rounded p-2   border flex items-center" v-for="option in options" :key="option">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              class="h-4 w-4 rounded-none border-purple-600 accent-purple-900 bg-purple-600 checked:bg-purple-900 focus:ring-purple-500 mr-2"
            />
            <span class="uppercase text-xs">{{ option }} </span>
          </label>
                  
                </div>
              </div>
              
            </div>
          </form>
        </section>
     
    </div>

   
    <div class="mx-6 shadow-xl " id="table-to-print">
      <DarTable class="" />
    </div>
  </section>
</template>

<script>
import adminlayout from "../layouts/adminlayout.vue";
export default {
    layout: adminlayout,

    methods: {
        printTable() {
      const printContents = document.getElementById('table-to-print').innerHTML
      const originalContents = document.body.innerHTML
      document.body.innerHTML = printContents
      window.print()
      document.body.innerHTML = originalContents
    },
    },

  data() {
    return {
      options: [
        "no",
        "lot",
        "servey",
        "tittle-area",
        "awarded-area",
        "previous land owner",
        "field",
        "locaiton",
        "municipality",
        "title",
        "cloa no",
        "page",
        "encombered",
        "Privious Owner"
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
