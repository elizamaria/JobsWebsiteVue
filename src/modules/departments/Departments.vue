<template>
    <div>
        <Top  title="ENTER OUR DEPARTMENTS" subtitle="sdasdasdasdasdadasdasdasdasdasdasdasdasdadadsa" imgsource="https://www.cmllp.com/wp-content/uploads/2015/09/Company.jpg" ></Top>
    <section>
        <div class="columns">
            <DepartmentCard class="column" imgsource="https://vignette.wikia.nocookie.net/dreadnought/images/f/fd/Js-logo.png/revision/latest?cb=20160509122720" text="JS/UX"> </DepartmentCard>
            <div class="column">
                Second column
            </div>
            <div class="column">
                Third column
            </div>
            <div class="column">
                Fourth column
            </div>
        </div>
    </section>


    </div>
</template>


<script>
import Top from '../../components/Top.vue'
import DepartmentCard from './DepartmentCard.vue'

export default {
  components: { Top, DepartmentCard }
}

</script>


<style>

.columns {
    padding: 20px;
}

</style>