import DropdownFilter from './components/dropdown-filter.vue'
import './styles/less/index.less'

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Vue.component('VueDropdownFilter', DropdownFilter)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('VueDropdownFilter', DropdownFilter)
}

DropdownFilter.install = install

export default DropdownFilter
