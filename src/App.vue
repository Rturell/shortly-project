<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="@/assets/logo.svg" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse text-center text-lg-start"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resources</a>
            </li>
          </ul>
          <hr class="d-lg-none nav-divider" />
          <form class="text-center text-lg-end">
            <a class="nav-link login-link d-block d-lg-inline" href="#"
              >Login</a
            >
            <a class="nav-link btn btn-signup d-block d-lg-inline" href="#"
              >Sign Up</a
            >
          </form>
        </div>
      </div>
    </nav>

    <router-view />

     <footer class="bg-dark text-white text-center text-lg-start ">
      <!-- Grid container -->
      <div class="container pt-5">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
            <img class="logo-footer" src="@/assets/logo.svg" alt="">
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h6 class="text-white mb-4 fw-bolder">Features</h6>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Link Shortening</a>
              </li>
              <li>
                <a href="#!">Branded Links</a>
              </li>
              <li>
                <a href="#!">Analytics</a>
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h6 class="text-white mb-4 fw-bolder">Resources</h6>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Blog</a>
              </li>
              <li>
                <a href="#!">Developers</a>
              </li>
              <li>
                <a href="#!">Support</a>
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h6 class="text-white mb-4 fw-bolder">Company</h6>

            <ul class="list-unstyled">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
               <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column Icons Social-->
          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <i class="fab fa-facebook-square lead me-3"></i>
            <i class="fab fa-twitter lead me-3"></i>
            <i class="fab fa-pinterest lead me-3"></i>
            <i class="fab fa-instagram lead"></i>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->
    </footer>
  </div>
</template>

<style>
#app {
  font-family: "Poppins", sans-serif;
}



#nav .navbar-brand {
  font-weight: 800;
  color: hsl(255, 11%, 22%);
}

#nav .nav-link:hover {
  color: hsl(260, 8%, 14%);
}

#nav .nav-divider {
  color: white;
}

#nav .login-link:hover {
  color: hsl(260, 8%, 14%);
}
.logo-footer{
  filter:invert(1);
}

ul li a{
  color:hsl(0, 0%, 53%);
  font-size: 0.8rem;
  text-decoration: none;
}
ul li a:hover{
  color: hsl(180, 66%, 49%);;
}
i{
  cursor: pointer;
}
i:hover{
  color: hsl(180, 66%, 49%)
}
/* Small devices (landscape phones, 320px and up) */

@media (min-width: 320px) {
  #nav .navbar-collapse {
    margin-top: 2rem;
    padding: 2rem 2rem 2rem 2rem;
    background-color: hsl(257, 27%, 26%);
    border-radius: 10px;
  }

  #nav .nav-link {
    font-size: 18px;
    font-weight: 700;
    color: white;
  }

  #nav .btn-signup {
    background-color: hsl(180, 66%, 49%);
    color: white;
    border-radius: 25px;
    padding: 0.5rem 1rem 0.5 1rem;
  }

  #nav .navbar-toggler:focus,
  .navbar-toggler:active,
  .navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
  }

  #nav .navbar-toggler {
    border: 0px;
  }

  footer{
    height: auto;
  }
}

/* Small devices (landscape phones, 576px and up) */

@media (min-width: 576px) {
  #nav .navbar-collapse {
    padding: 2rem 4rem 2rem 4rem;
  }
}

/* Medium devices (tablets, 768px and up) */

@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */

@media (min-width: 992px) {
  #nav .navbar-collapse {
    margin-top: 0rem;
    padding: 0rem;
    background-color: white;
    border-radius: 0px;
  }

  #nav .nav-item {
    padding-right: 1rem;
  }

  #nav .nav-link {
    font-size: 14px;
    font-weight: 500;
    color: hsl(0, 0%, 75%);
  }

  #nav .btn-signup {
    background-color: hsl(180, 66%, 49%);
    color: white;
    border-radius: 25px;
    padding: 0.5rem 1rem 0.5 1rem;
  }

  #nav img {
    max-width: 80%;
  }

  footer{
    height: 250px;
  }
}

/* X-Large devices (large desktops, 1200px and up) */

@media (min-width: 1200px) {
}

/* XX-Large devices (larger desktops, 1400px and up) */

@media (min-width: 1400px) {
}
</style>