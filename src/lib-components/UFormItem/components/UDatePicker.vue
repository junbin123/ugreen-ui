<template>
    <el-date-picker v-model="currentValue" v-bind="componentProps"  style="width:100%"/>
</template>
<script>
export default {
  name: 'UDatePicker',
  props: {
    value: {
      type: [String, Number, Boolean, Array],
      default: ''
    },
    componentProps: {
      type: Object,
      default: () => ({})
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
    }
  },
  methods: {}
}
</script>
