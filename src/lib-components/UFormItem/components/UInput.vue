<!--
 * @Author: junbin
 * @Date: 2022-05-07 10:06:32
 * @LastEditors: junbin junbin666@foxmail.com
 * @LastEditTime: 2022-05-07 15:35:50
 * @Description:
 *
-->
<template>
    <el-input v-model="currentValue" v-bind="componentProps"/>
</template>
<script>
export default {
  name: 'UInput',
  components: {},
  props: {
    value: {
      type: [String, Number, Boolean],
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
<style scoped lang="scss">
::v-deep{
.el-input__inner{
  margin: 0 !important;
}
}


</style>
