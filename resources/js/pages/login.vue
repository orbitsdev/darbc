<template>


    <main class="min-h-screen  flex items-center justify-center">
      
      <aside class="bg-white pt-4 pb-4 px-6 shadow-lg rounded-lg parent-card" >
        <div class="logo flex items-center  justify-center">
          <img src="/assets/darbc.png" alt="" class="h-16 w-16">
        </div>
        <p class=" w-full text-center font-rubik font-bold text-4xl mt-4 dr-text-purple-900 ">Welcome to DARBC</p>
        <p class=" w-full text-center  text-lg  font-rubik dr-text-purple-100 mt-1"> Enter a valid accoun to continue signing in</p>
        <div class="mt-6">

          
          <div class="mb-4">
            <label  class="block  font-medium font-rubik text-lg dr-text-purple-900 ">Username</label>
            <div class=" relative flex items-center w-full">
              <div class="w-full relative">
                <input  required class="dr-text-purple-100 font-rubik dr-text-purple-900 text-lg pl-12 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 h-12 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 ">
                <div class="absolute top-2 left-4">
                  <i class="fa-sharp fa-solid fa-user text-xl dr-text-purple-900"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label  class="block  font-medium font-rubik text-lg dr-text-purple-900 ">Password</label>
            <div class=" relative flex items-center w-full">
              <div class="w-full relative">
                <input  required class="dr-text-purple-100 font-rubik dr-text-purple-900 text-lg pl-12 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 h-12 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 ">
                <div class="absolute top-2 left-4">
                  <i class="fa-solid fa-lock text-xl dr-text-purple-900"></i>
                </div>
                <!-- <div class="absolute top-2 right-4">
                  <i class="fa-regular fa-eye-slash text-lg dr-text-purple-900"></i>
                </div> -->
                <!-- <div class="absolute top-2 right-4">
                  <i class="fa-regular fa-eye text-lg dr-text-purple-900"></i>
                  
                </div> -->
              </div>
            </div>
          </div>
          
          <button class="w-full dr-bg-purple rounded-lg text-white font-rubik uppercase  text-lg py-3 ">Login</button>
        </div>
      </aside>


      
    </main>


</template>

<script  setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const form = reactive({
  username: '',
  password: '',
})
</script>

<style scoped>

.parent-card{
  width:540px !important;
}

</style>
