<template>
  <div id="component" class="flex-vertical-start">
      <leftNav/>
      <router-view class="routerview"></router-view>
  </div>
</template>

<script>
export default {
    name:"components",
    components:{
        leftNav:()=>import('../Components/comLeftNav')
    }
}
</script>

<style lang="less" scoped>
#component{
.routerview{
    margin-left: 25vw;
}
}
</style>