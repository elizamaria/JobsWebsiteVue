<template>
  <div class="cont">
    <Top :title="title" :subtitle="subtitle" :imgsource="imgsource"> 
        <input class="input is-rounded" type="text" v-model="searchVal" @keydown="searchJobs" placeholder="Search job">
    </Top>
    <section id="content-cont"> 
        <h3 class="subtitle filter_subtitle"> {{filtersTitle}} </h3> 
        <div id="filters_row">
            <span class="select_label"> Select department </span>
            <div class="select is-rounded">
               <select @change="filter" v-model="selectedDepart">
                    <option>  </option>
                    <option v-for="dep in departments" :key="dep">{{dep}}</option>
                </select>
            </div>
            <span class="select_label"> Select location </span>
            <div class="select is-rounded">
                <select @change="filter" v-model="selectedLocation">
                    <option>  </option>
                    <option v-for="loc in locations" :key="loc">{{loc}}</option>
                </select>
            </div>
        </div>
    </section>
    <section id="rows_container"> 
        <ul>
            <li v-for="job in viewList" :key="job.id"> 
                <div class="row_container columns"> 
                    <span class="column"> <b> {{job.title}} </b> </span>
                    <span class="column"> <b> {{job.department}} </b> </span>
                    <span class="column"> <b> {{job.location}} </b> </span>
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
    data () {
        return {
            title: 'JOB OPPORTUNITIES',
            subtitle: 'Search for the job you like',
            filtersTitle: '... or filter the results',
            imgsource: ' https://www.eslstarter.com/admin/resources/program-pics/dsc2722retouch2-copy-w1440h600.jpg',
            departments: ['Machine Learning', 'PHP', 'C++', 'Automation'],
            locations: ['London', 'Paris', 'Bucharest', 'Cluj'],
            jobs: [
                {
                    id: 0,
                    title: 'Project Manager',
                    department: 'Automation',
                    location: 'London'
                },
                {
                    id: 1,
                    title: 'Senior Developer',
                    department: 'PHP',
                    location: 'Cluj'
                },
                {
                    id: 2,
                    title: 'Junior Developer',
                    department: 'Machine Learning',
                    location: 'Bucharest'
                },
                {
                    id: 3,
                    title: 'Team Lead',
                    department: 'Automation',
                    location: 'Paris'
                },
                {
                    id: 4,
                    title: 'Software Developer',
                    department: 'PHP',
                    location: 'London'
                },
                {
                    id: 5,
                    title: 'Project Manager',
                    department: 'C++',
                    location: 'Bucharest'
                },
            ],
            viewList: [],
            searchVal: "",
            selectedLocation: "",
            selectedDepart: ""
        }
    },

    created() {
            this.viewList = this.jobs
    },

    methods: {
            searchJobs() {
               this.viewList = []
               this.jobs.forEach(job => {
                   if (job.title.toLowerCase().indexOf(this.searchVal) > -1) {
                       this.viewList.push(job)
                   }
               })
            },

            filter () {
                this.viewList = []
                this.searchVal = ""
                if (this.selectedLocation === "" && this.selectedDepart === "" ) {
                    return this.viewList = this.jobs
                }

                 this.jobs.forEach(job => {
                    if (this.selectedLocation === "" && job.department === this.selectedDepart ) {
                        return this.viewList.push(job)
                    }

                    if (this.selectedDepart === "" && job.location === this.selectedLocation) {
                        return this.viewList.push(job)
                    }

                    if (job.location === this.selectedLocation && job.department === this.selectedDepart) {
                        this.viewList.push(job)
                    }
                })                
            },

        },

}

</script>


<style>

.cont {
    padding-bottom: 30px;
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

.filter_subtitle {
    padding: 20px;
}

#filters_row {
    display: flex;
    flex-direction: row;
    padding: 30px;
}

.select {
    margin-right: 40px;
}

.select_label {
    margin-right: 10px;
    align-self: center;
}

</style>