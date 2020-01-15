<template>
    <div class="ingredient-input">
        <p>INGREDIENT {{number+1}}</p>
        <input type="text" v-model="ingredient" @change="addIngredient">
    </div>
</template>

<script>

export default {
    props:[
        'number'
    ],
    methods:{
        addIngredient(){
            this.$emit('added-ingredient', this.ingredient);
        }
    },
    data(){
        return{
            ingredient:''
        }
    }
}
</script>

<style lang="scss">
    .ingredient-input{
        display: grid;
        margin: 0 1em;
        p{
            color: rgb(255, 94, 0);
            margin: 0;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input{
            height: 40px;
        }
    }
</style>