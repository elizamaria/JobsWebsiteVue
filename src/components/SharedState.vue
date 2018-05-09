<template>
<div>
    <div id="one"> 
        {{ user.name }}
    </div>

    <div id="two"> 
         {{ user.name }}
    </div>
</div>

</template>


<script>
new Vue({
    el: '#one',
    data: {
        user: {
            name: 'John Doe'
        }
    }
})

new Vue({
    el: '#two',
    data: {
        user: {
            name: 'John Doe'
        }
    }
})

</script>


<style>

.box {
    background: 'red';
    padding: 10px;
}
</style>