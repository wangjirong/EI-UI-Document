
<template>
  <div id="Header">
      <ul class="menu flex-vertical-center">
          <li class="menu-item" v-for="menuItem in menu" :key="menuItem.id">
              <router-link :to="menuItem.to">{{menuItem.title}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            menu:[
                {
                title:"指南",
                to:"/guide"
                },
                 {
                title:"组件",
                to:"/component"
                }, {
                title:"主题",
                to:"/theme"
                }, {
                title:"资源",
                to:"/source"
                },
            ]
        }
    }
};
</script>

<style lang="less" scoped>

</style>