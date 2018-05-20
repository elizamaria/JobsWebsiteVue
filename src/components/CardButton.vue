<template>
    <div class="cardButton">
        <h2 id="title"> FIND AN INTERNSHIP </h2>
        <a class="button go-button">GO</a>
    </div>
</template>


<script>
export default {
   
}

</script>

<style>

.cardButton {
  height: 300px;
  border-radius: 5px;
  margin: 20px;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #B9E4F4;
}

#title {
    font-size: 20px;
    margin-bottom: 20px;
}

.cardButton:hover {
  background-color: #00b7da;
}

.go-button {
  padding-left: 25px;
  padding-right: 25px;
  width: 50%;
  border-width: 0px;
}
</style>