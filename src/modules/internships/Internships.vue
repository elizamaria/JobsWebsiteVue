<template>
    <div class="cont"> 
        <Top :title="title" :subtitle="subtitle" :imgsource="imgSource"></Top>

    <div class="hero-foot">
        <nav class="tabs is-boxed">
        <div class="container">
            <ul id="ul_cont">
            <li :class="{ 'is-active': activeTab }">
                <a @click="onPress">Internships</a>
            </li>
            <li :class="{ 'is-active': !activeTab }">
                <a @click="onPress">Training Programs</a>
            </li>
            </ul>
        </div>
        </nav>
    </div>
    <section id="rows_container"> 
        <ul>
            <li v-for="internship in viewList" :key="internship.id"> 
                <div class="row_container columns"> 
                    <span class="column"> <b> {{internship.title}} </b> </span>
                    <span class="column"> {{internship.duration}} </span>
                    <span class="column"> <b> {{internship.location}} </b> </span>
                    <span class="column" v-if="internship.deadline"> Apply until: {{internship.deadline}} </span>
                    <a class="read_more_btn column"> Read more </a>
                </div>
            </li>
        </ul>
    </section>
</div>

</template>

<script>
import Top from '../../components/Top.vue'

export default {
    components: { Top },
    data() {
        return {
            title: "Internships and Training Programs",
            subtitle: "Choose the perfect opportunity for you",
            imgSource: "http://www.omega-consulting.ro/wp-content/uploads/2017/12/POCU-OMEGA-Consulting-Training.jpg",
            activeTab: true,
            internships: [
                {
                    id: 1,
                    title: "Automation Internship",
                    duration: '3 months',
                    deadline: '31/06/2018',
                    location: "London",
                },
                {
                    id: 2,
                    title: "Summer Internships",
                    duration: '2 months',
                    deadline: '08/07/2018',
                    location: "Bucharest",
                },
                {
                    id: 3,
                    title: "Automation Internship",
                    duration: '3 months',
                    deadline: '07/09/2018',
                    location: "London",
                },
                {
                    id: 4,
                    title: "Automation Internship",
                    duration: '3 months',
                    deadline: '8/06/2018',
                    location: "London",
                },
            ],
            trainingPrograms: [
                {
                    id: 1,
                    title: "Product Engineering",
                    duration: '4 days',
                    location: "London",
                },
                {
                    id: 2,
                    title: "A manager responsabilities",
                    duration: '7 days',
                    location: "Bucharest",
                },
                {
                    id: 3,
                    title: "QA Automation Training",
                    duration: '1 week',
                    location: "Paris",
                },
            ],
            viewList: []
        }
    },

    created() {
        this.viewList = this.internships
    },

    methods: {
        onPress () {
             if (!this.activeTab) {
                this.viewList = this.internships
            } else {
                this.viewList = this.trainingPrograms
            }
            this.activeTab = !this.activeTab
        }
    }
}

</script>


<style>

.cont {
    padding-bottom: 40px;
}

#ul_cont {
    display: flex;
    justify-content: center;
    align-items: center;
}

.read_more_btn {
    width: 100px;
    align-self: flex-end;
    text-align: center;
}

.row_container {
    flex: 1;
    margin-right: 30px;
    margin-left: 30px;
    display: flex;
    border: 1px solid black;
    margin-top: 20px;
    flex-direction: row;
    justify-content: center;
    border-radius: 10px;
    padding: 7px;
}

.row_container:hover {
    background-color: #E7EFF3
}

#content-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#rows_container {
    display: flex;
    flex-direction: column;
}

</style>