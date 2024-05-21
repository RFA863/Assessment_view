<template>
  <div class="content-wrapper" style="font-family: Poppins;">
    <div class="m-3 p-2 text-light text-center " style="border-radius: 15px; background-color: #3b7799; ">
      <h1 class="text-xxl text-center align-items-center" style="font-weight: bold 900;">DASHBOARD ASSESSMENT DISKOMINFO KOTA BOGOR</h1>
      <p class="text-light text-lg" > 
        Selamat Datang Di Pelayanan Assessment E-Gov Dinas Komunikasi dan Informatika Kota Bogor
      </p>
    </div>
    <div class="container d-flex mt-4 mx-auto">
    <div class="card mb-3 bg-white" style="width: 40%;">
  <div class="row">
    <div class="col">
      <img src="~/assets/img/folder.png" class="img-fluid rounded-start mt-5" style="margin-left: 50px;" alt="">
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title text-dark">Input Dokumen Kelengkapan Pengajuan Assessment</h5>
        <p class="card-text"></p>
        <button v-on:click="alertDisplay" type="submit" class="submit btn btn-dark">Submit</button>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3 bg-white" style="width: 40%; margin-left: 10px;">
  <div class="row">
    <div class="col">
      <img src="~/assets/img/order.png" class="img-fluid rounded-start mt-5" alt="" style="margin-left: 50px; width: 125px;">
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title text-dark mt-4">Status Assessment</h5>
        <p class="card-text"></p>
        <button v-on:click="alertDisplay" type="submit" class="submit btn btn-dark">Submit</button>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3 bg-white" style="width: 40%; margin-left: 10px;">
  <div class="row">
    <div class="col">
      <img src="~/assets/img/bookmark.svg" class="img-fluid rounded-start mt-5" alt="" style="margin-left: 50px; width: 100px;">
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title text-dark">Assessment Yang Telah selesai</h5>
        <p class="card-text"></p>
        <button v-on:click="alertDisplay" type="submit" class="submit btn btn-dark">Submit</button>
      </div>
    </div>
  </div>
</div>


</div>
    <!-- <div class="row justify-content-center">
    <div class="card bg-primary m-4" style="max-width: 18rem; border-radius: 20px;">
  <span class="card-header text-bold">Input baru </br> (Pengajuan Assessment)</span>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>

  <div class="card m-4 text-light" style="max-width: 18rem; background-color: #FF8E25; border-radius: 20px;">
  <div class="card-header text-bold">Proses assessment</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
  </div>

  <div class="card m-4 text-light" style="max-width: 18rem; background-color: red; border-radius: 20px;">
  <div class="card-header text-bold">Assessment yang telah selesai</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-danger">Go somewhere</a>
  </div>
  </div>

</div> -->


    <!-- Form input file -->
      <div class="col justify-content-center align-items-center" style="margin-left: 100px;"> 
        <div class="mb-3 mt-4" style="width: 85%;">
      <label for="disabledTextInput" class="form-label text-bold" style="font-size: 30px;">Notifikasi</label>
      <input  class="form-control" type="text" placeholder="Web Uncal | Rekomendasi Assesment 2" readonly style="height: 75px; background-color: #ACD5FF; border-radius: 20px;">
    </div>
    <div class="mb-3" style="width: 85%;">
      <!-- <label for="disabledTextInput" class="form-label">Disabled input</label> -->
      <input  class="form-control" type="text" placeholder="Web Uncal | Rekomendasi Assesment 1" readonly style="height: 75px; background-color: #ACD5FF; border-radius: 20px;">
    </div>
</div>
</div>
</template>

<style>
.submit:hover {
  background-color: #F3AE35;
}
.input::placeholder {
  color: black;
}
</style>
<!-- <script>
export default {
  layout: "assessment",
};
</script> -->

<script>
  export default {
    layout: "assessment",
    data() {
      return {}
    },
    methods: {
        alertDisplay() {
          // Adding an input method from SweetAlert 2 automatically binds an input form.
          this.$swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
          });
        // this.$swal({
        //   title: 'What is your Name?',
        //   input: 'text',
        //   inputPlaceholder: 'Enter your name here',
        //   showCloseButton: true,
        // });
      }
    }
  }
</script>