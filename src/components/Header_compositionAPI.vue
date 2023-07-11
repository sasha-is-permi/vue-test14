<script setup lang="ts">
import {watch, ref, reactive, computed, onMounted} from 'vue'

import {useStore} from 'vuex'
import { mapGetters } from 'vuex';

const store = useStore()

const carsName = ref("Машины")
/* const obj = reactive({
    carsMarks: [],
    carsModels:[],    
    })*/
const currentCar = ref("")




const title = computed(
()=>{ return store.getters.getTitle}
)

const getCarsMarks = computed(
()=>{ return store.getters.carsMarksGetter}
)

const carsModels = computed(
    ()=>{ return store.getters.carsModelsGetter.filter(item=>item.Mark===currentCar.value) 
    }
)

watch(
    currentCar,(currentValue,oldValue) => {
            console.log(currentValue)
    }
)

     
  function  viewModels(item){
    currentCar.value =  item.Name
    }
/*  function  loadCar(){
       fetch("../../json/marks.JSON")
      .then(res => res.json())
       .then(data =>  {obj.carsMarks = data})  

        fetch("../../json/models.JSON")
      .then(res => res.json())
       .then(data =>  {obj.carsModels = data})            
    }*/

    onMounted(
        ()=>{
        //    loadCar()
        store.dispatch("getCarsMarks");
        store.dispatch("getCarsModels");

        }
    )   
    


</script>






<template>
    <div id = "header">
        <span :style="{color:'#00c',marginLeft:'30px'}">

        {{carsName}} :  {{title}} {{$store.getters.getAction}}
        </span>
     <ul>
       <li v-for="item in getCarsMarks" @click="viewModels(item)" :style="{cursor:'pointer'}">
            {{item.Name}}
       </li>
       </ul>

       <ul>
       <li v-for="item in carsModels">
            {{item.Name}}
       </li>
       </ul> --

    </div> 
</template>


<style scoped>


</style>


