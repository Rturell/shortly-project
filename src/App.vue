<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <a class="nav-link" href="#">Login</a>
            <a class="nav-link btn btn-success" href="#">Sign Up</a>
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

#nav a {
  color: #2c3e50;
}

#nav .navbar-brand {
  font-weight: 600;
}

#nav .nav-item {
  font-size: 14px;
  padding-right: 1rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>