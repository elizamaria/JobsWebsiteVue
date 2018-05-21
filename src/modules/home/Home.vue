<template>
    <div>
    <Top  title="SONY" subtitle="Great products made with passion" imgsource="http://www2.vollmer-group.com/uploads/media/VOLLMER_Company_01.jpg"></Top>
    <section>
      <div class="why_us columns">
        <div class="column is-half">
          <h2><b> Why us? </b></h2>
         <p class="text_desc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
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
         <p class="centered_text text_desc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
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
        <CardButton title="FIND AN INTERNSHIP"> </CardButton>
        <CardButton title="FIND A JOB" > </CardButton>
      </div>
    </section>
</div>
</template>

<script>
import Top from '../../components/Top.vue'
import Footer from '../../components/Footer.vue'
import CardButton from '../../components/CardButton.vue'
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

@media only screen and (max-width: 600px) {
  #title {
    font-size: 15px;
  }

  .cardsContainer {
    display: flex;
    flex-direction: column;
  }

  .text_desc {
    font-size: 14px;
  }
}

@media only screen and (min-width: 600px) and (max-width: 900px) {
  #title {
    font-size: 18px;
  }

  .text_desc {
    font-size: 16px;
  }
}

</style>
