<script setup>
const links = [
  {
    name: 'Website',
    path: 'https://dhanyhidayat.vercel.app'
  },
  {
    name: 'Simple Form Builder',
    path: 'https://dhany-form.vercel.app'
  },
  {
    name: 'Notion Clone',
    path: 'https://dotion-projects.vercel.app'
  },
  {
    name: 'Saweria',
    path: 'https://saweria.co/dhanyhidayat'
  }
]
</script>

<template>
  <header class="flex flex-col space-y-5 items-center justify-center">
    <h1 class="text-4xl text-white">Hi! I'm Dhany</h1>
    <img src="./assets/profile.webp" alt="Profile" class="w-48" />
    <p class="text-white text-center text-md">
      Who is a enthusiast in Software Engineer with a strong emphasis on Frontend Development
    </p>
  </header>
  <main class="py-7">
    <ul>
      <li class="w-full flex flex-col space-y-4 items-center justify-center">
        <a v-for="link in links" :key="link.name" :href="link.path" target="_blank" class="w-full">
          <v-btn variant="outlined" class="w-full text-white" size="large" rounded="0">
            {{ link.name }}
          </v-btn>
        </a>
      </li>
    </ul>
  </main>
  <footer class="w-full flex gap-7 items-center justify-center pt-5">
    <a
      href="https://github.com/dj1samsoe"
      target="_blank"
      class="text-[#FFC700] text-2xl"
      aria-label="Github"
    >
      <i class="bi bi-github"></i>
    </a>
    <a
      href="https://instagram.com/dhanhid_"
      target="_blank"
      class="text-[#FFC700] text-2xl"
      aria-label="Instagram"
    >
      <i class="bi bi-instagram"></i>
    </a>
    <a
      href="https://linkedin.com/in/fauziandhany"
      target="_blank"
      class="text-[#FFC700] text-2xl"
      aria-label="Linkedin"
    >
      <i class="bi bi-linkedin"></i>
    </a>
    <a
      href="https://twitter.com/djisamsoe__"
      target="_blank"
      class="text-[#FFC700] text-2xl"
      aria-label="Twitter"
    >
      <i class="bi bi-twitter-x"></i>
    </a>
  </footer>
</template>
