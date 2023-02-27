<template>
  <div ref="chart" style="width: 100%; height: 500px"></div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Pie",
    },

    colors: {
      type: Array,
      default: ["#3f84e5", "#609966", "#C04A82", "#DC8449", "#9361ff", "#FFB84C"],
    },
    radius: {
      type: Array,
      default: [0, 140],
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

    labelType: {
      type: Object,
      default: {
        fontSize: 12,
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
        top: 60,
      },
      label: {
        formatter: "{b}: {c} ({d}%)",
        position: "oter",
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}:  ({d}%)",
      },
      legend: {
        orient: "vertical",
        right: 24,
        top: "middle",
        data: this.data.labels,
        textStyle: {
          color: "#333",
        },
      },
      series: [
        {
          type: "pie",
          radius: this.radius,
          data: this.data.value,
          label:  { 
           formatter: "{b} ({d}%)",
      position: 'inner',
      fontSize: 14,
      color: 'white'
          
    },
        },
      ],
    });
  },
};
</script>
