/* eslint comma-dangle: ["error", "always-multiline"] */

// Import components core
// import './_style/global.styl'
import {transformCamelCase, warn} from './_util'
import {setLocale, t} from './_locale'
import Button from './button/index.vue'
import Icon from './icon/index.vue'
import Popup from './popup/index.vue'
import PopupTitleBar from './popup-title-bar/index.vue'
import ActionBar from './action-bar/index.vue'
import ActionSheet from './action-sheet'
import DropMenu from './drop-menu/index.vue'
import Picker from './picker/index.vue'
import Selector from './selector/index.vue'
import Swiper from './swiper/index.vue'
import SwiperItem from './swiper-item/index.vue'
import Toast from './toast'
import Tip from './tip'
import Tabs from './tabs/index.vue'
import TabPane from './tab-pane/index.vue'
import TabBar from './tab-bar/index.vue'
import Tag from './tag/index.vue'
import InputItem from './input-item/index.vue'
import Stepper from './stepper/index.vue'
import Steps from './steps/index.vue'
import NoticeBar from './notice-bar/index.vue'
import ImageReader from './image-reader/index.vue'
import ImageViewer from './image-viewer/index.vue'
import NumberKeyboard from './number-keyboard/index.vue'
import Landscape from './landscape/index.vue'
import ResultPage from './result-page/index.vue'
import TabPicker from './tab-picker/index.vue'
import Dialog from './dialog'
import Field from './field/index.vue'
import FieldItem from './field-item/index.vue'
import CellItem from './cell-item/index.vue'
import Switch from './switch/index.vue'
import Agree from './agree/index.vue'
import Radio from './radio/index.vue'
import RadioGroup from './radio-group/index.vue'
import RadioBox from './radio-box/index.vue'
import RadioList from './radio-list/index.vue'
import DatePicker from './date-picker/index.vue'
import Captcha from './captcha/index.vue'
import Codebox from './codebox/index.vue'
import Cashier from './cashier/index.vue'
import Chart from './chart/index.vue'
import Amount from './amount/index.vue'
import ActivityIndicator from './activity-indicator/index.vue'
import Check from './check/index.vue'
import CheckBox from './check-box/index.vue'
import CheckGroup from './check-group/index.vue'
import CheckList from './check-list/index.vue'
import ScrollView from './scroll-view/index.vue'
import ScrollViewRefresh from './scroll-view-refresh/index.vue'
import ScrollViewMore from './scroll-view-more/index.vue'
import Bill from './bill/index.vue'
import WaterMark from './water-mark/index.vue'
import Transition from './transition/index.vue'
import DetailItem from './detail-item/index.vue'
import Slider from './slider/index.vue'
import Progress from './progress/index.vue'
import Ruler from './ruler/index.vue'
import TextareaItem from './textarea-item/index.vue'
import Skeleton from './skeleton/index.vue'
/* @init<%import ${componentNameUpper} from './${componentName}'%> */

// Totally importing reminder
warn(
  'You are using a whole package of mand-mobile, ' +
    'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  'warn',
)

/* global MAN_VERSION */
const version = /* @echo MAN_VERSION */ MAN_VERSION

export const components = {
  Button,
  Icon,
  Popup,
  PopupTitleBar,
  ActionBar,
  ActionSheet,
  DropMenu,
  Picker,
  Selector,
  TabBar,
  Swiper,
  SwiperItem,
  Tip,
  Tabs,
  Tag,
  InputItem,
  Stepper,
  Steps,
  NoticeBar,
  ImageReader,
  ImageViewer,
  NumberKeyboard,
  Landscape,
  ResultPage,
  TabPicker,
  Dialog,
  Field,
  FieldItem,
  CellItem,
  Switch,
  Agree,
  Radio,
  RadioGroup,
  RadioBox,
  RadioList,
  DatePicker,
  Captcha,
  Codebox,
  Cashier,
  Chart,
  Amount,
  ActivityIndicator,
  Check,
  CheckBox,
  CheckGroup,
  CheckList,
  ScrollView,
  ScrollViewRefresh,
  ScrollViewMore,
  Bill,
  WaterMark,
  TabPane,
  Transition,
  DetailItem,
  Slider,
  Progress,
  Ruler,
  TextareaItem,
  Skeleton,
  /* @init<%${componentNameUpper},%> */
}

// Define plugin installation method
const install = function(Vue) {
  if (!Vue || install.installed) {
    return
  }

  // Register global components
  const componentsNames = Object.keys(components)
  componentsNames.forEach(name => {
    const component = components[name]
    if (component.name) {
      Vue.component(component.name, component) // kebab-case
      Vue.component(transformCamelCase(`-${component.name}`), component) // PascalCase
    }
  })

  // Mount to prototype
  Vue.prototype.$toast = Toast
  Vue.prototype.$dialog = Dialog
  Vue.prototype.$actionsheet = ActionSheet
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// xport components
export {
  install,
  version,
  Button,
  Icon,
  Popup,
  PopupTitleBar,
  ActionBar,
  ActionSheet,
  DropMenu,
  Picker,
  Selector,
  TabBar,
  Swiper,
  SwiperItem,
  Toast,
  Tip,
  Tabs,
  Tag,
  InputItem,
  Stepper,
  Steps,
  NoticeBar,
  ImageReader,
  ImageViewer,
  NumberKeyboard,
  Landscape,
  ResultPage,
  TabPicker,
  Dialog,
  Field,
  FieldItem,
  CellItem,
  Switch,
  Agree,
  Radio,
  RadioGroup,
  RadioBox,
  RadioList,
  DatePicker,
  Captcha,
  Codebox,
  Cashier,
  Chart,
  Amount,
  ActivityIndicator,
  Check,
  CheckBox,
  CheckGroup,
  CheckList,
  ScrollView,
  ScrollViewRefresh,
  ScrollViewMore,
  Bill,
  WaterMark,
  TabPane,
  Transition,
  DetailItem,
  Slider,
  Progress,
  Ruler,
  TextareaItem,
  Skeleton,
  setLocale,
  t,
  /* @init<%${componentNameUpper},%> */
}

export default {
  install,
  version,
}
