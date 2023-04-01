<template>
    <div class="">
       <HomeHero />
       <HomePhoneMockup />
       <HomeCard />
       <HomeTestimonial />
       <HomeDownload />
       
    </div>
  
</template>

<script setup>

    useHead({
        title: 'Home / nyatwa',
        meta: [
          { name: 'description', content: '' }
        ],
        bodyAttrs: {
          class: 'test'
        }
    })
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>