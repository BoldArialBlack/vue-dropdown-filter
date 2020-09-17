export const sourcecodeA = `<template>
  <div class="vd-demo__block vd-demo__block-2">
  <vue-dropdown-filter
    v-model="filter"
    :options="filterOptions"
    @change="handleFilter"
  />
  </div>
</template>
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
      }
    }
  }
</script>`

export const sourcecodeB = `<template>
  <div class="vd-demo__block vd-demo__block-2">
  <vue-dropdown-filter
    v-model="filters"
    :options="filterOptions"
    multiple
    @change="handleFilter"
  />
  </div>
</template>
<script>
  export default {
    data () {
      return {
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
      }
    }
  }
</script>`

export const sourcecodeC = `<template>
<div class="vd-demo__block vd-demo__block-2">
  <vue-dropdown-filter
    v-model="filter"
    :options="filterOptions"
    disabled
    @change="handleFilter"
  />
</div>
</template>

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
      }
    }
  }
</script>`

export const sourcecodeD = `<template slot="source">
<div class="vd-demo__block vd-demo__block-2">
  <vue-dropdown-filter
    v-model="filter"
    :options="filterOptions"
    @change="handleFilter"
  >
    筛选
  </vue-dropdown-filter>
</div>
</template>
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
      }
    }
  }
</script>`

export const sourcecodeE = `<template>
  <div class="vd-demo__block vd-demo__block-2">
    <vue-dropdown-filter
      v-model="filter"
      :options="filterOptions"
      :render-content="renderContent"
      @change="handleFilter"
    />
  </div>
</template>

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
`