<template>
  <q-layout view="hHh lpR fFf" class="bg-info">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Login page
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs v-if="isAuth" align="left">
        <q-route-tab to="/profile" label="Profile" icon="account_circle" />
        <q-route-tab
          @click="logoutUser()"
          to="/login"
          label="logout"
          icon="logout"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed } from "vue";

import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    function logoutUser() {
      store.commit("user/logout");
      window.location.reload();
    }

    return {
      logoutUser,
      isAuth: computed(() => store.state.user.IsUserAuthenticated),
    };
  },
};
</script>