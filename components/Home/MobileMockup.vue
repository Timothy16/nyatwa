<template>
    <div style="background-color: #F4F4FF;" class="mockup-down-n">
        <div class="container move-up mockup-bg">
            <div class="d-flex phone-inside">
                <nuxt-img src="/images/phone-1.svg" class="img-fluid img-left-1" alt="" srcset="" />
                <nuxt-img src="/images/phone-2.svg" class="img-fluid img-left-2" alt="" srcset="" />
                <nuxt-img src="/images/phone-3.svg" class="img-fluid img-left-3" alt="" srcset="" />
            </div>
            <div class="d-flex section-company justify-content-between">
                <nuxt-img src="/images/techcrunch.svg" class="img-fluid" alt="" srcset="" /> 
                <nuxt-img src="/images/business.svg" class="img-fluid" alt="" srcset="" /> 
                <nuxt-img src="/images/techpoint.svg" class="img-fluid" alt="" srcset="" /> 
                <nuxt-img src="/images/techcabal.svg" class="img-fluid" alt="" srcset="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section-company{
    width: 85%;
    margin: auto;
    position: relative;
    top: -130px;
}
.mockup-down-n{
    padding-top: 15rem;
}
.mockup-bg{
    background-image: url('/public/images/vector.svg'), linear-gradient(to right, #6246EA, #6246EA);
    border-radius: 50px;
    /* height: auto; */
    /* padding-bottom: 5rem; */
    background-repeat: no-repeat;
    height: 645px;
    background-size: cover;
    /* padding-top: 10rem; */
}
/* .phone-inside{
    position: relative;
    top: 200px;
} */
.img-left-1{
    position: relative;
    top: -180px;
    height: 650px;
    width: 736px;
    right: -50px;
}
.img-left-2{
    left: -50px;
    top: -330px;
    position: relative;
    height: 650px;
    width: 736px;
}
.img-left-3{
    left: -180px;
    position: relative;
    top: -480px;
    height: 650px;
    width: 736px;
}
/* .move-up{
    position: relative;
    top: -300px;
} */
</style>