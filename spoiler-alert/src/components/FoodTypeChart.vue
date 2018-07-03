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
    props: {
        userFood: Array,
        meat: Array,
        produce: Array,
        dairy: Array,
        grain: Array,
        other: Array
    },
    components: {
        Pie
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
                    data: [this.meat.length, this.produce.length, this.dairy.length, this.grain.length, this.other.length]
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
