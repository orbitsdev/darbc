


<template>
    <w-dialog
        :model-value="isOpen"
        :width="width"
        :content-class="contentClass"
        :dialog-class="dialogClass"
        :overlay-color="overlayColor"
        :transition="transition"
        :persistent="persistent"
        :fullscreen="fullScreen"
        title=""
      >
      <div class="dardialog">

          <slot> </slot>
      </div>
      </w-dialog>
</template>

<script >
    export default {

      
        props: {
            transition: {
                type:String,
                default: 'slide-down',
            },
            overlayColor: {
                type:String,
                default: 'rgba(0,0,0,0.5)',
            },
            dialogClass: {
                type:String,
                default: 'shadow-xl',
            },
            contentClass: {
                type:String,
                default: 'bg-gray-200   overflow-y-auto',
            },
            width: {
                type:String,
                default: '640',
            },
            isOpen: {
                type:Boolean,
                default: false,
            },
            persistent: {
                type:Boolean,
                default: true,
            },
            fullScreen: {
                type:Boolean,
                default: false,
            },

        },

        
        
    }
</script>

<style lang="scss" scoped>


.dardialog{
    max-height: 87vh !important;
  }
</style>