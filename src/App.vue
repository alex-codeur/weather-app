<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      APIKey: "d6679beaa23bbcc909a3ed8692b18a4f",
      city: "Douala",
    };
  },
  created() {
    this.getCurrentWeather();
  },
  methods: {
    getCurrentWeather() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.APIKey}`
        )
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
</style>
