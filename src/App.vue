<template>
  <div id="app">
   <!-- <message> Hello There </message> -->
   <!-- <input-form> aaaaa </input-form> -->
   <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/input" exact>/input</router-link></li>
        <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
          <a>/bar</a>
        </router-link>
      </ul>
      <router-view class="view"></router-view>
  </div>
</template>

<script>
</script>

<style>

</style>
