<template>
  <v-container>
    List of best products:
    <br />
    <v-data-table v-if='products' :items='products' :headers='headers' />
  </v-container>
</template>

<script>
import productsService from '../services/products'

export default {
  name: "ProductsPage",
  layout: "public",
  data() {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'family' },
        { text: 'Fat (g)', value: 'price' },
      ],
      products: null
    }
  },
  async mounted() {
    const { data } = await productsService.listProducts()
    this.products = data
  },
}
</script>

<style scoped>

</style>
