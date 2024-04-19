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
        <form>
          <table>
            <tr class="border-bottom border-black">
              <td class="py-2">Email</td>
              <td>:</td>
              <td>
                <input
                  type="email"
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
};
</script>
