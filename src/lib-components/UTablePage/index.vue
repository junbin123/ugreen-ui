<template>
    <div >
      我是通用表格页面组件
    </div>
</template>

<script>
import { debounce } from 'lodash'
export default {
  name: 'UTablePage',
  components: {  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    columns: {
      // 表单项配置信息
      type: Object,
      default: () => ({})
    },
    formList: {
      // 表单项列表
      type: Array,
      default: () => []
    },
    value: {
      // 表单值
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  computed:{
    currentValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }

  },
  mounted() {},
  methods: {
    onSearch: debounce(function() {
      this.$emit('onSearch',this.currentValue)
    }, 300),

    onReset() {
      this.currentValue = {}
      this.$emit('onReset')
    },
    
    // 监听表单项值变化
    formChange({ value, formType ,formKey}) {
      this.$emit('onChange',{value:this.currentValue ,formKey})
      if (['input', 'textarea'].includes(formType)) {
        if (value === '') {
          this.onSearch()
        }
        return
      }
      this.onSearch()
    },
    // 表单点击回车事件
    formEnter() {
      this.onSearch()
    }
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  flex-wrap: wrap;
}
::v-deep {
  .el-form-item {
    margin: 0px !important;
    display: flex !important;
    align-items: center;
    min-height: 40px;
  }
}
</style>
