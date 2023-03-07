











<template>


    <button :class="['font-roboto text-sm rounded transition-all ease-in-out  px-4 ', color ]"> <slot> Click Me</slot></button>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                default: 'dr-bg-purple text-white h-10'
                
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>