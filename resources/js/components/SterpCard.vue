

<template>


      <li   class="relative overflow-hidden lg:flex-1">
        <div class="overflow-hidden border border-gray-200 rounded-b-md border-t-0 lg:border-0">
          <!-- Upcoming Step -->
          <a href="#" class="group">
            <span :class="['absolute top-0 left-0 h-full w-1 group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full', active ?  'bg-purple-600':' bg-transparent']" aria-hidden="true"></span>
            <span class="flex items-start px-6 py-5 text-sm font-medium lg:pl-9">
              <span class="flex-shrink-0">
                <span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                  <span class="text-gray-500">{{ index }}</span>
                </span>
              </span>
              <span class="mt-0.5 ml-4 flex min-w-0 flex-col">
                <span class="text-sm font-medium text-gray-600"> {{ title }}</span>
                <!-- <span class="text-sm font-medium text-gray-600 ">{{ active }}</span> -->
              </span>
            </span>
          </a>

          <!-- Separator -->
          <div class="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
            <svg class="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
              <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </li>

</template>

<script>
    export default {
        props: {
           
            status:{
                type: String,
                default:'waiting',
            },
            title:{
                type: String,
                default:'step1',
            },
            subtitle:{
                type: String,
                default:'subtitle',
            },
            index:{
                type: [String, Number],
                default:'1',
            },
            active:{
                type: Boolean,
                default:false,
            },

        }
    }
</script>

<style lang="scss" scoped>

</style>