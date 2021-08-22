<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">Shortly</a>
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
          <form class="d-flex">
            <a class="nav-link login-link me-3" href="#">Login</a>
            <a class="nav-link btn btn-signup" href="#">Sign Up</a>
          </form>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Poppins', sans-serif;
}

#nav {
  padding: 1rem 0rem 1rem 0rem;
}

#nav .navbar-light {
  background-color: white;
}

#nav .navbar-brand {
  font-weight: 800;
  color: hsl(255, 11%, 22%);
  padding-right: 2rem;
}

#nav .nav-link {
    font-size: 14px;
    font-weight: 500;
    color: hsl(0, 0%, 75%);
}

#nav .nav-link:hover {
    color: hsl(260, 8%, 14%);
}

#nav .nav-item {
  padding-right: 1rem;

}

#nav .login-link {
  color:hsl(0, 0%, 75%) ;
}

#nav .login-link:hover {
  color:hsl(260, 8%, 14%)
}

#nav .btn-signup {
  background-color: hsl(180, 66%, 49%);
  color: white;
  border-radius: 25px;
  padding: 0.5rem 1rem 0.5 1rem;
}


</style>