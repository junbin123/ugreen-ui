<script lang="ts">
import { columns  } from './columns.js'
import Vue from 'vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
  },
  data(){
    return {
      columns,
      formList: ['ProductSku','CreateDate','selectKey','myRadio'],
      formValues: {
        CreateDate: [],
        ProductSku: 'rrree'
      }
    }
  }
});
</script>

<template>
  <div id="app">
    <my-components-sample />
            {{formValues}}
        <USearchForm
        v-model="formValues"
            :columns="columns"
            :formList="formList"
            @onSearch="onSearch"
            @onReset="onReset"
            @onChange="onChange"
        />
  </div>
</template>
