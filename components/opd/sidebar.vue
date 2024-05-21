<template>
    <!-- Sidebar Menu -->
    <nav class="mt-2 overflow-hidden">
      <ul
        class="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li class="nav-item dashboard">
          <nuxt-link :to="{ name: 'admin-dashboard' }" class="nav-link">
            <i class="nav-icon fas fa-tachometer-alt text-light"></i>
            <p class="text-white">Dashboard</p>
          </nuxt-link>
        </li>
  
        <li class="nav-header text-light">
          <h6>CONTENT</h6>
        </li>
          
        <!-- <li class="nav-item" v-if="user.role === 'admin'">
          <nuxt-link :to="{ name: 'assessment-admin-user' }" class="nav-link">
            <i  class="nav-icon fas fa-tags text-light"></i>
            <p class="text-white">Helpdesk</p>
          </nuxt-link>
        </li> -->
        
        <li class="nav-item" v-if="user.role === 'admin'">
          <nuxt-link :to="{ name: 'assessment-admin-user' }" class="nav-link">
            <img src="~/assets/img/helpdesk.png" alt="">
            <p class="text-white"  style="margin-left: 6px;">Helpdesk</p>
          </nuxt-link>
        </li>
  
        <li class="nav-item" v-if="user.role === 'admin'">
          <nuxt-link :to="{ name: 'assessment-admin-user' }" class="nav-link">
            <i  class="nav-icon fas fa-tags text-light"></i>
            <p class="text-white">Guidebook</p>
          </nuxt-link>
        </li>
  
        <div class="coba">
        <li class="nav-item dropdown pb-2">
          <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">
            <p class="text-light">Input Dokumen Kelengkapan</p>
            <!-- <img
              :src="`https://ui-avatars.com/api/?name=${user.name}&amp;background=4e73df&amp;color=ffffff&amp;size=100`"
              class="img-circle"
              style="opacity: 0.8"
              width="35"
              height="35"
            />
            -->
  
          </a>
          <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu" style="background-color: white;">
            <li><a class="dropdown-item" style="cursor: pointer;"> Data Aplikasi</a></li>
            <li><a class="dropdown-item" style="cursor: pointer;"> Dokumen Proses Assesment</a></li>
            <li><a class="dropdown-item" style="cursor: pointer;"> Dokumen Proses Pengajuan <br/> Hosting dan Sub-Domain </a></li>
          </ul>
        </li>
      </div>
        <!-- <label for="language">Select a Programming Language:</label> -->
        <!-- <ul class="navbar-nav  ml-auto"> -->
       
      <!-- </ul> -->
  
  
        <li class="nav-item" v-if="user.role === 'admin'">
          <nuxt-link :to="{ name: 'assessment-admin-opd' }" class="opd nav-link">
            <i class="nav-icon fas fa-folder text-light"></i>
            <p class="text-white">Operator Perangkat Daerah</p>
          </nuxt-link>
        </li>
  
  
        
  
        <!-- <li class="nav-item" v-if="user.role === 'opd'">
          <nuxt-link :to="{ name: 'assessment-opd-baru' }" class="nav-link">
            <i class="nav-icon fas fa-book-open"></i>
            <p>Assessment Baru</p>
          </nuxt-link>
        </li> -->
  
        <!-- <li class="nav-item" v-if="user.role === 'opd'">
          <nuxt-link :to="{ name: 'assessment-opd-proses' }" class="nav-link">
            <i class="nav-icon fas fa-book-open"></i>
            <p>Assessment Proses</p>
          </nuxt-link>
        </li> -->
  
        <!-- <li class="nav-item" v-if="user.role === 'opd'">
          <nuxt-link :to="{ name: 'assessment-opd-selesai' }" class="nav-link">
            <i class="nav-icon fas fa-book-open"></i>
            <p>Assessment Selesai</p>
          </nuxt-link>
        </li> -->
  
        <!-- <li class="nav-item" v-if="user.role === 'assessment'">
          <nuxt-link :to="{ name: 'assessment-assessor-masuk' }" class="nav-link">
            <i class="nav-icon fas fa-clone"></i>
            <p>Assessment Masuk</p>
          </nuxt-link>
        </li> -->
  
        <!-- <li class="nav-item" v-if="user.role === 'assessment'">
          <nuxt-link :to="{ name: 'assessment-assessor-proses' }" class="nav-link"> 
            <i class="nav-icon fas fa-clone"></i>
            <p>Assessment Proses</p>
          </nuxt-link>
        </li> -->
  
        <li class="nav-item" v-if="user.role === 'assessment'">
          <nuxt-link :to="{ name: 'assessment-assessor-selesai' }" class="nav-link">
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
  
  
  <style>
  .dashboard:hover {
    border-radius: 15px;
    background-color: #F3AE35;
  }
  .coba {
    overlay: scroll;
    height: 100px;
  }
  .dropdown-menu {
    font-size: 12px;
  }
  .dropdown-menu li a:hover{
  background-color: #F3AE35;
  }
  #dropdownSubMenu1 {
    background-color: #FFFFFF1A;
    color: black;
  }
  </style>
  
  <script>
  export default {
    computed: {
      user() {
        return this.$cookies.get("user");
      },
    },
  
    // mounted() {
    //   console.log(this.user);
    // },
  };
  </script>
  
  <style scoped>
  a.nuxt-link-active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  </style>
  