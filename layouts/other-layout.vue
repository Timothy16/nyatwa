<template>
    <div >
        <div class="desktop-view">
            <PartialsTopMenuO />
        </div>
        <div class="mobile-view">
            <!-- <PartialsTopTubeMobile /> -->
        </div>
        <div class="top-down">
             <slot />
        </div>
        <div>
            <PartialsFooter />
        </div>
    </div>
</template>
 <script>
 export default {
      head() {
        return {
            bodyAttrs: {
                id: "page-top",
                class: "",
            },
            meta: [],
            link: [
         
            ],
          
        };
    },
 }
 </script>
 <style scoped>
 .top-down{
    padding-top: 13rem;
 }
 .desktop-view{
    display: block;
}
.mobile-view{
    display: none;
}
@media screen and (max-width : 578px) {
    .desktop-view{
        display: none;
    }
    .mobile-view{
        display: block;
    }
    .slot-down{
        margin: 3em 1rem;
    }
}
@media screen and (max-width : 768px) {
    .desktop-view{
        display: none;
    }
    .mobile-view{
        display: block;
    }
   
}
 </style>