<script setup lang="ts">
import {ref, reactive, computed, onMounted} from 'vue'

const carsName = ref("Машины")
const obj = reactive({
    carsMarks: [],
    carsModels:[],    
    })
const currentCar = ref("")


const carsModels1 = computed(
    ()=>{ return  obj.carsModels.filter(item=>item.Mark===currentCar.value) }
)
     
  function  viewModels(item){
    currentCar.value =  item.Name
    }
  function  loadCar(){
       fetch("../../json/marks.JSON")
      .then(res => res.json())
       .then(data =>  {obj.carsMarks = data})  

        fetch("../../json/models.JSON")
      .then(res => res.json())
       .then(data =>  {obj.carsModels = data})            
    }

    onMounted(
        ()=>{
             loadCar()
        }
    )   
    


</script>






<template>
    <div id = "header">
        <span :style="{color:'#00c',marginLeft:'30px'}">
        {{carsName}}
        </span>
       <ul>
       <li v-for="item in obj.carsMarks" @click="viewModels(item)">
            {{item.Name}}
       </li>
       </ul>

       <ul>
       <li v-for="item in carsModels1">
            {{item.Name}}
       </li>
       </ul>

    </div> 
</template>


<style scoped>


</style>


