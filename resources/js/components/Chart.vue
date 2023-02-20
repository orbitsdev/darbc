<template>
  <div ref="chart" style="height: 400px;"></div>
</template>

<script>
export default {
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);

    chart.setOption({
      title: {
        text: 'My Chart'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    });
  }
};
</script>
