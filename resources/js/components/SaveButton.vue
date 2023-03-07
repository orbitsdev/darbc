





<template>

    <button :disabled="active" :class="['font-roboto text-sm rounded transition-all ease-in-out  px-4 text-white h-10 ', color, processing ? 'bg-purple-400' : 'dr-bg-purple' ,]"> 
        <Spinner1 v-if="processing"/>
    <slot> Click Me</slot>
    
    </button>
</template>

<script>
    export default {
        props: {
            processing: {
                type: Boolean,
                default:false,
            },

             color: {
                type: String,
                default: ' '
                
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>