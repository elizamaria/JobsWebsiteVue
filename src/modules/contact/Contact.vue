<template>
    <div class="cont"> 
        <Top :title="title" :imgsource="imgSource"></Top>
        <div class="columns">
            <section class="main_section column"> 
                <h3 id="description_ct"> {{description }} </h3>
                <Form> </Form>
            </section>
            <section class="main_section column"> 
                <h3 class="title"> How to find us? </h3>
                <p> Address: {{address}} </p>
                <div>
                    <iframe
                    id="map"
                    frameborder="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.9448165133363!2d23.577623411187886!3d46.765984177470465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1743f64e35%3A0x1aca3a419457ba22!2sEvozon+Systems!5e0!3m2!1sen!2sus!4v1447063759412" allowfullscreen>
                    </iframe>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Top from '../../components/Top.vue'
import Form from './Form.vue'

export default {
    components: { Top, Form },
    data() {
        return {
            title: 'CONTACT US',
            address: "Calea Motilor, 62, Cluj-Napoca, Romania",
            imgSource: 'http://jolantaburke.com/wp-content/uploads/2017/09/contact-2-1.png',
            description: "We appreciate your questions, enquiries and feedback about our services or career opportunities. " +
                "Please choose the most appropriate method of contacting us. You can get in touch with us using the contact form below, "+
                "call on the phone or email us on sales@sony.com or jobs@sony.com."
        }
    },

    methods: {
        onPress () {
           
        }
    }
}

</script>


<style>

.cont {
    padding-bottom: 40px;
}

#description_ct {
    /* text-align: center; */
    /* width: 70%; */
    padding: 20px;
}

#map {
    border: 0;
    padding: 20px;
    width: 500px;
    height: 350px;
}

.main_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
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

@media only screen and (max-width: 700px) {
#map {
    width: 320px;
    height: 250px;
}
}

</style>