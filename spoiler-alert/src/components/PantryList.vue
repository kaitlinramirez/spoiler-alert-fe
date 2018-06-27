<template>
    <section>
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

</style>
