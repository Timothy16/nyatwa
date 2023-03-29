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
        layout: "other-layout",
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

</style>