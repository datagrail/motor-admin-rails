import 'index.scss'
import 'utils/styles/bootstrap.scss'

import { createApp } from 'vue'

import App from './app'

import router from './router'

import PopoverDirective from 'view3/src/directives/popover'
import TooltipDirective from 'view3/src/directives/tooltip'
import VueClipboard from 'view3/src/directives/clipboard'

import DynamicModal from 'view3/src/plugins/dynamic-modal'
import DynamicDrawer from 'view3/src/plugins/dynamic-drawer'
import DynamicPopover from 'view3/src/plugins/dynamic-popover'
import DynamicDialog from 'view3/src/plugins/dynamic-dialog'
import DynamicMessage from 'view3/src/plugins/dynamic-message'

import Button from 'view3/src/components/button'
import Submenu from 'view3/src/components/submenu'
import Menu from 'view3/src/components/menu'
import MenuItem from 'view3/src/components/menu-item'
import Dropdown from 'view3/src/components/dropdown'
import DropdownMenu from 'view3/src/components/dropdown-menu'
import DropdownItem from 'view3/src/components/dropdown-item'
import Header from 'view3/src/components/header'
import Card from 'view3/src/components/card'
import Icon from 'view3/src/components/icon'
import Content from 'view3/src/components/content'
import Layout from 'view3/src/components/layout'
import Input from 'view3/src/components/input'
import InputNumber from 'view3/src/components/input-number'
import Form from 'view3/src/components/form'
import FormItem from 'view3/src/components/form-item'
import Radio from 'view3/src/components/radio'
import RadioGroup from 'view3/src/components/radio-group'
import Spin from 'view3/src/components/spin'
import Checkbox from 'view3/src/components/checkbox'
import Tag from 'view3/src/components/tag'
import Panel from 'view3/src/components/panel'
import Tooltip from 'view3/src/components/tooltip'
import Select from 'view3/src/components/select'
import Option from 'view3/src/components/option'
import Sider from 'view3/src/components/sider'
import Breadcrumb from 'view3/src/components/breadcrumb'
import BreadcrumbItem from 'view3/src/components/breadcrumb-item'
import Page from 'view3/src/components/page'
import AutoComplete from 'view3/src/components/auto-complete'
import Split from 'view3/src/components/split'
import DatePicker from 'view3/src/components/date-picker'
import Badge from 'view3/src/components/badge'

import { VueDraggableNext } from 'vue-draggable-next'
import MinimalSelect from 'utils/components/minimal_select'

const app = createApp(App)

app.directive('popover', PopoverDirective)
app.directive('tooltip', TooltipDirective)
app.directive('clipboard', VueClipboard)

app.component('VButton', Button)
app.component('Menu', Menu)
app.component('Submenu', Submenu)
app.component('MenuItem', MenuItem)
app.component('Icon', Icon)
app.component('VHeader', Header)
app.component('Card', Card)
app.component('VInput', Input)
app.component('VForm', Form)
app.component('FormItem', FormItem)
app.component('Spin', Spin)
app.component('Checkbox', Checkbox)
app.component('Tag', Tag)
app.component('Radio', Radio)
app.component('RadioGroup', RadioGroup)
app.component('Panel', Panel)
app.component('Tooltip', Tooltip)
app.component('VSelect', Select)
app.component('VOption', Option)
app.component('Content', Content)
app.component('Layout', Layout)
app.component('Sider', Sider)
app.component('Breadcrumb', Breadcrumb)
app.component('BreadcrumbItem', BreadcrumbItem)
app.component('Pagination', Page)
app.component('Dropdown', Dropdown)
app.component('DropdownMenu', DropdownMenu)
app.component('DropdownItem', DropdownItem)
app.component('InputNumber', InputNumber)
app.component('AutoComplete', AutoComplete)
app.component('Split', Split)
app.component('DatePicker', DatePicker)
app.component('MSelect', MinimalSelect)
app.component('Badge', Badge)
app.component('VueDraggableNext', VueDraggableNext)

app.use(router)

app.use(DynamicModal)
app.use(DynamicDrawer)
app.use(DynamicPopover)
app.use(DynamicDialog)
app.use(DynamicMessage)

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('app')) {
    app.mount('#app')
  }
})
