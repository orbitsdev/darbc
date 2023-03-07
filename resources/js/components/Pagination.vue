

<template>








<div class="py-2 flex items-center justify-between">
<div>
  <Component

        :is="link.url ? 'Link' : 'span' "
        v-for="link  in links"
        :key="link"
        :href="link.url"
        v-html="link.label"
        :class="['px-4 cursor-pointer border rounded py-2 mx-0.5 bg-white', link.url ? '  py-2 mx-0.5 ': 'hover:bg-gray-100 text-gray-400 ', link.active ? 'dr-bg-purple  text-white ': 'hover:bg-gray-100']"

        >
        </Component>

      <!-- <div class="flex items-center justify-center">
        <div class="px-4 cursor-pointer border hover:bg-gray-100 rounded py-2 mx-0.5 bg-white"> Previous</div>
        <div class="px-4 cursor-pointer border  rounded dr-bg-purple text-white py-2 mx-0.5 bg-white">1</div>
        <div class="px-4 cursor-pointer border hover:bg-gray-100 rounded py-2 mx-0.5 bg-white">2</div>
        <div class="px-4 cursor-pointer border hover:bg-gray-100 rounded py-2 mx-0.5 bg-white">3</div>
        <div class="px-4 cursor-pointer border hover:bg-gray-100 rounded py-2 mx-0.5 bg-white">
        Next

        </div>
      </div> -->
</div>
    </div>
</template>

<script>
    export default {

       props: {
            links: Array
        }
        
    }
</script>

<style lang="scss" scoped>

</style>