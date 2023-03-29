<template>
    <div class="">
       <CompanyHero />
       <CompanyWhy />
       <CompanyValues />
       <CompanyLogo />
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "other-layout",
    });
    useHead({
        title: 'Company / nyatwa',
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