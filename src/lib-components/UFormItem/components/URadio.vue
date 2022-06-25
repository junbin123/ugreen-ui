<template>
    <el-radio-group v-model="currentValue">
        <el-radio v-bind="componentProps" v-for="item in options" :key="item.value" :label="item.value">{{
            item.label
        }}</el-radio>
    </el-radio-group>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    componentProps: {
      type: Object,
      default: () => ({})
    },
    customStyle: {
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
  }
}
</script>
