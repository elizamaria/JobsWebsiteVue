<template>
    <a class="cardButton">
        <h2 id="title"> {{title}} </h2>
    </a>
</template>


<script>
export default {
   props: ['title']
}

</script>

<style>

.cardButton {
  height: 300px;
  border-radius: 5px;
  margin: 20px;
  width: 25%;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  background-color: rgb(220, 241, 250);
}

#title {
    font-size: 20px;
    color: #363636;
}

.cardButton:hover {
  background-color: rgb(80, 169, 253);
}

.go-button {
  padding-left: 25px;
  padding-right: 25px;
  width: 50%;
  border-width: 0px;
}

@media only screen and (max-width: 600px) {
  #title {
    font-size: 15px;
  }

  .cardButton {
    height: 200px;
    width: 90%;
    padding: 20px;
  }
}

@media only screen and (min-width: 600px) and (max-width: 900px) {
  #title {
    font-size: 17px;
  }

}

</style>