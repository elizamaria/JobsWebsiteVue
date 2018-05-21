<template>
  <div id="app">
      <Navbar> </Navbar>
      <router-view class="view"></router-view> 
      <Footer> </Footer>      
  </div>
</template>

<script>
import Home from './modules/home/Home.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Home, Navbar, Footer }
}
</script>

<style lang="css">

h2 {
  margin-bottom: 10px;
}

#hireHeader {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.centered_text {
  text-align: center;
}

.why_us {
  padding: 20px;
  padding-top: 35px;
  padding-bottom: 35px;
}

.imageContainer {
  display: flex;
}

.hireParagraph {
  padding: 25px;
  padding-top: 35px;
  padding-bottom: 35px;
  background-color: #F6FCFF;
}

.cardsContainer {
  display: flex;
  flex: 1;
  justify-content: center;
  padding-top: 35px;
  padding-bottom: 35px;
}

.centered {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}



</style>
