import axios from 'axios';

export const state = () => ({
                  ingredients: [],
                  recipes:[]
                  })

export const mutations = {
  updateRecipes(state, recipes){
    state.recipes = recipes
  }
}

export const actions = {
      async  nuxtServerInit({commit, dispatch}, pContext) {
        let args = pContext.app.router.history.current.params.id? pContext.app.router.history.current.params.id.split('&').join(',') : 'chicken,tomato';
       console.log('this is the route serverinit', args);
       await dispatch('getRecipes', args);
      },
      async getRecipes({commit}, ingredients){
        let b = 'http://www.recipepuppy.com/api/?i='+ingredients+'&p=1';
        let recipes;
        let config = {
          headers: {'Access-Control-Allow-Origin': '*',
          'Content-Type': 'text/javascript',
        },
        };

        await axios.get(b,config).then(res=>{
          console.log('this is res', res);
          recipes = res.data.results;
        }).catch(err=>{console.log('this is the error', err)});
        
        console.log('recipes', recipes);
        commit('updateRecipes', recipes)
        
      }
}

