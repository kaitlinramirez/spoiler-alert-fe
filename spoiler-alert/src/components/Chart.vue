<script>
import {Pie} from 'vue-chartjs'

export default {
  extends: Pie,
  data () {
    return {
      datacollection: {
        labels: ['Meat', 'Produce', 'Dairy', 'Grain'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['red', 'green', 'blue', 'yellow'],
            data: [3, 2, 1, 1]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
  }
}
</script>

<style>
    .food-list{
        display: flex;
        flex-flow: row wrap;
        margin: 1vw;
        justify-content: space-around;
        align-content: space-around;
    }
</style>

