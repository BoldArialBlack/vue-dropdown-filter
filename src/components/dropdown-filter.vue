<template>
  <el-popover
    ref="popper"
    v-bind="curPopperProps"
    :disabled="disabled"
    :popper-class="'vue-dropdown-filter-menu ' + curPopperProps.popperClass"
    @show="handleVisibleChange(true)"
    @hide="handleVisibleChange(false)"
  >
    <div
      slot="reference"
      :class="[popperVisible || (multiple ? !!sort.length : !!sort) ? 'dropdown-open' : 'dropdown-close', {'is-disabled': disabled}]"
      class="vue-dropdown-filter"
    >
      <slot>
        <span
          class="vue-dropdown-filter-link"
        >
          <i :class="icon + ' vue-dropdown-filter-icon'" />
        </span>
      </slot>
    </div>
    <div class="vue-dropdown-filter-items">
      <el-scrollbar
        v-bind="scrollbarProps"
      >
        <ul
          class="vue-dropdown-filter-scrollbar-view"
          style="position: relative"
        >
          <li
            v-if="multiple"
            :class="{'is-active': sort && !sort.length}"
            class="vue-dropdown-filter-item dropdown-check-all-item"
            @click="handleSelect()"
          >
            <span v-html="checkAllContent" />
          </li>
          <li
            v-for="item in options"
            :key="item[valueKey]"
            :class="[{'is-active': multiple ? sort && sort.includes(item[valueKey]) : sort === item[valueKey], 'is-disabled': item[disabledKey]}, item[classNameKey] || '']"
            class="vue-dropdown-filter-item"
            @click="handleSelect(item[valueKey], item[disabledKey])"
          >
            <span
              v-if="multiple"
              class="vue-dropdown-filter-check-icon"
            >
              <el-icon name="check" />
            </span>

            <span><item-content :data="item" /></span>
            <!-- <span>{{ item[labelKey] }}</span> -->
          </li>
        </ul>
      </el-scrollbar>
    </div>
  </el-popover>
</template>
<script>
import Vue from 'vue';
import {
  Popover,
  Icon,
  Scrollbar
} from 'element-ui';
Vue.use(Popover);
Vue.use(Icon);
Vue.use(Scrollbar);

export default {
  name: 'DropdownFilter',

  components: {
    ItemContent: {
      props: ['data'],
      inject: ['filter'],
      render(h) {
        const [data, parent, label] = [this.data, this.filter, this.filter.labelKey];
        // console.log(data, this.filter, 'render', label, data[label], parent, parent.renderContent);
        return (
          parent.renderContent
            ? parent.renderContent.call(parent._renderProxy, h, data)
            : <span>{data[label]}</span>
        );
      }
    }
  },

  props: {
    value: {
      type: [String, Array],
      default: undefined
    },
    options: {
      type: Array,
      default: () => ([])
    },
    disabled: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      default: false
    },
    checkAllContent: {
      type: String,
      default: '全部'
    },
    icon: {
      type: String,
      default: 'el-icon-sort'
    },
    renderContent: {
      type: Function,
      default: null
    },
    popperProps: {
      type: Object,
      default: () => ({})
    },
    scrollbarProps: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      sort: this.value ? this.value : (this.multiple ? [] : undefined),
      popperVisible: false
    };
  },

  provide() {
    return {
      filter: this
    };
  },

  computed: {
    curProps() {
      return Object.assign({
        label: 'label',
        value: 'value',
        disabled: 'disabled',
        className: 'className'
      }, this.props || {});
    },
    curPopperProps() {
      return Object.assign({
        visibleArrow: false,
        placement: 'bottom-start'
      }, this.popperProps || {});
    },
    labelKey() {
      return this.curProps.label;
    },
    valueKey() {
      return this.curProps.value;
    },
    disabledKey() {
      return this.curProps.disabled;
    },
    classNameKey() {
      return this.curProps.className;
    }
  },

  watch: {
    sort(val) {
      this.$emit('input', val);
    }
  },

  methods: {
    handleVisibleChange(visible) {
      if (visible && this.disabled) this.$refs.popper.doClose();
      this.popperVisible = visible;
      this.$emit('visible-change', visible);
    },

    handleSelect(value, disabled = false) {
      if (disabled) return;
      if (this.multiple) {
        if (!value) {
          this.sort = [];
          this.$refs.popper.doClose();
          this.$emit('change', this.sort);
          return;
        }
        const index = (this.sort || []).findIndex(item => item === value);
        if (index !== -1) {
          this.sort.splice(index, 1);
        } else {
          this.sort.push(value);
        }
        this.$emit('change', this.sort);
        return;
      }

      this.sort = value;
      this.$refs.popper.doClose();
      this.$emit('change', this.sort);
    }
  }
};
</script>
