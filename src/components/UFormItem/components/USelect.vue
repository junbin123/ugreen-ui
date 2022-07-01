<template>
  <el-select
    v-model="currentValue"
    v-bind="currentProps"
    style="width:100%"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
<script>
export default {
  name: 'USelect',
  props: {
    value: {
      type: [String, Number, Boolean, Array],
      default: ''
    },
    componentProps: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    currentProps({ componentProps }) {
      return componentProps
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
::v-deep{
  .el-input__inner{
    margin: 0 !important;
  }
}


</style>

