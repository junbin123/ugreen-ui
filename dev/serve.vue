<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { MyComponentsSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  MyComponentsSample,
  // }
});
</script>

<template>
  <div id="app">
    <my-components-sample />
  </div>
</template>
