
<template>
    <nav class="navbar">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img id="logo" src="https://www.evozon.com/wp-content/uploads/2018/02/evozon-2018-logo-e1517932632956.png" alt="Logo">
            </a>
            <span class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">
                <router-link to="/" exact>Home</router-link>
              </a>
              <a class="navbar-item">
                <router-link to="/departments" exact>Departments</router-link>
              </a>
              <a class="navbar-item">
                Job Opportunities
              </a>
              <a class="navbar-item">
                Internships
              </a>
              <a class="navbar-item">
                Contact
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
            </div>
          </div>
      </nav>
</template>


<script>
export default {
   
}

</script>


<style>
.box {
    background: 'red';
    padding: 10px;
}
</style>