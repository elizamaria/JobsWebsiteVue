<template>

<form method="POST" action="/" @submit.prevent="onSubmit" @keydown="errors.clear($event.target)">
    <div class="control">
        <label for="name" class="label"> Name </label>
        <input type="text" id="name" name="name" class="input" v-model="form.name" @keydown="errors.clear('name')" required>
    </div>

    <div class="control">
        <label for="description" class="label"> Description </label>
        <input type="text" id="description" name="description" class="input" v-model="form.description" required>
    </div>

    <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>

    <div class="control">
        <button class="button is-primary" :disabled="form.errors.any()">Create</button>
    </div>

</form>

</template>

<script>

class Errors {
    constructor() {
        this.errors = {}
    }

    get (field) {
        if(this.errors[field]) {
            return this.errors[field][0]
        }
    }

    record (erros) {
        this.errors = erros
    }

    clear (field) {
        delete this.errors[field]
    }

    has (field) {
        return this.errors.hasOwnProperty(field)
    }

    any() {
        return Object.keys(this.errors).length > 0
    }
}

class Form {
    constructor(data) {
        this.originalData = data

        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors()
    }

    reset () {
        for (let field in this.originalData) {
            this[field] = ''
        }
    }

    data () {
        let data = Object.assign({}, this)

        delete data.originalData
        delete data.errors

        return data
    }

    submit (type, url) {
        return new Promise((resolve, reject) => {
            axios[type](url, this.data())
                .then(response => { 
                    this.onSuccess(response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    this.onFail(error.response.data)
                    reject(error.response.data)
                })
        })

        axios[type](url, this.data()) //this.$data
            //    name: this.name,
            //    description: this.description
            //    })
           .then(response => alert('Succes'))
           .catch(error => this.form.errors.record(error.response.data))
    }

    onSuccess() {
        this.errors.clear()
        this.reset()
    }

    onFail(error) {}
}


export default {
    data () {
        return {
           form: new Form ({
                name: '',
                description: '',
           }),
        //    errors: new Errors()
        }
    },
   
   methods: {
       onSubmit() {
           alert('aaaa')
        //    this.form.submit('post', url)
          
       },

       onSuccess(response) {
           this.form.reset()
       }
   }
}

</script>


<style>

.box {
    background: 'red';
    padding: 10px;
}
</style>