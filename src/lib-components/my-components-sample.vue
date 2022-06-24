<script lang="ts">
import Vue from 'vue';

interface SampleData {
  counter: number;
  initCounter: number;
  message: {
    action: string | null;
    amount: number | null;
  };
}

export default Vue.extend({
  name: 'MyComponentsSample', // vue component name
  data(): SampleData {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null,
      },
    };
  },
  computed: {
    changedBy() {
      const { message } = this as SampleData;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    },
  },
  methods: {
    increment(arg: Event | number): void {
      const amount = (typeof arg !== 'number') ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement(arg: Event | number): void {
      const amount = (typeof arg !== 'number') ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset(): void {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    },
  },
});
</script>

<template>
  <div class="my-components-sample">
    <p>我是测试组件</p>
    <el-button>hello</el-button>
  </div>
</template>

<style scoped>
  .my-components-sample {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: green;
    text-align: center;
    padding: 25px;
  }
</style>
