<template>
  <div>
    <FaqHero />
  </div>
</template>

<script setup>
    definePageMeta({
        layout: "other-layout",
    });
    useHead({
        title: 'FAQ  / nyatwa',
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