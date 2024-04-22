<template>
  <!-- Sidebar Menu -->
  <nav class="mt-2 overflow-hidden">
    <ul
      class="nav nav-pills nav-sidebar flex-column"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
    >
      <li class="nav-item">
        <nuxt-link :to="{ name: 'admin-dashboard' }" class="nav-link">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p>Dashboard</p>
        </nuxt-link>
      </li>

      <li class="nav-header">
        <h6>CONTENT</h6>
      </li>

      <li class="nav-item" v-if="user.role === 'admin'">
        <nuxt-link :to="{ name: 'assessment-admin-user' }" class="nav-link">
          <i class="nav-icon fas fa-tags"></i>
          <p>User</p>
        </nuxt-link>
      </li>

      <li class="nav-item" v-if="user.role === 'admin'">
        <nuxt-link :to="{ name: 'assessment-admin-opd' }" class="nav-link">
          <i class="nav-icon fas fa-folder"></i>
          <p>Operator Perangkat Daerah</p>
        </nuxt-link>
      </li>

      <li class="nav-item" v-if="user.role === 'opd'">
        <nuxt-link :to="{ name: 'assessment-opd-baru' }" class="nav-link">
          <i class="nav-icon fas fa-book-open"></i>
          <p>Assessment Baru</p>
        </nuxt-link>
      </li>

      <li class="nav-item" v-if="user.role === 'opd'">
        <nuxt-link :to="{ name: 'assessment-opd-proses' }" class="nav-link">
          <i class="nav-icon fas fa-book-open"></i>
          <p>Assessment Proses</p>
        </nuxt-link>
      </li>

      <li class="nav-item" v-if="user.role === 'opd'">
        <nuxt-link :to="{ name: 'assessment-opd-selesai' }" class="nav-link">
          <i class="nav-icon fas fa-book-open"></i>
          <p>Assessment Selesai</p>
        </nuxt-link>
      </li>

      <li class="nav-item" v-if="user.role === 'assessment'">
        <nuxt-link :to="{ name: 'assessment-assessor-masuk' }" class="nav-link">
          <i class="nav-icon fas fa-clone"></i>
          <p>Assessment Masuk</p>
        </nuxt-link>
      </li>

      <li class="nav-item" v-if="user.role === 'assessment'">
        <nuxt-link
          :to="{ name: 'assessment-assessor-proses' }"
          class="nav-link"
        >
          <i class="nav-icon fas fa-clone"></i>
          <p>Assessment Proses</p>
        </nuxt-link>
      </li>

      <li class="nav-item" v-if="user.role === 'assessment'">
        <nuxt-link
          :to="{ name: 'assessment-assessor-selesai' }"
          class="nav-link"
        >
          <i class="nav-icon fas fa-clone"></i>
          <p>Assessment Selesai</p>
        </nuxt-link>
      </li>

      <!-- <li class="nav-item">
        <nuxt-link :to="{ name: 'admin-post' }" class="nav-link">
          <i class="nav-icon fas fa-book-open"></i>
          <p>Posts</p>
        </nuxt-link>
      </li>

      <li class="nav-header">
        <h6>SETTINGS</h6>
      </li>

      <li class="nav-item">
        <nuxt-link :to="{ name: 'admin-menu' }" class="nav-link">
          <i class="nav-icon fas fa-clone"></i>
          <p>Menus</p>
        </nuxt-link>
      </li>

      <li class="nav-item">
        <nuxt-link :to="{ name: 'admin-slider' }" class="nav-link">
          <i class="nav-icon fas fa-image"></i>
          <p>Sliders</p>
        </nuxt-link>
      </li>

      <li class="nav-item">
        <nuxt-link :to="{ name: 'admin-user' }" class="nav-link">
          <i class="nav-icon fas fa-users"></i>
          <p>Users</p>
        </nuxt-link>
      </li> -->
    </ul>
  </nav>
  <!-- /.sidebar-menu -->
</template>

<script>
export default {
  computed: {
    user() {
      return this.$cookies.get("user");
    },
  },

  mounted() {
    console.log(this.user);
  },
};
</script>

<style scoped>
a.nuxt-link-active {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
