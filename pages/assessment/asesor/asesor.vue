<template>
    <div class="content-wrapper" style="font-family: Poppins;"> 
<div class="d-flex flex-column w-25 justify-content-center mt-3 mx-5">
    <h3 class="mt-3">Tata Kelola</h3>

    <!-- Dokumen KAK/TOR -->
    <div class="mt-2"  style="border-bottom: 1px solid black;">
        <b-form-group label="1. Dokumen KAK/TOR" v-slot="{ ariaDescribedby1 }">
      <b-form-radio v-model="selected1" :aria-describedby="ariaDescribedby1" name="some-radios1" value="A">Ada</b-form-radio>
      <b-form-radio v-model="selected1" :aria-describedby="ariaDescribedby1" name="some-radios1" value="B">Tidak</b-form-radio>
      <b-col class="mt-3" sm="2">
      <label for="textarea-small">Catatan:</label>
    </b-col>
      <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." rows="3" max-rows="6">
    </b-form-textarea> 
    </b-form-group>
</div>

<!-- Laporan Awal Kegiatan DPA -->
<div class="mt-2"  style="border-bottom: 1px solid black;">
        <b-form-group label="2. Laporan Awal (Kegiatan DPA)" v-slot="{ ariaDescribedby2 }">
      <b-form-radio v-model="selected2" :aria-describedby="ariaDescribedby2" name="some-radios2" value="A">Ada</b-form-radio>
      <b-form-radio v-model="selected2" :aria-describedby="ariaDescribedby2" name="some-radios2" value="B">Tidak</b-form-radio>
      <b-col class="mt-3" sm="2">
      <label for="textarea-small">Catatan:</label>
    </b-col>
      <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." rows="3" max-rows="6">
    </b-form-textarea> 
    </b-form-group>
</div>
  
<!-- SK/SP TIM PENGELOLA APLIKASI -->
<div class="mt-2"  style="border-bottom: 1px solid black;">
        <b-form-group label="3. SK/SP TIM PENGELOLA APLIKASI" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected3" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Ada</b-form-radio>
      <b-form-radio v-model="selected3" :aria-describedby="ariaDescribedby" name="some-radios" value="B">Tidak</b-form-radio>
      <b-col class="mt-3" sm="2">
      <label for="textarea-small">Catatan:</label>
    </b-col>
      <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." rows="3" max-rows="6">
    </b-form-textarea> 
    </b-form-group>
</div>
  
<!-- SK/SP TIM HELPDESK APLIKASI -->
<div class="mt-2"  style="border-bottom: 1px solid black;">
        <b-form-group label="4. SK/SP TIM HELPDESK APLIKASI" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected4" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Ada</b-form-radio>
      <b-form-radio v-model="selected4" :aria-describedby="ariaDescribedby" name="some-radios" value="B">Tidak</b-form-radio>
      <b-col class="mt-3" sm="2">
      <label for="textarea-small">Catatan:</label>
    </b-col>
      <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." rows="3" max-rows="6">
    </b-form-textarea> 
    </b-form-group>
</div>

<!-- LAPORAN AKHIR -->
<div class="mt-2"  style="border-bottom: 1px solid black;">
        <b-form-group label="5. LAPORAN AKHIR" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected5" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Ada</b-form-radio>
      <b-form-radio v-model="selected5" :aria-describedby="ariaDescribedby" name="some-radios" value="B">Tidak</b-form-radio>
      <b-col class="mt-3" sm="2">
      <label for="textarea-small">Catatan:</label>
    </b-col>
      <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." rows="3" max-rows="6">
    </b-form-textarea> 
    </b-form-group>
</div>

<!-- SOP -->
<div class="mt-2"  style="border-bottom: 1px solid black;">
        <b-form-group label="6. SOP" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected6" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Ada</b-form-radio>
      <b-form-radio v-model="selected6" :aria-describedby="ariaDescribedby" name="some-radios" value="B">Tidak</b-form-radio>
      <b-col class="mt-3" sm="2">
      <label for="textarea-small">Catatan:</label>
    </b-col>
      <b-form-textarea id="textarea" v-model="text" placeholder="Enter something..." rows="3" max-rows="6">
    </b-form-textarea> 
    </b-form-group>
</div>
</div>
<NuxtLink to ="/assessment/login">
<button type="submit" class="btn btn-success btn-sm end-0" style="margin-top: 25px; margin-bottom: 25px; margin-left:50px; height: 50px;">Halaman Sebelumnya</button>
</NuxtLink>
<button type="submit" class="btn btn-primary btn-sm end-0" style="margin-top: 25px; margin-bottom: 25px; height: 50px;">Halaman Selanjutnya</button>

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
  
  <script>
    export default {
      layout: "asesor",
      data() {
        return {
            
        }
      },
      data() {
      return {
        selected1: '',
        selected2: '',
        selected3: '',
        selected4: '',
        selected5: '',
        selected6: '',
      }
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
