<template>
  <h1 class="links-title">My links</h1>
  <section>
    <ul class="links-ul">
      <li v-for="link in links" class="links-item">
        <a class="card" :href="link.url" target="_blank">
          <div class="card-container">
            <div class="card-text">{{ link.title }}</div>
            <div class="card-icon">
              <img :src="getSVG(link.icon_svg)" alt="icon" />
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
  <footer>Santiago Menendez - 2023</footer>
</template>

<script setup>
import data from '../data/links.json'
import { ref } from 'vue'

const links = ref([...data.links])

function getSVG(url) {
  const imageUrl = new URL(`../assets/svg/${url}`, import.meta.url).href
  return imageUrl
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.links-title {
  color: #ffffff;
  text-align: center;
  font-family: Arial, sans-serif;

  padding: 0;
  margin: 0;
  margin-bottom: 5px;
}

.links-ul {
  list-style-type: none;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.links-item {
  margin: 5px;
}

footer {
  color: #ffffff;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Arial, sans-serif;

  margin: 0;
  padding: 0;
  margin-top: 5px;
}

.debug {
  border: 1px solid red;
  border-color: red;
}
</style>
