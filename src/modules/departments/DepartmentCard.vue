<template>

<a class="dep_container"> 
    <p class="dep_title"> <b>{{title}} </b></p>
    <div class="dep_desc_cont"><p class="dep_desc"> {{text}} </p></div>
</a>

</template>

<script>
export default {
   props: [ 'title', 'text']
}

</script>

<style>

.dep_desc_cont {
    display: flex;
    flex: 1;
    justify-content: center;
}

.dep_desc {
    /* font-size: 20px; */
    color: #363636;
    font-size: 15px;
    text-align: center;
}

.dep_title {
    font-size: 20px;
    margin-bottom: 20px;
}

.dep_container {
    padding: 30px;
    margin: 10px;
    width: 250px;
    display: flex;
    border-radius: 5px;
    background-color: #E7EFF3;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 300px;
}

.dep_container:hover {
    background-color: #E7EFF3
}

@media only screen and (max-width: 700px) {

.dep_container {
    padding: 30px;
    margin: 10px;
    width: 90%;
    display: flex;
    height: 200px;
    }
}
</style>