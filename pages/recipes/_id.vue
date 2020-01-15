<template>
  <div class="page-container">
    <div class="title-container">
      <h2>What Can I Make?</h2>
      <h6>Please enter up to 3 ingredients. We'll see what we can make with them...</h6>
    </div>
    <div class="input-and-search-container">
        <div class="input-container">
          <ingredientInput v-for="(item,index) in 3" :key="index" :number="index" @added-ingredient="addIng"/>
        </div>
        <div class="search-container" @click="searchRecipes">
          <p>VIEW RECIPES</p>
        </div>
    </div>
    <div class="results-container" v-if="recipes">
      <recipe v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import ingredientInput from '~/components/ingredientInput';
import recipe from '~/components/recipe';
import axios from 'axios';

export default {
  components: {
    ingredientInput,
    recipe
  },
  methods:{
    addIng(value){
      this.ingredients.push(value);
    },
    async searchRecipes(){
      if( this.ingredients.length){
        let stringIngredients = this.ingredients.join(',');
        await this.$router.replace(`${this.ingredients.join('&')}`);
        console.log('this is the current route', this.$router.currentRoute);
        await this.$router.go(0);
      }
    }
  },
  created(){
    this.recipes = this.$store.state.recipes;
  },
  beforeMount(){
    console.log('this is the query', this.$route.params.id);
    let ingredients = this.$route.params.id.split('&').join(',');
    this.$store.dispatch('getRecipes', ingredients);
  },
  data(){
    return{
      ingredients:[],
      recipes:[]
    }
  }
}
</script>

<style>

</style>
