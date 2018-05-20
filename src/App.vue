<template>
  <div id="app">
   <!-- <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/input" exact>/input</router-link></li>
        <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
          <a>/bar</a>
        </router-link>
      </ul> -->
      <!-- <section class="section">
        <div class="container">
          <router-view class="view"></router-view> 
        </div>
      </section> -->
    <Top></Top>
    <section>
      <div class="why_us columns">
        <div class="column is-half">
          <h2><b> Why us? </b></h2>
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        </div>
        <div class="column is-half centered imageContainer">
           <img src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&h=350">
        </div>       
      </div>
    </section>
    <section>
      <div class="hireParagraph">
        <h2 id="hireHeader"><b> HOW WE HIRE? </b></h2>
         <p class="centered_text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem  Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
      </div>
    </section>
    <section>
      <div class="cardsContainer">
        <CardButton> </CardButton>
        <CardButton> </CardButton>
      </div>
    </section>
   <Footer> </Footer>
  </div>
</template>

<script>
import Top from './components/Top.vue'
import Footer from './components/Footer.vue'
import CardButton from './components/CardButton.vue'

export default {
  components: { Top, Footer, CardButton }
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
