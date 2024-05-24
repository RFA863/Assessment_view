<template>
  <div class="position-relative max-vh-100">
    <div
      class="position-absolute z-1 d-flex justify-content-center align-items-center w-100 h-100"
    >
      <div
        class="text-black p-5"
        style="backdrop-filter: blur(30px); border-radius: 20px"
      >
        <h1 class="d-flex justify-content-center pb-3">Login</h1>
        <form @submit.prevent="login">
          <table>
            <tr class="border-bottom border-black">
              <td class="py-2">Email</td>
              <td>:</td>
              <td>
                <input
                  type="email"
                  v-model="user.email"
                  class="bg-transparent border border-0"
                  style="outline: none; border: none"
                />
              </td>
            </tr>
            <tr class="border-bottom border-black py-3">
              <td class="py-2">Password</td>
              <td>:</td>
              <td>
                <input
                  type="password"
                  v-model="user.password"
                  class="bg-transparent border border-0"
                  style="outline: none; border: none"
                />
              </td>
            </tr>
          </table>
          <b-button variant="primary" type="submit" class="my-4 w-100"
            >Login</b-button
          >
        </form>
      </div>
    </div>
    <div class="vh-100">
      <img
        src="~/assets/img/background.jpg"
        class="img-fluid object-fit-cover h-100 w-100"
        alt="background"
      />
    </div>
  </div>
</template>

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
        const response = await this.$axios.post("/api/assessment/login", {
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

        console.log(cookieList);

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
