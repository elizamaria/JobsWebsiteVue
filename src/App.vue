<template>
  <div id="app">
   <message> Hello There </message>
   <input-form> aaaaa </input-form>
   <shared-state> </shared-state>
  </div>
</template>

<script>

import Message from './components/Message.vue'
import InputForm from './components/InputForm.vue'
import SharedState from './components/SharedState.vue'
export default {
  name: 'app',
  components: { Message, InputForm, SharedState },
  data () {
    return {
    }
  }
}

</script>

<style>

</style>
