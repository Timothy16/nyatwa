<template>
    <div class="">
       <StudentHero />
       <StudentWhatIs />
       <StudentTask />
       <CompanyLogo />
    </div>
</template>

<script setup>
    definePageMeta({
        // layout: "other-layout",
    });
    useHead({
        title: 'Student Ambassador  / nyatwa',
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