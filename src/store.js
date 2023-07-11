import {createStore} from 'vuex'

export const store = createStore({
state(){
    return{
        carsMarks: [],
        carsModels:[],
        title: "список",
        action: "для выбора"
    }
},
getters: {
    carsMarksGetter(state){
        return state.carsMarks
    },
    carsModelsGetter(state){
        return state.carsModels
    },
    getTitle(state){
        return state.title
    },
    getAction(state){
        return state.action
    }
},

mutations: {
    carsMarks(state,data){
        state.carsMarks = data
    },
    carsModels(state,data){
        state.carsModels = data
    }


},

actions: {
    getCarsMarks({commit, state}){
        fetch("./json/marks.JSON")
        .then(res => res.json())
         .then(data =>  {
            commit('carsMarks',data)
        })  
    },
    getCarsModels({commit,state}){       
        fetch("./json/models.JSON")
        .then(res => res.json())
         .then(data =>  {
            commit('carsModels',data)
        })       
    }
}
})