<template>
<section class="is-info is-large">
    <div class="hero-head">
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
                Home
              </a>
              <a class="navbar-item">
                Departments
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
    </div>
  
    <div>
        <img id="cmpImage" src="../assets/company.jpg"/>
        <div id="contentText">
            <p class="title">
                EVOZON Systems
            </p>
            <p class="subtitle">
                Customized IT Solutions from Romania
            </p>
        </div>
    </div>
  </section>

</template>


<script>
export default {
   
}

</script>


<style>
.title {
  text-align: center;
}

.subtitle {
  text-align: center;
}

#logo {
    width: 120px;
    height: 60px;
}

.hero {
    padding-top: 20px;
}

.icon {
    margin-right: 20px;
}

.navbar {
    padding-right: 20px;
    padding-left: 20px;
}

#cmpImage {
    position: relative;
    color: white;
    opacity: 0.5;
}

#contentText {
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>