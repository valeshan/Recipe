<template>
    <div class="recipe-card">
       <div class="recipe-image">
           <img :src="recipe.thumbnail" alt="">
       </div>
       <div class="recipe-text">
           <h3>{{recipe.title}}</h3>
           <div class="recipe-ingredients">
               <p class="ingredient" v-for="(ingredient, index) in ingredients" :key="index">{{ingredient.slice(0,1).toUpperCase()}}{{ingredient.slice(1, ingredient.length)}}</p>
           </div>
           <a class="recipe-link" :href="recipe.href">VIEW RECIPE ></a>
       </div>
    </div>
</template>


<script>

export default {
    props:['recipe'],
    computed:{
        ingredients(){
            return this.recipe.ingredients.split(', ');
        }
    },
    methods:{
        showrecipes(){
            console.log('recipes', this.$store.state.recipes);
        }
    }
}
</script>

<style lang="scss">
    .recipe-card{
        display: flex;
        align-items: center;
        background-color: white;
        margin: 5px 10px;
        padding: 10px 20px;
    }

    .recipe-image{
        img{
            height: 150px;
            width: 150px;
            border-radius: 50%;
        }
    }

    .recipe-text{
         margin-left: 30px;
        h3{
            font-weight: bold;
        }
    }

    .recipe-ingredients{
        display: flex;
        margin: 1em 0;
    }

    .ingredient{
        font-size: 0.8em;
        color: grey;
        background-color: #ececec;
        margin: 0 5px;
        padding: 5px 10px;
        border-radius: 30px;
    }
    .recipe-link{
        text-decoration: none;
        font-weight: bold;
        color: rgb(255, 94, 0);
    }
    a:hover{
            text-decoration: none;
        }
</style>