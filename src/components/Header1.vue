<template>
    <div id = "header">
      <span :style="{color:color}">  
       {{name}}
      </span> 
    </div>  
    <div class="flex"> 
    <button :style="{marginRight:'20px'}" @click="changeColor('blue')"> Синий цвет </button>
    <button @click="changeColor('red')"> Красный цвет  </button>
    </div> 
</template>


<style scoped>

#header {
text-align: center;
font-size: 20px;
}

.flex {
    margin-top: 10px;
    display:flex;
    justify-content: center;
}

</style>

<script style="ts">
import { defineComponent } from 'vue'
import {ref} from 'vue';

export default defineComponent({
    setup() {
      const name = ref('Блок-схема')
      const color = ref('aqua')
      function changeColor(colorButton) {
          color.value = colorButton;
          console.log(color.value)
      }
      return {
          name,
          color,
          changeColor
      }
    },
})
</script>
