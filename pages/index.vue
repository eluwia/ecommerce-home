<template>
  <main class="page">
    <Header />
    <Hero/>
    <Featured/>
    <Banner/>
    <Categories/>
    <Footer/>
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Featured from '@/components/featuredproducts/Featured.vue'
import Banner from '@/components/Banner.vue'
import Categories from '@/components/categories/Categories.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>

</style>