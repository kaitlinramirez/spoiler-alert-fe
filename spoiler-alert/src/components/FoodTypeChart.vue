<template>
  <div id="chart-container">
    <h3>Food Being Tracked</h3>
    <pie 
      :chart-data="chartData" 
      :options="options"/>
  </div>  
</template>

<script>
import Pie from '../Chart'
export default {
  components: {
    Pie
  },
  props: {
    // userFood: {
    //   type: Number,
    //   default: 0
    // },
    meat: {
      type: Number,
      default: 0
    },
    produce: {
      type: Number,
      default: 0
    },
    dairy: {
      type: Number,
      default: 0
    },
    grain: {
      type: Number,
      default: 0
    },
    other: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      options: {
        legend: {
          labels: {
            fontColor: "white",
          }
        }
        
      },
      chartData: {
        labels: ['Meat', 'Produce', 'Dairy', 'Grain', 'Leftovers/Other'],
        datasets: [
        {
          label: 'Data One',
          backgroundColor: ['red', 'green', 'blue', 'yellow', 'gray'],
          data: [0,2,0,0,1]
        }
        ],
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  #chart-container {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    width: 500px;
    padding-bottom: 5%;
    border-radius: .25rem;
    padding-top: 0.375rem;
    padding-right: 0.75rem;
    padding-bottom: 0.375rem;
    padding-left: 0.75rem;
    margin-left: auto;
    margin-right: auto;
    
  }

  @media (max-width: 500px){
    #chart-container {
      margin-bottom: 1%;
    }

  }
</style>
