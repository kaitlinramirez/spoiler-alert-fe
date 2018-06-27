<template>
    <section class="food-list">
        <food-item
            v-for="food in foods.items"
            :food="food"
            :key="food"/>
    </section>
</template>

<script>
import FoodItem from '@/components/FoodItem'

export default {
    props: ['foods'],
    components: {
        FoodItem
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
