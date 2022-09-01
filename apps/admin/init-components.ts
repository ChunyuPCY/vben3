// 按需导入组件
import {
  NTag,
  NCard,
  NDivider,
  NSpace,
  NPopover,
  NButton,
  NAvatar,
  NStatistic,
  NSelect,
  NInput,
  NThing,
  NPopconfirm,
  NIcon,
  NCheckbox,
  NCheckboxGroup,
  NButtonGroup,
  NModal,
  NEmpty,
  NUpload,
  NUploadDragger,
  NTabs,
  NTabPane,
  NGrid,
  NGridItem,
  NEllipsis,
  NImage,
  NMessageProvider,
  useMessage,
  NPagination,
  NRadio,
  NRadioButton,
  NRadioGroup,
  NText,
  NConfigProvider,
  NDynamicTags,
  NColorPicker,
  NDescriptions,
  NDescriptionsItem,
  useNotification,
  NNotificationProvider,
  NSwitch,
  NMenu,
  // dateZhCN,
  zhCN,
  // darkTheme,
  NBreadcrumb,
  NBreadcrumbItem,
  NLayout,
  NLayoutSider,
  NLayoutFooter,
  NLayoutContent,
  NLayoutHeader,
  NForm,
  NFormItem,
  NDropdown,
} from 'naive-ui'

import {
  initVbenComponent,
  locale,
  setNotice,
  setMessage,
} from '@vben/vbencomponents'
import { Card } from 'ant-design-vue'
export async function registerComponents(app) {
  initVbenComponent(app, {
    Tag: NTag,
    Card: NCard,
    // Card: Card,
    Menu: NMenu,
    Divider: NDivider,
    Space: NSpace,
    Popover: NPopover,
    Button: NButton,
    ButtonGroup: NButtonGroup,
    Avatar: NAvatar,
    Statistic: NStatistic,
    Select: NSelect,
    Input: NInput,
    Form: NForm,
    FormItem: NFormItem,
    Thing: NThing,
    Popconfirm: NPopconfirm,
    Icon: NIcon,
    Checkbox: NCheckbox,
    CheckboxGroup: NCheckboxGroup,
    Breadcrumb: NBreadcrumb,
    BreadcrumbItem: NBreadcrumbItem,
    Modal: NModal,
    Empty: NEmpty,
    Upload: NUpload,
    UploadDragger: NUploadDragger,
    Tabs: NTabs,
    TabPane: NTabPane,
    Grid: NGrid,
    GridItem: NGridItem,
    Ellipsis: NEllipsis,
    Image: NImage,
    MessageProvider: NMessageProvider,
    Pagination: NPagination,
    Radio: NRadio,
    RadioButton: NRadioButton,
    RadioGroup: NRadioGroup,
    Text: NText,
    Config: NConfigProvider,
    DynamicTags: NDynamicTags,
    ColorPicker: NColorPicker,
    Descriptions: NDescriptions,
    DescriptionsItem: NDescriptionsItem,
    NotificationProvider: NNotificationProvider,
    Switch: NSwitch,
    Layout: NLayout,
    LayoutHeader: NLayoutHeader,
    LayoutFooter: NLayoutFooter,
    LayoutSider: NLayoutSider,
    LayoutContent: NLayoutContent,
    Dropdown: NDropdown,
  })
  setMessage(useMessage)
  setNotice(useNotification)
  // @ts-ignore
  locale.locale = zhCN
}