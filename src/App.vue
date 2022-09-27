<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a href="/" class="navbar-brand ml-2"
      ><img src="@/assets/img/logo_white.png" alt="SWITCHDOCK" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse justify-content-stretch" id="navbar">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-light">Benefits</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link text-light">Safety</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link text-light">Policies</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
  <footer class="text-muted">
    <div class="container">
      <p class="float-right">
        <a class="text-secondary" href="#">Back to top</a>
      </p>
      <p>SWITCHDOCK &copy; 2022</p>
    </div>
  </footer>
</template>
<style lang="css">
.benefits-enter-active,
.benefits-leave-active {
  transition: all 0.5s ease-in-out;
}

.benefits-enter-from {
  opacity: 0;
  transform: translateX(300px);
}

.benefits-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}

.nav-link:visited,
.nav-link:link {
  border-bottom: 2px solid transparent;
}

.nav-link:hover,
.nav-link:active {
  border-bottom: 2px solid #ff0000;
}
</style>
