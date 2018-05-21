<template>
    <div class="is-info is-large">
        <Top  :title="title" :subtitle="subtitle" imgsource="https://www.cmllp.com/wp-content/uploads/2015/09/Company.jpg" ></Top>
        <section>
            <div class="column_c">
                <DepartmentCard :key="dep.title" v-for="dep in departments1" class="ccolumn" :title="dep.title" :text="dep.description"> </DepartmentCard>
            </div>
            <div class="column_c">
                <DepartmentCard :key="dep.title" v-for="dep in departments2" class="ccolumn" :title="dep.title" :text="dep.description"> </DepartmentCard>
            </div>
        </section>
    </div>
</template>


<script>
import Top from '../../components/Top.vue'
import DepartmentCard from './DepartmentCard.vue'

export default {
  components: { Top, DepartmentCard },

   data () {
        return {
           title: 'ENTER ONE OF OUR DEPARTMENTS',
           subtitle: 'Find the department that best suits your needs and join us',
           departments1: [
            {
                title: 'C++',
                description: 'Sint aeterno eos no. Ut eam eros scaevola maluisset. Te vim vide decore facilis, vis at accumsan definitionem. Duo in debitis noluisse quaestio, vidit imperdiet mei et.'
            },
            {
                title: 'JAVA',
                description: 'Sint aeterno eos no. Ut eam eros scaevola maluisset. Te vim vide decore facilis, vis at accumsan definitionem.'
            },
            {
                title: 'PHP',
                description: 'Sint aeterno eos no. Ut eam eros scaevola maluisset. Te vim vide decore facilis, '
            }
           ],
           departments2: [
            {
                title: 'HARDWARE',
                description: 'Sint aeterno eos no. Ut eam eros scaevola maluisset. Te vim vide decore facilis,  Sint aeterno eos no. Ut eam eros scaevola maluisset. Te vim vide decore facilis, '
            },
            {
                title: 'Automation',
                description: 'Sint aeterno eos no. Ut eam eros scaevola maluisset. Te vim vide decore facilis, '
            },
            {
                title: 'Machine Learning',
                description: 'Sint aeterno eos no. Ut eam eros scaevola maluisset. Te vim vide decore facilis, '
            }
           ]
        }
    },
   
}
</script>
<style>

.column_c {
    padding: 30px;
    display: flex;
    justify-content: space-around;
}

@media only screen and (max-width: 700px) {
.column_c {
    padding-bottom: 0px;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
}
}

@media only screen and (min-width: 600px) {

}

</style>