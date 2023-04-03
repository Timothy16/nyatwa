<template>
<div style="background-color: #fff;">
  <!-- #F4F4FF -->
  <div class="container hero-down">
    <div class="hero-title animate__animated animate__fadeInLeft animate__slow">Move Money Freely</div>
    <div class="hero-text animate__animated animate__fadeInUp animate__slow">Send and request money with a tap, purchase airtime, and shop online from anywhere in the world with our virtual dollar card.</div>
    <div class="d-flex justify-content-center mt-5 ">
        <div data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-download-hero animate__animated animate__fadeInUp animate__slow"><span class="pic-up"><nuxt-img src="/images/DeviceMobileCamera.svg" class="img-fluid" alt="" srcset="" /></span>&nbsp; Download the app</div>
    </div>
    <div class="money-s-1 animate__animated animate__backInUp animate__slow">
            <nuxt-img src="/images/hero-money-1.svg" class="img-fluid" alt="" srcset="" />
    </div>
    <div class="money-s-2 animate__animated animate__backInUp animate__slow">
        <nuxt-img src="/images/hero-money-2.svg" class="img-fluid" alt="" srcset="" />
    </div>
  </div>

</div>
</template>

<script setup>
    const isOpened = ref(false);
</script>

<style scoped>

</style>