


<template>
  <div ref="chart" style="width: 100%; height: 500px;"></div>
</template>

<script>
export default {
     props: {
    title: {
      type: String,
      default: "Bar",
    },



    colors: {
      type: Array,
            default: ["#609966", "#C04A82", "#DC8449", "#9361ff", "#FFB84C"],

    },
    radius: {
      type: Array,
        default:  [0, 140],
    },

    data: {
      type: Object,
      default: {
        labels: ["Direct access", "Email marketing", "Search engine"],
        value: [
          { value: 1548, name: "Search engine" },
          { value: 335, name: "Direct access" },
          { value: 310, name: "Email marketing" },
        ],
      },
    },


  },
  mounted() {
       const chart = this.$echarts.init(this.$refs.chart);
    chart.setOption({
      color: this.colors,
      title: {
        text: this.title,
        left: "center",
        top: 0,
      },
      xAxis: {
        type: "category",
        data: this.data.labels,
      },
      yAxis: {
        type: "value",
      },
      tooltip: {
        trigger: "axis",
      },
      series: [
        {
          data: this.data.value,
          type: "bar",
          label: {
            show: true,
            position: "top",
          },
        },
      ],
    });
  }
}
</script>
