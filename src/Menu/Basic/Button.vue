<template>
  <div id="button">
    <div class="nav">
      <h1 class="com-nav-title">Button 按钮</h1>
      <h3 class="com-nav-state">常用的操作按钮</h3>
    </div>
    <div class="basic-use">
      <h1 class="com-nav-title">基础用法</h1>
       <h3 class="com-nav-state">基础的按钮用法</h3>
    </div>
    <div class="forbidden">
      <h1 class="com-nav-title">禁用状态</h1>
       <h3 class="com-nav-state">按钮不可用状态</h3>
    </div>
    <div class="word-button">
      <h1 class="com-nav-title">文字按钮</h1>
       <h3 class="com-nav-state">没有边框和背景色的按钮</h3>
    </div>
    <div class="icon-button">
      <h1 class="com-nav-title">图标按钮</h1>
       <h3 class="com-nav-state">带图标的按钮可增强辨识度（有文字）或节省空间（无文字）</h3>
    </div>
    <div class="button-group">
       <h1 class="com-nav-title">按钮组</h1>
       <h3 class="com-nav-state">以按钮组的方式出现，常用于多项类似操作</h3>
    </div>
    <div class="button-loading">
       <h1 class="com-nav-title">加载中</h1>
       <h3 class="com-nav-state">点击按钮后进行数据加载操作，在按钮上显示加载状态</h3>
    </div>
    <div class="button-size">
       <h1 class="com-nav-title">不同尺寸</h1>
       <h3 class="com-nav-state">Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸</h3>
    </div>
    <div class="attributes">
      <h1 class="com-nav-title">Attributes</h1>
      <table>
        <thead>
          <tr>
            <td>参数</td>
            <td>说明</td>
            <td>类型</td>
            <td>可选值</td>
            <td>默认值</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td>尺寸</td>
            <td>string</td>
            <td>medium / small / mini</td>
            <td>medium</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    name:'button'
}
</script>

<style lang="less" scoped>

</style>