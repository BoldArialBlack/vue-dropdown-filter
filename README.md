# dropdown-filter

>  a dropdown filter component that's based on [element-ui](https://github.com/ElemeFE/element).

## Install

```bash
npm install vue-dropdown-filter -S
```

## Quick Start

```bash
import Vue from 'vue'
import DropdownFilter from 'vue-dropdown-filter'
# Vue.component('vue-dropdown-filter', DropdownFilter) # 可以指定组件名称
Vue.use(DropdownFilter) # 组件名称 `vue-dropdown-filter`
```

For more information, please refer to [DropdownFilter](https://github.com/BoldArialBlack/vue-dropdown-filter) in our documentation.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for demo with minification
npm run demo:build

# build for gh-pages with minification
npm run demo:prepublish

# build for production with minification
npm run build

# generate gh-pages
npm run deploy
```

## LICENSE

[MIT](http://opensource.org/licenses/MIT)

## 截图
![截图](https://github.com/BoldArialBlack/snap/example.gif)


## 基本用法
```
<template>
  <div class="vd-demo__block vd-demo__block-2">
    <vue-dropdown-filter
      v-model="filter"
      :options="filterOptions"
      :render-content="renderContent"
      @change="handleFilter"
    />
  </div>
</template>
```
```
<script>

<script>
  export default {
    data () {
      return {
        filter: '',
        filterOptions: [{
          label: '公开项',
          value: 'public',
          disabled: true
        }, {
          label: '未公开项',
          value: 'private'
        }, {
          label: '租户内',
          value: 'within'
        }, {
          label: '租户外',
          value: 'outside',
          className: 'class-name-test'
        }]
      }
    },
    methods: {
      handleFilter(value) {
        console.log(value);
      },
      renderContent(h, data) {
        return (<span>自定义渲染_{data.label}</span>);
      }
    }
  }
</script>
```


## DropdownFilter props

| 参数   | 说明  | 类型  | 可选值  | 默认值  |
|----------|---------|---------|-----------|-----------|
| props | 配置选项，具体见下表 | Object  | - | - |
| popover-props | popover配置选项，具体可以参考 `el-popover` 的文档 | Object  | - | - |
| scrollbar-props | scrollbar配置选项，具体可以参考 `el-scrollbar` 的文档 | Object  | - | - |
| value | 选中项绑定值 | String/Array  | - | - |
| options | 可选项数据源，键名可通过 `props` 属性配置 | Array  | - | - |
| disabled | 是否禁用 | Boolean  | - | false |
| multiple | 是否多选 | Boolean  | - | false |
| icon | 下拉筛选图标 | String  | - | gs-icon-sort |
| check-all-content | 多选时全选内容，支持html格式字符串 | String  | - | 全部 |
| render-content | 下拉菜单项内容区的渲染 Function | Function(h, data)  | - | - |

## Option props
| 参数   | 说明  | 类型  | 可选值  | 默认值  |
|----------|---------|---------|-----------|-----------|
| label | 指定节点标签为节点对象的某个属性值 | String  | - | label |
| value | 指定节点的值为节点、选项对象的某个属性值 | String  | - | value |
| disabled | 指定节点被禁用的属性值 | String  | - | disabled |
| className | 为当前节点添加 `class` | String  | Array | Object |

## DropdownFilter events
| 事件名称   | 说明  | 回调参数  |
|----------|---------|---------|
| visible-change | 下拉选项显示状态变化事件 | true/false |
| change | 当绑定值变化时触发的事件 | 当前值 |

## DropdownFilter slot
|    名称   | 说明  |
|----------|---------|
| - | 下拉筛选触发项内容 |