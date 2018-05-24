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
                <div class="row_cont">
                    <div class="main_details columns " :class="{ 'expand' : internship.expand }"> 
                        <span class="column"> <b> {{internship.title}} </b> </span>
                        <span class="column hide"> {{internship.duration}} </span>
                        <span class="column"> <b> {{internship.location}} </b> </span>
                        <span class="column hide" v-if="internship.deadline"> Apply until: {{internship.deadline}} </span>
                        <span class="read_more column"> <a @click="readMore(internship)"> Read more </a> </span>
                    </div>
                    <span v-if="internship.expand" class="show"> Duration: {{internship.duration}} </span>
                    <span v-if="internship.deadline && internship.expand" class="show"> Apply until: {{internship.deadline}} </span>
                    <p v-if="internship.expand" class="elem_desc"> <b>Description: </b> {{internship.description}} </p>
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
                    description: "It is a long established fact that a reader will be distracted by the readable content of a " + 
                    "page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution " + 
                    "of letters, as opposed to using 'Content here, content here', making it look like readable English."
                },
                {
                    id: 2,
                    title: "Summer Internships",
                    duration: '2 months',
                    deadline: '08/07/2018',
                    location: "Bucharest",
                    description: "It is a long established fact that a reader will be distracted by the readable content of a " + 
                    "page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution " + 
                    "of letters, as opposed to using 'Content here, content here', making it look like readable English."
                },
                {
                    id: 3,
                    title: "QA Internship",
                    duration: '2 months',
                    deadline: '07/09/2018',
                    location: "London",
                    description: "It is a long established fact that a reader will be distracted by the readable content of a " + 
                    "page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution " + 
                    "of letters, as opposed to using 'Content here, content here', making it look like readable English."
                },
                {
                    id: 4,
                    title: "BI Internship",
                    duration: '3 months',
                    deadline: '8/06/2018',
                    location: "London",
                    description: "It is a long established fact that a reader will be distracted by the readable content of a " + 
                    "page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution " + 
                    "of letters, as opposed to using 'Content here, content here', making it look like readable English."
                },
            ],
            trainingPrograms: [
                {
                    id: 1,
                    title: "Product Engineering",
                    duration: '4 days',
                    location: "London",
                     description: "It is a long established fact that a reader will be distracted by the readable content of a " + 
                    "page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution " + 
                    "of letters, as opposed to using 'Content here, content here', making it look like readable English."
                },
                {
                    id: 2,
                    title: "A manager responsabilities",
                    duration: '7 days',
                    location: "Bucharest",
                     description: "It is a long established fact that a reader will be distracted by the readable content of a " + 
                    "page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution " + 
                    "of letters, as opposed to using 'Content here, content here', making it look like readable English."
                },
                {
                    id: 3,
                    title: "QA Automation Training",
                    duration: '1 week',
                    location: "Paris",
                     description: "It is a long established fact that a reader will be distracted by the readable content of a " + 
                    "page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution " + 
                    "of letters, as opposed to using 'Content here, content here', making it look like readable English."
                },
            ],
            viewList: []
        }
    },

    created() {
        this.viewList = this.internships.map(obj =>{
            obj.expand = false
            return obj
        })
    },

    methods: {
        onPress () {
             if (!this.activeTab) {
                this.viewList = this.internships
            } else {
                this.viewList = this.trainingPrograms
            }
            this.activeTab = !this.activeTab
        },

        readMore(internship) {
            console.log(internship)
            this.viewList = this.viewList.map(elem => {
                if(elem.id === internship.id) {
                    console.log('set true')
                    elem.expand = !elem.expand
                }
                return elem
            });
        }
    }
}

</script>


<style>

.cont {
    padding-bottom: 40px;
}

.elem_desc {
    padding-top: 10px;
    padding-right: 20px;
}

.expand {
    height: 50px;
}

#ul_cont {
    display: flex;
    justify-content: center;
    align-items: center;
}

.read_more {
    width: 100px;
}

.main_details {
    display: flex;
    flex-direction: row;
}

.row_cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 20px;
    padding: 15px;
    border: 1px solid black;
    border-radius: 10px;
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

.show {
    display: none
}

@media only screen and (max-width: 700px) {
.cont {
    font-size: 12px;
}

.hide {
    display: none
}

.show {
    display: block
}

.label {
    font-size: 11px;
}
}

</style>