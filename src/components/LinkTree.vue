<template>
  <section class="links-title-container">
    <h1 class="links-title">
      My links
    </h1>
    <button @click=changeDarkLightMode type="button" class="dark-mode-button">
      <SVGIcon v-if="iconMode.value === 'moon'" class="svg-icon" name="moon" />
      <SVGIcon v-if="iconMode.value === 'sun'" class="svg-icon" name="sun" />
    </button>
  </section>
  <section>
    <img class="avatar" alt="avatar" src="../assets/avatar.png" />
  </section>
  <section>
    <ul class="links-ul">
      <li v-for="link in links" class="links-item" :key="link.url">
        <a class="card" :href="link.url" target="_blank">
          <div class="card-container">
            <div class="card-text">{{ link.title }}</div>
            <div class="card-icon">
              <SVGIcon class="svg-icon" :name=link.icon_svg />
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
  <footer>Santiago Menendez - {{ date }}</footer>
</template>

<script setup>
import data from "../data/links.json"
import { ref, reactive, onBeforeMount } from "vue"
import SVGIcon from "./SVGIcon.vue"

const links = ref([...data.links])
const date = new Date().getFullYear()
const iconMode = reactive({
  value: "sun"
})

const changeDarkLightMode = async () => {
  if (localStorage.getItem("theme") === "dark") {
    lightMode()
    iconMode.value = "moon"
  }
  else if (localStorage.getItem("theme") === "light") {
    darkMode()
    iconMode.value = "sun"
  }
}

const lightMode = () => {
  const root = document.querySelector(":root")
  localStorage.setItem("theme", "light")
  root.style.setProperty("--mode-background", "rgb(212, 183, 183)")
  root.style.setProperty("--mode-borders", "black")
  root.style.setProperty("--mode-text", "white")
  root.style.setProperty("--mode-text-hover", "white")
  root.style.setProperty("--mode-text-title", "black")
  root.style.setProperty("--mode-card-background", "black")
  root.style.setProperty("--mode-card-background-hover", "rgb(212, 183, 183)")
  root.style.setProperty("--mode-footer-text", "black")
}

const darkMode = () => {
  const root = document.querySelector(":root")
  localStorage.setItem("theme", "dark")
  root.style.setProperty("--mode-background", "black")
  root.style.setProperty("--mode-borders", "white")
  root.style.setProperty("--mode-text", "black")
  root.style.setProperty("--mode-text-hover", "white")
  root.style.setProperty("--mode-text-title", "white")
  root.style.setProperty("--mode-card-background", "rgb(212, 183, 183)")
  root.style.setProperty("--mode-card-background-hover", "black")
  root.style.setProperty("--mode-footer-text", "white")
}

onBeforeMount(() => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark")
  }

  if (localStorage.getItem("theme") === "dark") {
    darkMode()
  }
  else if (localStorage.getItem("theme") === "light") {
    lightMode()
  }
})
</script>

<style scoped>
.debug {
  border: 1px solid red;
  border-color: red;
}
</style>
