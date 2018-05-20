<template>
<section class="is-info is-large">
    <div class="cont">
        <img id="cmpImage" :src="imgsource"/>
        <div id="contentText">
            <p class="title">
                {{title}}  
            </p>
            <p class="subtitle">
                {{subtitle }} 
            </p>
        </div>
    </div>
  </section>
</template>


<script>
export default {
   props: ['title', 'subtitle', 'imgsource'],
}

</script>


<style>
.title {
  text-align: center;
}

.subtitle {
  text-align: center;
}

.cont {

}

#logo {
    width: 120px;
    height: 60px;
}

.hero {
    padding-top: 20px;
}

.icon {
    margin-right: 20px;
}

.navbar {
    padding-right: 20px;
    padding-left: 20px;
}

#cmpImage {
    position: relative;
    color: white;
    opacity: 0.5;
} 

#contentText {
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>