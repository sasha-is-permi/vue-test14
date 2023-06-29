<template>
    <div id = "header">
       {{name}}
    </div>    
</template>


<style scoped>

#header {
text-align: center;
font-size: 20px;
color: blue;
}

</style>

<script style="ts">
import { defineComponent } from 'vue'
import {ref} from 'vue';

export default defineComponent({
    setup() {
      const name = ref('Блок-схема');
      return {
          name
      }
    },
})
</script>
