<template>
<div>
  <Navbar/>
   <b-container fluid>
    
    <router-view>   </router-view>
  </b-container>
</div>
 
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
    name:'App',
    components:{
      Navbar
    }
}
</script>

<style>

</style>