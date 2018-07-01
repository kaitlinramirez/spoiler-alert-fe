<template>
    <div id="chart-container">
        <p>Working!</p>
        <pie 
        :chart-data="chartData" 
        :options="options"/>
      </div>
</template>

<script>
import Pie from '../Chart'
export default {
    props: {
        userFood: Array
    },
    components: {
        Pie
    },
    data() {
        return {
            options: {
                legend: {
                    labels: {
                        fontColor: "white"
                    }
                }
                
            },
            chartData: {
                labels: ['Meat', 'Produce', 'Dairy', 'Grain'],
                datasets: [
                {
                    label: 'Data One',
                    backgroundColor: ['red', 'green', 'blue', 'yellow'],
                    data: [3, 2, 1, 1],
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
        background-color: rgba(0, 0, 0, 0.5);
        width: inherit;
        padding-bottom: 5%;
        border-radius: .25rem;
        padding-top: 0.375rem;
        padding-right: 0.75rem;
        padding-bottom: 0.375rem;
        padding-left: 0.75rem;
    }

    @media (max-width: 500px){
        chart{
            width: 150px;
        }
    }
</style>
