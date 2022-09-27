<template>
  <NavigationBar />
  <router-view />
  <SwitchFooter />
</template>
<script>
import NavigationBar from "@/components/NavigationBar";
import SwitchFooter from "@/components/SwitchFooter";
export default {
  components: {
    NavigationBar,
    SwitchFooter,
  },
};
</script>
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
