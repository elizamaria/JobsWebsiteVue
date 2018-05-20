<template>

<div class="box"> 
    <img id="logo" :src="imgsource">
    <p id="description"> {{text}} </p>
</div>

</template>


<script>
export default {
   props: [ 'imgsource', 'text']
}

</script>


<style>

#logo {
    max-width:100%;
    max-height:100%;
}

#description {
    position: absolute;
    bottom: 0;
    
}

.box {
    padding: 20px;
    height: 300px;
    display: flex;
    position: relative;
}
</style>