
<template>
    <nav class="navbar">
          <div class="navbar-brand">
              <a class="navbar-item">
                <router-link to="/" exact>
                  <img id="logo" src="http://www.ctmsolutions.com/mailing/CTM_Solutions/newsletter_2007/TOP15_SONY/Sony-logo-Blue.gif" alt="Logo">
                </router-link>
              </a>
            <a @click="makeBurger" class="navbar-burger burger" v-bind:class="{ 'is-active': activator }" aria-label="menu" aria-expanded="false" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu" v-bind:class="{ 'is-active': activator }">
            <ul class="navbar-end">
              <a class="navbar-item">
                <router-link tag="li" to="/" exact> Home</router-link>
              </a>
              <a class="navbar-item">
                <router-link tag="li" to="/departments"> Departments</router-link>
              </a>
              <a class="navbar-item">
                <router-link tag="li" to="/jobs"> Job Opportunities</router-link>
              </a>
              <a class="navbar-item">
                <router-link tag="li" to="/programs"> Internships </router-link>
              </a>
              <a class="navbar-item">
                <router-link tag="li" to="/contact"> Contact </router-link>
              </a>
              <span class="navbar-item">
                  <a>
                      <span class="icon">
                          <i class="fab fa-twitter" aria-hidden="true"></i>
                      </span>
                  </a>
              </span>
              <span class="navbar-item">
                  <a>
                    <span class="icon">
                        <i class="fab fa-facebook" aria-hidden="true"></i>
                    </span>
                </a>
              </span>
            </ul>
          </div>
      </nav>
</template>


<script>
export default {
  data () {
    return {
      msg: '',
      activator: false
    }
  },

  methods: {
    makeBurger () {
      this.activator = !this.activator
      return this.activator
    }
  }
}

</script>


<style>
.box {
    background: 'red';
    padding: 10px;
}

.is-active {
  color: #32A0EA
}

</style>