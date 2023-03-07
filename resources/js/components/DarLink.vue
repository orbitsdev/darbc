
<template>
  

     <Link
                :class="['bold  group flex items-center px-2 py-2 text-sm leading-6 rounded-md', active ? 'bg-purple-800 bg-opacity-90  text-white' : 'text-white hover:bg-purple-800 hover:bg-opacity-20']"
                aria-current="page"
              >
               
                    <slot> Inertia Link {{ active }} </slot>
              </Link>

</template>

<script>
    export default {
      props: {
        active: {
            type: Boolean,
            default:false
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>