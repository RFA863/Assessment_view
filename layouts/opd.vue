<template>
    <div class="hold-transition sidebar-mini">
      <div class="wrapper p-0 h-100">
        <!-- Header -->
        <Header />
        <!-- /.Hader -->
  
        <aside class="main-sidebar elevation-4 px-3" style="background-color: #3b7799;" >
          <img src="~/assets/img/logo-kota-bogor.png" class="img-fluid rounded-start mt-3" style="margin-left: 70px;" alt="">
          <a to="/assessment" class="brand-link text-center">
            <span class="brand-text font-weight-bold text-light">
              ASSESSMENT <br />
              DASHBOARD
            </span>
          </a>
          
  
          <!-- Sidebar -->
          <div class="sidebar">
            <Sidebar />
          </div>
          <!-- /.sidebar -->
        </aside>
  
        <!-- content -->
        <Nuxt />
        <!-- / .content -->
  
        <!-- <footer class="main-footer">
          <div class="float-right d-none d-sm-block"><b>Version</b> 1.0.0</div>
          <strong>Copyright &copy; 2024 Assessment Diskominfo Kota Bogor.</strong>
          All rights reserved.
        </footer> -->
        <aside class="control-sidebar control-sidebar-dark"></aside>
      </div>
    </div>
  </template>
  
  <script>
  import Header from "@/components/opd/header.vue";
  import Sidebar from "@/components/opd/sidebar.vue";
  
  export default {
    //middleware auth
    //   middleware: "auth",
  
    components: {
      Header,
      Sidebar,
    },
  };
  </script>
  
  <style>
  .wrapper,
  .content-wrapper {
    background-color: #fff !important;
    overflow: hidden;
  }
  </style>
  