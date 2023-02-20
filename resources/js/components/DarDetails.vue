<template>

  <div class="grid grid-cols-12 mt-4">
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
                <span class="ml-2 w-0 flex-1 truncate"
                  >Land.pdf</span
                >
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
                <span class="ml-2 w-0 flex-1 truncate"
                  >Tax.pdf</span
                >
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
    <div class="col-span-9 h-full rounded-sm bg-white py-6">
    <section class="">
    
      <p class="font-rubik text-xl font-bold uppercase px-6">Basic Information</p>

      <ul role="list" class="divide-y divide-gray-200  border-gray-200">
        <li
          class="relative  py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 "
        >
          <div class="">
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">No.</p>
              <div class="font-rubik text-black uppercase text-sm text-right">1</div>
            </div>
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Lot No.</p>
              <div class="font-rubik text-black uppercase text-sm text-right">6</div>
            </div>
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Surver No.</p>
              <div class="font-rubik text-black uppercase text-sm text-right">
                gss-390
              </div>
            </div>
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Title Area</p>
              <div class="font-rubik text-black uppercase text-sm text-right">
                12.08490
              </div>
            </div>
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Award Area</p>
              <div class="font-rubik text-black uppercase text-sm text-right">
                9.930123
              </div>
            </div>
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Previous Land Owner</p>
              <div class="font-rubik text-black uppercase text-sm text-right">
                Tomas Bayan
              </div>
            </div>

            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Field No.</p>
              <div class="font-rubik text-black uppercase text-sm text-right">118b</div>
            </div>
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Location</p>
              <div class="font-rubik text-black uppercase text-sm text-right">polo</div>
            </div>
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Municipality</p>
              <div class="font-rubik text-black uppercase text-sm text-right">
                polomolok
              </div>
            </div>
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">title</p>
              <div class="font-rubik text-black uppercase text-sm text-right">t-1</div>
            </div>
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Cloa No.</p>
              <div class="font-rubik text-black uppercase text-sm text-right">1</div>
            </div>
            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Page</p>
              <div class="font-rubik text-black uppercase text-sm text-right">None</div>
            </div>

            <div class="flex items-start border-b py-2">
              <p class="lg:w-48 border-r mr-2 text-sm text-gray-900">Encumbered</p>
              <div class="lg:w-24 font-rubik mb-1">
                <p class="text-sm text-gray-900">Area</p>
                <p class="text-sm text-black fot-rubik">97.087</p>
              </div>
              <div class="lg:w-24 font-rubik mb-1">
                <p class="text-sm text-gray-900">Variance</p>
                <p class="text-sm uppercase">None</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class=" ">
    
      <p class="font-rubik text-xl font-bold uppercase px-6">Tax</p>

      <ul role="list" class="divide-y divide-gray-200  border-gray-200">
        <li
          class="relative  py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 "
        >
          <div class="">
             <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Area of title</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">1.9172</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Tax Declaration No.</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">m-0701556</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                  <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Market Value</p>
                  <div class="font-rubik  text-black uppercase text-sm text-right  ">3,0781295</div>
              </div>
                <div class="flex items-start  border-b py-2    ">
                  <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Assessed Value</p>
                  <div class="font-rubik  text-black uppercase text-sm text-right  ">41213</div>
              </div>
                <div class="flex items-start  border-b py-2    ">
                  <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Year</p>
                  <div class="font-rubik  text-black uppercase text-sm text-right  ">2023</div>
              </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Remarks</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">Area not plnadted to p/a as agrred w /dfl & darbc</div>
                </div>
          </div>
        </li>
      </ul>
    </section>
    <section class=" ">
    
      <p class="font-rubik text-xl font-bold uppercase px-6">Payment</p>

      <ul role="list" class="divide-y divide-gray-200  border-gray-200">
        <li
          class="relative  py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 "
        >
          <div class="">
             <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Paid by</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">Dolefil</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Staus</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">TWC</div>
                </div>
               
               
          </div>
        </li>
      </ul>
    </section>
    <section class=" ">

        <div class="px-6">
      <p class="font-rubik text-xl font-bold uppercase ">Remarks</p>
        <p class="leading-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat eveniet quibusdam deleniti officiis praesentium aliquid eius? Voluptatem voluptatum laboriosam tempora pariatur commodi ut ratione exercitationem! Odit vitae porro ipsa.</p>
        </div>
     
    </section>
    </div>
  </div>

  <!-- 
<w-divider class="mt-4 " color="purple" />
        <div class="bg-gray-300 p-10 grid grid-cols-12 gap-x-2">
            <div class=" col-span-4">
              <p class="font-rubik text-lg">Basic Information</p>
                <div class="mt-3">
                  <img src="/assets/sample1.jpg" alt="lot" class="h-60 w-80">
                </div>
            </div>
            <div class=" col-span-8">
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">No.</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">1</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Lot No</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">6</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Surver No.</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">gss-390</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Title Area</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">12.08490</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Award Area</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">9.930123</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Previous Land Owner</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">Tomas Bayan</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Field No.</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">118b</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Location</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">polo</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Municipality</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">polomolok</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">title</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">t-1</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Cloa No</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">1</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Page</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">c-169</div>
                </div>
               
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Encumbered</p>
                    <div>

                      <div class="lg:w-24 font-rubik  mb-1 ">
                        <p class="text-sm text-gray-700 italic ">
                        Area
                      </p>
                      <p class="text-sm font-medium text-black fot-rubik ">97.087</p>
                    </div>
                    <div class="lg:w-24 font-rubik  mb-1">
                      <p class="text-sm text-gray-700 italic">
                        Variance
                      </p>
                      <p class="text-sm uppercase italic">None</p>
                      </div>
                    </div>

                </div>
               
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Encumbered</p>
                    <div>

                      <div class="lg:w-24 font-rubik  mb-2 ">
                        <p class="text-sm text-gray-700 italic ">
                        Type of title
                      </p>
                      <p class="text-sm font-medium text-black fot-rubik uppercase ">tct</p>
                    </div>
                    <div class="lg:min-w-24 font-rubik  mb-2">
                      <p class="text-sm text-gray-700 italic">
                       No.
                      </p>
                      <p class="text-sm uppercase">(t-131631) t-2-17</p>
                      </div>
                    </div>

                </div>
                
                

                <div class="flex items-start  border-b py-2    ">
                  <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Title Status</p>
                  <div class="font-rubik  text-black uppercase text-sm text-right  ">Twc</div>
              </div>
                
                <div class="flex items-start  border-b py-2    ">
                  <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Title Copy</p>
                  <div class="font-rubik  text-black uppercase text-sm text-right  ">Affidavit of loss</div>
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
                  <p class="lg:w-48 border-r mr-2   font-rubik text-sm  mb-1">Select Year</p>
                  <select
                  class="lg:w-96  border py-1 px-2 rounded bg-gray-200 min-w-96 border-gray-400 mx-1 text-sm"
                >
                  <option value="">2023</option>
                  <option value="">2022</option>
                  <option value="">2021</option>
                </select>
                </div>
             
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Area of title</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">1.9172</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Tax Declaration No.</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">m-0701556</div>
                </div>
                <div class="flex items-start  border-b py-2    ">
                  <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Market Value</p>
                  <div class="font-rubik  text-black uppercase text-sm text-right  ">3,0781295</div>
              </div>
                <div class="flex items-start  border-b py-2    ">
                  <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Assessed Value</p>
                  <div class="font-rubik  text-black uppercase text-sm text-right  ">41213</div>
              </div>
                <div class="flex items-start  border-b py-2    ">
                  <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Year</p>
                  <div class="font-rubik  text-black uppercase text-sm text-right  ">2023</div>
              </div>
                <div class="flex items-start  border-b py-2    ">
                    <p class="lg:w-48 border-r mr-2  text-sm text-gray-900">Remarks</p>
                    <div class="font-rubik  text-black uppercase text-sm text-right  ">Area not plnadted to p/a as agrred w /dfl & darbc</div>
                </div>
             
              </div>
        
         
        </div>
         -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
