

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
        labels: ["Loss in Case", "Cloa", "Leased","Qc",],
        value: [
          { value: 128, name: "Loss in Case" },
          { value: 25, name: "Cloa" },
          { value: 240, name: "Leased" },
          { value: 28, name: "Qc" },
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
        labels: ["Gensan", "Tupi", "Marbel", "Polomolok", "Tantangan","Poland", "Isulan", "Gensan",  ],
        value: [
          { value: 1548, name: "Gensan" },
          { value: 1335, name: "Tupi" },
          { value: 1310, name: "Marbel" },
          { value: 1130, name: "Polomolok" },
          { value: 1330, name: "Tantangan" },
          { value: 410, name: "Poland" },
          { value: 820, name: "Isulan" },
          { value: 960, name: "Gensan" },
        ],
      },

        
    }
  },
}
</script>

<style lang="scss" scoped>

</style>