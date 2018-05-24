
<template>
    <section id="form">
        <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
                <input class="input" type="email" placeholder="Email input">
            </div>
        </div>
        <div class="field">
            <label class="label">Message</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Message subject">
                </div>
        </div>
        <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
   
}

</script>


<style>

#form {
    width: 80%;
    margin-top: 30px;
    margin-bottom: 30px;
}

</style>