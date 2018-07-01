<template>
    <div id="chart-container">
        <p>Working!</p>
        <!-- <chart :foods="foods" /> -->
      </div>
</template>

<script>
export default {
    props: {
        userFood: Array
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
