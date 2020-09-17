<template>
  <div id="app" class="vue-dropdown-filter">
    <demonstration tag="h2" title="DropdownFilter 下拉筛选组件" :show-content="false">
    </demonstration>
    <demonstration title="基本" :highlight="sourcecodeA" :multiple="true">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
          <vue-dropdown-filter
            v-model="filter"
            :options="filterOptions"
            @change="handleFilter"
          />
        </div>
      </template>
    </demonstration>
    <demonstration title="多选" :highlight="sourcecodeB" :multiple="true">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
          <vue-dropdown-filter
            v-model="filters"
            :options="filterOptions"
            multiple
            @change="handleFilter"
          />
        </div>
      </template>
      <!-- <template slot="explanation">
        组件设置 <code>disabled</code> 属性即可取消弹出触发
      </template> -->
    </demonstration>
    <demonstration title="不可用状态" :highlight="sourcecodeC">
      <template slot="source">
        <vue-dropdown-filter
          v-model="filter"
          :options="filterOptions"
          disabled
          @change="handleFilter"
        />
      </template>
    </demonstration>
    <demonstration title="自定义触发项" :highlight="sourcecodeD">
      <template slot="source">
        <vue-dropdown-filter
          v-model="filter"
          :options="filterOptions"
          @change="handleFilter"
        >
          筛选
        </vue-dropdown-filter>
      </template>
    </demonstration>
    <demonstration title="自定义渲染菜单项" :highlight="sourcecodeE">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
          <vue-dropdown-filter
            v-model="filter"
            :options="filterOptions"
            :render-content="renderContent"
            @change="handleFilter"
          />
        </div>
      </template>
    </demonstration>
  </div>
</template>

<script>
  import { sourcecodeA, sourcecodeB, sourcecodeC, sourcecodeD, sourcecodeE } from './template'

  export default {
    data () {
      return {
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD,
        sourcecodeE,
        filter: '',
        filters: [],
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

<style lang="less" rel="stylesheet/less">
  #app {
    margin: 60px auto;
  }
</style>
