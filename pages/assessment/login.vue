<template>
    <div class="header">
        <!-- Navbar start -->
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                <img src="~/assets/img/logo-kota-bogor.png" class="pt-3" style="width: 90px; height: 100px; padding-left: 20px;" alt="background"/>
                <img src="~/assets/img/uncal.png" class="pt-3"  style="width: 100px; height: 100px; padding-left: 20px;" alt="background"/>
            </li>
        </ul>
        </nav>
        <!-- Navbar end -->

        <!-- Background web -->
        <div class="img">
            <img src="~/assets/img/bg-kotabogor.jpg" alt="" style="width: 100%;">
        </div>

        <div class="konten">
         <div class="text-center text-bold" style="color: #074173; font-size: 35px; margin-top: 100px; text-shadow: 1px 2px black;">Assessment Application</div> 
          <div class="text-black p-4 bg-light" style="border: 2px solid; border-radius: 20px; margin:auto ; margin-top: 10px;">
        <span class="d-flex justify-content-center text-bold" style="font-size: 30px;">Selamat Datang!</span>
        <span class="d-flex justify-content-center text-bold pb-3" style="font-size: 12px;">silahkan login pada kolom dibawah ini!</span>
         <!-- Form -->
         <form @submit.prevent="login"> 
          <table>
            <tr class="border-bottom border-primary">
              <td class="py-2 text-bold">Email</td>
              <td>:</td>
              <td>
                <input type="email" v-model="user.email" class="bg-transparent border border-0" 
                style="outline: none; border: none" placeholder="ex: xxxxx@gmail.com" 
                />
              </td>
            </tr>
            <tr class="border-bottom border-primary py-3">
              <td class="py-2 text-bold">Password</td>
              <td>:</td>
              <td>
                <input
                  type="password"
                  v-model="user.password"
                  class="bg-transparent border border-0"
                  style="outline: none; border: none"
                  placeholder="Enter Your Password"
                />
              </td>
            </tr>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input px-5" id="exampleCheck1">
              <label class="form-check-label" style="font-size: 15px;" for="exampleCheck1">Remember me</label>
            </div>
          </table>
          <b-button variant="" type="submit" class="my-4 w-100 text-bold rounded-pill" style="background-color: #074173; color: white;">Login</b-button>
        </form>
      </div>
      </div>

      <!-- Footer start -->

<!-- Footer end -->
    </div>

    
</template>

<style>
body {
    font-family: Poppins;
    margin: 0;
    padding: 0;
}
.navbar-nav {
display: flex;
flex-direction: row;
}
.img {
    position: relative;
    height: 10vh;
}
.konten {
    margin-left: 500px;
    margin-top: 150px;
    position: absolute;
    top: 0px;
}
footer {
    color: white;
    background-color:  #074173;
}
</style>
<script>
export default {
  layout: "empty",

  //meta
  head() {
    return {
      title: "Login - Assessment",
    };
  },

  data() {
    return {
      //state user
      user: {
        email: "",
        password: "",
      },
      //validation
      validation: [],
    };
  },

  methods: {
    async login() {
      try {
        const response = await this.$axios.post("/api/assessment/admin/login", {
          email: this.user.email,
          password: this.user.password,
        });

        const cookieList = [
          {
            name: "token",
            value: response.data.token,
            opts: { maxAge: 36000 },
          },
          { name: "role", value: response.data.role, opts: { maxAge: 36000 } },
          { name: "user", value: response.data.user, opts: { maxAge: 36000 } },
        ];

       

        this.$cookies.setAll(cookieList);

        // redirect
        this.$router.push({
          name: "assessment",
        });
      } catch (error) {
        //assign validation
        this.validation = error.response.data;
      }
    },
  },
};
</script>