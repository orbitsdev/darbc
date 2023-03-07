<script setup>
import { ref, defineComponent, defineEmits } from "vue";

import { router } from "@inertiajs/vue3";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";

import "filepond/dist/filepond.min.css";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css";

import vueFilePond from "vue-filepond";

// Create FilePond component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFilePoster
);

const emit = defineEmits(["uploading", "fileuploaded", "fileRemove"]);

const files = ref([]);
defineComponent({
  FilePond,
});

function handleFilePondInit() {}
function handleFilePondLoad(response) {


  if(response != ''){
    

 const res = JSON.parse(response);

    
 
        emit('fileuploaded', res);
    return res.folder;
  }
}
function handleFilePondError(error) {
  console.log("error");
}

function handleFilePondRevert(folder, load, error) {
  
  router.delete(route('file.delete.local'), {
    data: {
      folder: folder
    },
    onSuccess: () =>{
         emit('fileRemove');
    }
  });

  load();
}

function handleProcessFile() {
 
}
</script>

<template>
  <file-pond
   credits="false"
    name="files"
    ref="pond"
    class-name="my-pond"
    label-idle="Drop files here..."
   :allow-multiple="false"
    :accepted-file-types="file_type"
    v-bind:files="files"
    v-on:init="handleFilePondInit"
    v-bind:server="{
      url: '',
      timeout: 7000,
      process: {
        url: route('file.upload.local'),
        methods: 'POST',
        headers: {
          'X-CSRF-TOKEN': $page.props.csrf_token,
        },
        withCredentials: false,
        onload: handleFilePondLoad,

        timeout: 7000,
      },
       revert: handleFilePondRevert,
    }"
    @processfiles="handleProcessFile"
    @error="handleFilePondError"
    
  />
</template>

<script>
export default {

props: {
  file_type:{
    type:  [Array, String],
    default:"image/*, application/msword, application/pdf, text/plain, application/json, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/csv"
  }
}

};
</script>

<style scoped></style>
