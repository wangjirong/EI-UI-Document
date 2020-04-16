<template>
  <div id="button">
    <div class="nav content-box">
      <h1 class="com-nav-title">Button 按钮</h1>
      <h3 class="com-nav-state">常用的操作按钮</h3>
    </div>
    <div class="basic-use content-box">
      <h1 class="com-nav-title">基础用法</h1>
      <h3 class="com-nav-state">基础的按钮用法</h3>
    </div>
    <div class="forbidden content-box">
      <h1 class="com-nav-title">禁用状态</h1>
      <h3 class="com-nav-state">按钮不可用状态</h3>
    </div>
    <div class="word-button content-box">
      <h1 class="com-nav-title">文字按钮</h1>
      <h3 class="com-nav-state">没有边框和背景色的按钮</h3>
    </div>
    <div class="icon-button content-box">
      <h1 class="com-nav-title">图标按钮</h1>
      <h3 class="com-nav-state">带图标的按钮可增强辨识度（有文字）或节省空间（无文字）</h3>
    </div>
    <div class="button-group content-box">
      <h1 class="com-nav-title">按钮组</h1>
      <h3 class="com-nav-state">以按钮组的方式出现，常用于多项类似操作</h3>
    </div>
    <div class="button-loading content-box">
      <h1 class="com-nav-title">加载中</h1>
      <h3 class="com-nav-state">点击按钮后进行数据加载操作，在按钮上显示加载状态</h3>
    </div>
    <div class="button-size content-box">
      <h1 class="com-nav-title">不同尺寸</h1>
      <h3 class="com-nav-state">Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸</h3>
    </div>
    <div class="attributes content-box">
      <h1 class="com-nav-title">Attributes</h1>
      <table>
        <thead>
          <tr>
            <th width="20%">参数</th>
            <th width="20%">说明</th>
            <th width="20%">类型</th>
            <th width="60%">可选值</th>
            <th width="20%">默认值</th>
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
          <tr>
            <td>type</td>
            <td>类型</td>
            <td>string</td>
            <td>primary / success / warning / danger / info / text</td>
            <td>primary</td>
          </tr>
          <tr>
            <td>plain</td>
            <td>是否朴素按钮</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
          </tr>
          <tr>
            <td>round</td>
            <td>是否圆角按钮</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
          </tr>
          <tr>
            <td>circel</td>
            <td>是否圆形按钮</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>是否加载中状态</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用状态</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>图标类名</td>
            <td>string</td>
            <td>————</td>
            <td>————</td>
          </tr>
          <tr>
            <td>autofocus</td>
            <td>是否默认聚焦</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
          </tr>
          <tr>
            <td>native-type</td>
            <td>原生 type 属性</td>
            <td>string</td>
            <td>button / submit / reset</td>
            <td>button</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "buttonDoc"
};
</script>

<style lang="less" scoped>
#button {
  .content-box {
    padding: 1em;
  }
  .attributes {
    table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      font-size: .9em;
      line-height: 1.5em;
      margin-left: 2em;
      thead {
        border-bottom: 1px solid #42b983;
        th {
          text-align: left;
          white-space: nowrap;
          color: #909399;
          font-weight: 400;
          padding: 1em 2em;
          &:first-child {
            padding-left: 0;
          }
          &:last-child {
            padding-right: 0;
          }
        }
      }
      tbody {
        tr {
          line-height: 1.5em;
          border-bottom: 1px solid #42b983;
          td {
            color: #606266;
            text-align: left;
            white-space: nowrap;
            font-weight: 400;
            padding: 1em 2em;
            &:first-child {
              padding-left: 0;
            }
            &:last-child {
              padding-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>