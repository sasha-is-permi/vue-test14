<template>
    <div id = "header">

       <ul>
       <li v-for="item in carsMarks" @click="viewModels(item)">
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

<script>

export default{
    data(){
        return{
            carsName:"Машины",
            carsMarks:[],
            carsModels:[],
            currentCar:""
        }
    },
    computed:{
        carsModels1: function(){
            return this.carsModels.filter(item=>item.Mark===this.currentCar)
        }
    },
    methods:{
    viewModels(item){
        this.currentCar = item.Name
    },    
    loadCar(){
       fetch("../../json/marks.JSON")
      .then(res => res.json())
       .then(data =>  {this.carsMarks = data})  

        fetch("../../json/models.JSON")
      .then(res => res.json())
       .then(data =>  {this.carsModels = data})            
    }
    },
    mounted(){
      this.loadCar()
    }
}

</script>
