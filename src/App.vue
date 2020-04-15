<template>
  <div id="app">
    <elHeader/>
    <router-view/>
  </div>
</template>
<script>
export default{
  name:"app",
  components:{
    elHeader:()=>import('./Components/Header')
  }
}
</script>

