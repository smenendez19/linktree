<template>
  <section>
    <button @click=changeDarkLightMode type="button" class="dark-mode-button">
      <SVGIcon v-if="iconMode.value === 'moon'" class="svg-icon" name="moon" />
      <SVGIcon v-if="iconMode.value === 'sun'" class="svg-icon" name="sun" />
    </button>
  </section>

  <section>
    <img class="avatar" alt="avatar" src="../assets/avatar.png" />
  </section>

  <section class="links-title-container">
    <h1 class="links-title">
      Santiago Menendez
    </h1>
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
      <li class="links-item" key="email">
        <div class="card" @click="showEmailModal" style="cursor:pointer ">
          <div class="card-container">
            <div class="card-text">Email</div>
            <div class="card-icon">
              <SVGIcon class="svg-icon" name="email" />
            </div>
          </div>
        </div>
      </li>
      <li class="links-item" key="cv">
        <div class="card" @click="showPDFModal" style="cursor:pointer ">
          <div class="card-container">
            <div class="card-text">CV</div>
            <div class="card-icon">
              <SVGIcon class="svg-icon" name="cv" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>

  <Modal v-show="isModalPDFVisible">
    <template v-slot:body>
      <embed :src="cvFile" width="1000px" height="500px" />
    </template>
    <template v-slot:buttons>
      <div>
        <button type="button" class="btn-color btn" @click="downloadFile">
          Download
        </button>
        <button type="button" class="btn-color btn" @click="closePDFModal">
          Close
        </button>
      </div>
    </template>
  </Modal>

  <Modal v-show="isModalEmailVisible">
    <template v-slot:body>
      <span class="links-title"><strong>santiagomenendez@outlook.com</strong></span>
    </template>
    <template v-slot:buttons>
      <div>
        <button type="button" class="btn-color btn-close-email" @click="closeEmailModal">
          Close
        </button>
      </div>
    </template>
  </Modal>

  <footer>
    <strong>{{ date }}</strong>
  </footer>
</template>

<script setup>
import data from "@/data/links.json"
import { ref, reactive, onBeforeMount } from "vue"
import SVGIcon from "./SVGIcon.vue"

import Modal from '@/components/Modal.vue';

// LocalStorage
if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "dark")
}

// Refs
const links = ref([...data.links])
const date = new Date().getFullYear()
const iconMode = reactive({
  value: localStorage.getItem("theme") === "dark" ? "sun" : "moon"
})
const cvFile = ref("files/cv.pdf")

// Modal
const isModalPDFVisible = ref(false)
const isModalEmailVisible = ref(false)

const showPDFModal = () => {
  isModalPDFVisible.value = true
}
const closePDFModal = () => {
  isModalPDFVisible.value = false
}

const showEmailModal = () => {
  isModalEmailVisible.value = true
}

const closeEmailModal = () => {
  isModalEmailVisible.value = false
}

const downloadFile = () => {
  const link = document.createElement("a")
  link.href = cvFile.value
  link.download = cvFile.value.split("/").pop()
  link.click()
}

// Dark/Light mode
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
  root.style.setProperty("--mode-background", "#FEFBD8")
  root.style.setProperty("--mode-borders", "#BB9AB1")
  root.style.setProperty("--mode-text", "#EECEB9")
  root.style.setProperty("--mode-text-hover", "#987D9A")
  root.style.setProperty("--mode-text-title", "#987D9A")
  root.style.setProperty("--mode-card-background", "#987D9A")
  root.style.setProperty("--mode-card-background-hover", "#EECEB9")
  root.style.setProperty("--mode-footer-text", "#987D9A")
}

const darkMode = () => {
  const root = document.querySelector(":root")
  localStorage.setItem("theme", "dark")
  root.style.setProperty("--mode-background", "#0C1844")
  root.style.setProperty("--mode-borders", "#FF6969")
  root.style.setProperty("--mode-text", "#FFF5E1")
  root.style.setProperty("--mode-text-hover", "#FFF5E1")
  root.style.setProperty("--mode-text-title", "#FFF5E1")
  root.style.setProperty("--mode-card-background", "#C80036")
  root.style.setProperty("--mode-card-background-hover", "#0C1844")
  root.style.setProperty("--mode-footer-text", "#FFF5E1")
}

// Lifecycle
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
