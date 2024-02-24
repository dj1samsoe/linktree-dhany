<script setup>
const links = [
  {
    id: 1,
    name: 'Website',
    path: 'https://dhanyhidayat.vercel.app'
  },
  {
    id: 2,
    name: 'Form Builder',
    path: 'https://dhany-form.vercel.app'
  },
  {
    id: 3,
    name: 'Notion Clone',
    path: 'https://dotion-projects.vercel.app'
  },
  {
    id: 4,
    name: 'Buy me Coffee',
    path: 'https://saweria.co/dhanyhidayat'
  }
]
</script>

<template>
  <header
    class="flex flex-col space-y-5 items-center justify-center px-5 pt-10"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <h1 class="text-4xl text-white">Hi! I'm Dhany</h1>
    <img src="./assets/profile.webp" alt="Profile" class="w-48" />
    <p class="text-white text-center text-md">
      Who is a enthusiast in Software Engineer with a strong emphasis on Frontend Development
    </p>
  </header>
  <main class="w-full px-5">
    <ul>
      <li class="w-full flex flex-col space-y-4 items-center justify-center transition-all">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.path"
          :aria-label="link.name"
          target="_blank"
          class="group w-full text-white border-2 border-white py-3 px-5 rounded-full flex justify-between items-center hover:bg-[#FFC700] hover:border-[#FFC700] duration-300"
          data-aos="zoom-in"
          data-aos-duration="1000"
          :data-aos-delay="link.id * 200"
          data-aos-once="true"
        >
          <span class="group-hover:text-black">{{ link.id }}.</span>
          <span class="text-center group-hover:text-black">{{ link.name }}</span>
          <i class="bi bi-box-arrow-up-right group-hover:text-black"></i>
        </a>
      </li>
    </ul>
  </main>

  <footer class="w-full text-black bg-[#FFC700] rounded-t-full py-3">
    <div class="flex gap-7 items-center justify-center text-2xl">
      <a href="https://github.com/dj1samsoe" target="_blank" aria-label="Github">
        <i class="bi bi-github"></i>
      </a>
      <a href="https://instagram.com/dhanhid_" target="_blank" aria-label="Instagram">
        <i class="bi bi-instagram"></i>
      </a>
      <a href="https://linkedin.com/in/fauziandhany" target="_blank" aria-label="Linkedin">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="https://twitter.com/djisamsoe__" target="_blank" aria-label="Twitter">
        <i class="bi bi-twitter-x"></i>
      </a>
      <a href="mailto:dhanyh86@gmail.com" target="_blank" aria-label="Email">
        <i class="bi bi-envelope-fill"></i>
      </a>
    </div>
  </footer>
</template>
