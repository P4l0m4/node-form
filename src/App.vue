<template>
  <div id="app">
    <form method="POST" @submit.prevent="submit" novalidate>
      <label for="message">Send a user to DB :</label>
      <input type="text" placeholder="Nom de l'utilisateur" v-model="name" />
      <input
        type="email"
        placeholder="Email de l'utilisateur"
        v-model="email"
      />
      <input type="number" placeholder="Âge" v-model="age" />
      <input type="password" placeholder="Mot de passe" v-model="password" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      age: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      try {
        await fetch("/users", {
          method: "POST", //ou POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Authorization",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            age: +this.age,
            password: this.password,
          }),
        });
        console.log("OK");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: clamp(200px, 100%, 450px);
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: whitesmoke;
    padding: 16px;
    border-radius: 8px;

    input {
      padding: 8px;
      border-radius: 8px;
      border: 1px solid transparent;
      outline: none;
    }

    button {
      padding: 8px;
      border-radius: 8px;
      border: 1px solid transparent;
      outline: none;
      background-color: lightgray;
      cursor: pointer;
    }
  }
}
</style>
