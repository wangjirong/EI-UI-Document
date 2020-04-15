<template>
  <div id="component" class="flex-vertical-start">
      <leftNav/>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"component",
    components:{
        leftNav:()=>import('../Components/comLeftNav')
    }
}
</script>

<style lang="less" scoped>
#component{

}
</style>