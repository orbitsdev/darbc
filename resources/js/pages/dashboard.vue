

<template>
    <div class="bg-white rounded-xl">

    <section class="grid grid-cols-2 ">

    <section class="col-span-1  border border-purple-300    flex items-center  justify-center ">
          <Pie2 class="flex items-center justify-center" :data="data1" :radius="[0,134]"  :title="'DARBC LAND STATUS'" />
    </section>
    
    <section class="col-span-1  border border-purple-300    flex items-center  justify-center ">
          <Pie class="flex items-center justify-center" :data="data2" :radius="[0,134]"  :title="'DARBC LAND'" />
    </section>
     <section class="col-span-2  border border-purple-300 py-16 w-full  flex justify-center items-center">
          <BarGraph  class="flex items-center justify-center" :data="bardata" :title="'SCOPED MUNICPALITIES'" />
    </section>
    </section>

  
          <!-- <Chart/> -->
    </div>
</template>

<script>
   
import adminlayout from '../layouts/adminlayout.vue';
export default {
  layout: adminlayout,
  data() {
    return {
        data1:  {
        labels: ["Loss in Case", "Cloa", "Needs","Wants",],
        value: [
          { value: 128, name: "Loss in Case" },
          { value: 25, name: "Cloa" },
          { value: 240, name: "Needs" },
          { value: 28, name: "Wants" },
        ],
      },
        data2:  {
        labels: ["Unplanted", "Growers", "Leased"],
        value: [
          { value: 1548, name: "Unplanted" },
          { value: 335, name: "Growers" },
          { value: 310, name: "Leased" },
        ],
      },

        
        bardata:  {
        labels: ["Gensan", "Tupi", "Marbel", "Polomolok", "Tantangan","Tantangan",  ],
        value: [
          { value: 1548, name: "Unplanted" },
          { value: 335, name: "Growers" },
          { value: 310, name: "Leased" },
        ],
      },

        
    }
  },
}
</script>

<style lang="scss" scoped>

</style>