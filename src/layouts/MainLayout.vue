<template>
  <q-layout class="bg-grey-1">
    <Navigation />
    <q-drawer v-model="left" side="left" behavior="desktop" bordered>
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  name: "MainLayout",
  components: { Navigation },
  data() {
    return {
      left: false
    };
  }
};
</script>
