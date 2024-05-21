<template>
    <div class="content-wrapper" style="font-family: Poppins">
      <a href="">
        <p class="px-5 mt-3" style="color: black;">
          <u>Dashboard/Input Dokumen Kelengkapan Pengajuan Assessment </u>
        </p>
      </a>
      <!-- <div class="alert d-flex align-items-center w-75 bg-warning" style="margin-left: 150px; height: 50px;" role="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          style="width: 100px; height: 25px"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
          <b>Perhatian!</b> Dimohon untuk pengisian kelengkapan dokumen tersebut
          sudah sesuai dengan ketentuan dan
          <b>PASTIKAN DOKUMEN YANG DIMASUKKAN ADALAH DOKUMEN YANG BENAR!</b>
        </div>
      </div> -->
  
      <h3 class="mx-5 text-bold" style="margin-bottom: -30px;">
        Input Dokumen Kelengkapan Pengajuan Assessment
      </h3>
      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <h5>2. Dokumen Proses Assessment</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu nulla
              tincidunt, feugiat metus nec, lacinia lacus.
            </p>
          </div>
          
          <div class="col-sm-8">
            <form action="">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Surat Permohonan Assessment</label>
                <input class="form-control" type="file" id="formFile" />
                <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
                <button type="submit" class="btn btn-primary btn-sm" style="margin-top: -10px;">Submit</button>
              </div>
  
              <!-- Form Surat Undangan Assessment -->
              <label for="exampleInputEmail1" class="form-label">Surat Undangan Assessment</label>
              <p>Undangan Assessment 1 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
  
              <p>Undangan Assessment 2 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
  
              <p>Undangan Assessment 3 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
              <br>
  
              <!-- Form Nota Dinas Hasil Assessment dan Pentest -->
              <label for="exampleInputEmail1" class="form-label mt-3">Nota Dinas Hasil Assessment dan Pentest</label>
              <p>Nota Dinas Assessment 1 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
  
              <p>Nota Dinas Assessment 2 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
  
              <p>Nota Dinas Assessment 3 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
              <br>
  
              <!-- Form Surat Rekomendasi Hasil Assessment -->
              <label for="exampleInputEmail1" class="form-label mt-3">Surat Rekomendasi Hasil Assessment</label>
              <p>Rekomendasi Assessment 1 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
  
              <p>Rekomendasi Assessment 2 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
  
              <p>Rekomendasi Assessment 3 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
              <br>
  
              <div class="mb-3 mt-3">
                <label for="exampleInputEmail1" class="form-label">Sertifikat Lulus Assessment</label>
                <input class="form-control" type="file" id="formFile" />
                <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
                <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
              </div>
  
              <!-- Form Foto Dokumentasi Assessment -->
              <label for="exampleInputEmail1" class="form-label mt-3">Foto Dokumentasi Assessment</label>
              <p>Dokumentasi Assessment 1 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
  
              <p>Dokumentasi Assessment 2 :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
  
              <p>Dokumentasi Evaluasi :</p>
              <input class="form-control" style="margin-top: -10px;" type="file" id="formFile" />
              <p class="mt-1">Accepted file types : PDF document.pdf max. 6MB</p>
              <button type="submit" class="btn btn-primary btn-sm mb-3" style="margin-top: -10px;">Submit</button>
              <br>
              <button type="submit" class="btn btn-warning btn-sm end-0" style="margin-top: 25px; margin-bottom: 25px; height: 50px;">Halaman Selanjutnya</button>
  
            </form>
  
           
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <!-- input baru(pengajuan assessment), proses assessment, assessment yang telah selesai -->
  
  <script>
  export default {
    layout: "opd",
    mounted(){
            // Adding an input method from SweetAlert 2 automatically binds an input form.
            this.$swal.fire({
              icon: "warning",
              title: "Perhatian!",
    background: "#fff url(/images/trees.png)",
    text: "Dimohon untuk pengisian kelengkapan dokumen tersebut sudah sesuai dengan ketentuan",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    },
  });
    }
  };
  
  </script>
  