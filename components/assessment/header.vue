<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <!-- <li class="nav-item">
        <nuxt-link
          class="nav-link btn btn-sm btn-primary text-white"
          to="/"
          target="_blank"
          >LIHAT WEBSITE <i class="fa fa-external-link-alt"></i
        ></nuxt-link>
      </li> -->
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown pb-2">
        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">
          <!-- <img
            :src="`https://ui-avatars.com/api/?name=${user.name}&amp;background=4e73df&amp;color=ffffff&amp;size=100`"
            class="img-circle"
            style="opacity: 0.8"
            width="35"
            height="35"
          />
          -->
          {{ user.name }}
        </a>
        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu" style="left: 0px; right: inherit">
          <li><a @click="logout" class="dropdown-item" style="cursor: pointer;"> Logout</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$cookies.get("user");
    },
  },

  methods: {
    async logout() {
      //logout auth
      // await this.$auth.logout();
      this.$cookies.remove("token");
      this.$cookies.remove("role");
      this.$cookies.remove("user");
      //redirect route login
      this.$router.push({
        name: "assessment-login",
      });
    },
  },
};
</script>

<style></style>
