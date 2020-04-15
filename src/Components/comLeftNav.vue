<template>
  <div id="comLeftNav">
    <ul class="develop-guide flex-column-start">
      <li class="com-header item">开发指南</li>
      <li
        class="guide-item item"
        v-for="developGuideItem in developGuide"
        :key="developGuideItem.id"
      >
        <router-link class="linkItem" :to="developGuideItem.to">{{developGuideItem.title}}</router-link>
      </li>
    </ul>
    <ul class="components flex-column-start">
      <li class="com-header item">组件</li>
      <li
        class="component-item flex-column-start"
        v-for="component in components"
        :key="component.id"
      >
        <span class="component-classfy-tag">{{component.title}}</span>
        <router-link
          class="linkItem item"
          v-for="link in component.children"
          :key="link.id"
          :to="link.to"
        >{{link.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {
      developGuide: [
        {
          title: "安装",
          to: "/component/install"
        },
        {
          title: "快速上手",
          to: "/component/quickStart"
        },
        {
          title: "自定义主题",
          to: "/component/custom-theme"
        },
        {
          title: "过渡动画",
          to: "/component/transition"
        }
      ],
      components: [
        {
          title: "Basic",
          children: [
            {
              title: "Layout布局",
              to: "/component/Layout"
            },
            {
              title: "Container布局容器",
              to: "/component/Container"
            },
            {
              title: "Color色彩",
              to: "/component/Color"
            },
            {
              title: "Typography字体",
              to: "/component/Typography"
            },
            {
              title: "Border边框",
              to: "/component/Border"
            },
            {
              title: "Icon图标",
              to: "/component/Icon"
            },
            {
              title: "Button按钮",
              to: "/component/Button"
            },
            {
              title: "Link文字链接",
              to: "/component/Link"
            }
          ]
        },
        {
          title: "Form",
          children: [
            {
              title: "Radio 单选框",
              to: "/component/Radio"
            },
            {
              title: "CheckBox 多选框",
              to: "/component/CheckBox"
            },
            {
              title: "Input 输入框",
              to: "/component/Input"
            },
            {
              title: "InputNumber 计数器",
              to: "/component/InputNumber"
            },
            {
              title: "Select 选择器",
              to: "/component/Select"
            },
            {
              title: "Cascader 级联选择器",
              to: "/component/Cascader"
            },
            {
              title: "Switch 开关",
              to: "/component/Switch"
            },
            {
              title: "Slider 滑块",
              to: "/component/Slider"
            },
            {
              title: "TimePicker 时间选择器",
              to: "/component/TimePicker"
            },
            {
              title: "DatePicker 日期选择器",
              to: "/component/DatePicker"
            },
            {
              title: "DateTimePicker 日期时间选择器",
              to: "/component/DateTimePicker"
            },
            {
              title: "Upload 上传",
              to: "/component/Upload"
            },
            {
              title: "Rate 评分",
              to: "/component/Rate"
            },
            {
              title: "ColorPicker 颜色选择器",
              to: "/component/ColorPicker"
            },
            {
              title: "Transfer 穿梭框",
              to: "/component/Transfer"
            },
            {
              title: "Form 表单",
              to: "/component/Form"
            }
          ]
        },
        {
          title: "Data",
          children: [
            {
              title: "Layout布局",
              to: "/component/Layout"
            }
          ]
        },
        {
          title: "Notice",
          children: [
            {
              title: "Layout布局",
              to: "/component/Layout"
            }
          ]
        },
        {
          title: "Navigation",
          children: [
            {
              title: "Layout布局",
              to: "/component/Layout"
            }
          ]
        },
        {
          title: "Others",
          children: [
            {
              title: "Layout布局",
              to: "/component/Layout"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
// 定义链接样式
.linkItem {
  color: #444;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 14px;

  font-family: georgia "Times New Roman" Times serif;
  &:hover {
    color: #409eff;
  }
}
.com-header {
  color: #333;
  font-size: 1.2em;
}
.item {
  line-height: 3em;
}
#comLeftNav {
  padding: 1em;
  .develop-guide {
    .guide-item {
    }
  }
  .components {
    .component-item {
      .component-classfy-tag {
        font-size: 0.9em;
        color: #ccc;
      }
    }
  }
}
</style>