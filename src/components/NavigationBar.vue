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
</template>

<script>
export default {};
</script>

<style></style>
