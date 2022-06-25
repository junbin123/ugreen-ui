<!--
 * @Author: Liu Qi
 * @Date: 2022-04-24 10:47:54
 * @LastEditors: junbin junbin666@foxmail.com
 * @LastEditTime: 2022-05-09 09:10:49
 * @FilePath: /amazon-published-admin/src/components/UFormItem/index.vue
 * @Description:
 *
-->
<template>
    <div :style="currentStyle">
        <components
            :is="componentDict[formType]"
            v-if="componentDict[formType]"
            v-model="currentValue"
            :componentProps="defaultProps"
            :options="options"
        />
        <div v-else>没有定义组件</div>
    </div>
</template>
<script>
export default {
  name: 'UFormItem',
  props: {
    value: {
      type: [String, Number, Boolean, Array, Object],
      default: ''
    },
    componentProps: {
      // element-ui的props
      type: Object,
      default: () => ({})
    },
    options: {
      // select下拉选项
      type: Array,
      default: () => []
    },
    customStyle: {
      // 自定义样式
      type: Object,
      default: () => ({})
    },
    formType: {
      // 表单类型
      type: String,
      default: ''
    },
    formKey:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      //  input textarea radio select date dateRange
      componentDict: {
        input: () => import('./components/UInput'),
        textarea: () => import('./components/UInput'),
        select: () => import('./components/USelect'),
        dateRange: () => import('./components/UDatePicker'),
        date: () => import('./components/UDatePicker'),
        radio: () => import('./components/URadio')
      },
      datePickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      dateRangePickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  computed: {
    currentStyle({customStyle}){
      return {
        width: '260px',
        ...customStyle,
      }
    },
    defaultProps({ formType, datePickerOptions, dateRangePickerOptions, componentProps }) {
      const baseProps = {
        size: 'mini',
        ...componentProps
      }
      if (formType === 'textarea') {
        return {
          ...baseProps,
          type: 'textarea'
        }
      }
      if (formType === 'date') {
        return {
          ...baseProps,
          'value-format':'yyyy-MM-dd',
          type: 'date',
          placeholder: '选择日期',
          'picker-options': datePickerOptions
        }
      }
      if (formType === 'dateRange') {
        return {
          ...baseProps,
          'value-format':'yyyy-MM-dd',
          type: 'daterange',
          'unlink-panels': true,
          'range-separator': '至',
          'start-placeholder': '开始日期',
          'end-placeholder': '结束日期',
          'picker-options': dateRangePickerOptions
        }
      }
      return baseProps
    },
    currentValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
        const data = {
          value,
          formType: this.formType,
          formKey: this.formKey,
        }
        if(['select','radio'].includes(this.formType)){
          const {options=[]} = this
          data.optionsValue =  options.find(item => item.value === value)
        }
        this.$emit('onChange', data)
      }
    }
  },
  methods: {}
}
</script>
