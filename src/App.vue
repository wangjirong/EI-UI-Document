<template>
  <div class="app">
    <elHeader/>
    <router-view/>
  </div>
</template>
<script>
export default{
  components:{
    elHeader:()=>import('./Components/Header')
  }
}
</script>

