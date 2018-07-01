import {
  Pie,
  mixins
} from 'vue-chartjs'

const {
  reactiveProp
} = mixins


export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: ['options'],
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
  // data () {
  //   return {
  //     chartData: {
  //       labels: ['Meat', 'Produce', 'Dairy', 'Grain'],
  //       datasets: [
  //         {
  //           label: 'Data One',
  //           backgroundColor: ['red', 'green', 'blue', 'yellow'],
  //           data: [3, 2, 1, 1],
  //         }
  //       ],

        // don\'t know why key not changing font color, grr 
        // options: {
        //   legend: {
        //     labels: {
        //       fontColor: 'white'
        //     }
        //   }
        // }


{/* <style>
    .food-list{
        display: flex;
        flex-flow: row wrap;
        margin: 1vw;
        justify-content: space-around;
        align-content: space-around;
    }
</style> */}

