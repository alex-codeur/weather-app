<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebaseinit";
export default {
  name: "App",
  data() {
    return {
      APIKey: "d6679beaa23bbcc909a3ed8692b18a4f",
      city: "Douala",
      cities: [],
    };
  },
  created() {
    this.getCityWeather();
  },
  methods: {
    getCityWeather() {
      let firebaseDB = db.collection("cities");

      firebaseDB.onSnapshot((snap) => {
        snap.docChanges().forEach(async (doc) => {
          if (doc.type === "added") {
            try {
              const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${
                  doc.doc.data().city
                }&appid=${this.APIKey}`
              );

              const data = response.data;
              firebaseDB
                .doc(doc.doc.id)
                .update({
                  currentWeather: data,
                })
                .then(() => {
                  this.cities.push(doc.doc.data());
                })
                .then(() => {
                  console.log(this.cities);
                });
            } catch (err) {
              console.log(err);
            }
          }
        });
      });
    },
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
