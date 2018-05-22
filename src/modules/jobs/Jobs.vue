<template>
  <div class="cont">
    <Top :title="title" :subtitle="subtitle" :imgsource="imgsource"> 
        <input class="input is-rounded" type="text" placeholder="Search job">
    </Top>
    <section id="content-cont"> 
        <h3 class="subtitle filter_subtitle"> {{filtersTitle}} </h3> 
        <div id="filters_row">
            <span class="select_label"> Select department </span>
            <div class="select is-rounded">
                <select>
                    <option v-for="dep in departments" :key="dep">{{dep}}</option>
                </select>
            </div>
            <span class="select_label"> Select location </span>
            <div class="select is-rounded">
                <select>
                    <option v-for="loc in locations" :key="loc">{{loc}}</option>
                </select>
            </div>
        </div>
    </section>
    <section id="rows_container"> 
        <ul>
            <li v-for="job in jobs" :key="job.title"> 
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
                    title: 'Project Manager',
                    department: 'Automation',
                    location: 'London'
                },
                {
                    title: 'Senior Developer',
                    department: 'PHP',
                    location: 'Cluj'
                },
                {
                    title: 'Junior Developer',
                    department: 'Machine Learning',
                    location: 'Bucharest'
                },
                {
                    title: 'Team Lead',
                    department: 'Automation',
                    location: 'Paris'
                },
                {
                    title: 'Software Developer',
                    department: 'PHP',
                    location: 'London'
                },
                {
                    title: 'Project Manager',
                    department: 'C++',
                    location: 'Bucharest'
                },
            ]
        }
    }
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