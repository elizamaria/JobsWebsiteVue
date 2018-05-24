<template>
<section class="is-info is-large">
    <div class="top_cont">
        <img id="cmpImage" :src="imgsource"/>
        <div id="contentText">
            <p class="title">
                {{title}}  
            </p>
            <p class="subtitle">
                {{subtitle }} 
            </p>
            <slot> </slot>
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
  font-size: 40px;
}

.subtitle {
  text-align: center;
  font-size: 25px;
}

.top_cont {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

#logo {
    width: 120px;
    height: auto;
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
    color: white;
    opacity: 0.4;
    height: auto;
    width: 100%;
} 

#contentText {
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


@media only screen and (max-width: 600px) {
    .title {
        font-size: 25px;
    }

    .subtitle {
        font-size: 15px;
    }
}

@media only screen and (min-width: 600px) and (max-width: 900px) {
    .title {
        font-size: 30px;
    }

    .subtitle {
        font-size: 20px;
    }
}


</style>