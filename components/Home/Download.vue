<template>
  <div style="background-color: #fff;">
    <div class="container">
        <div class="style-download">
            <div class="flex-download">
                <div class="">
                    <p class="wait-for-it">What are you waiting for?</p>
                    <h1 class="download-text">Download the App to Get Started</h1>
                    <div class="d-flex mt-2">
                        <div class="btn-download-hero"><span class="pic-up"><nuxt-img src="/images/DeviceMobileCamera.svg" class="img-fluid" alt="" srcset="" /></span>&nbsp; Download the app</div>
                    </div>
                </div>
                <div class="">
                    <nuxt-img src="/images/phone-download.svg" class="img-fluid" alt="" srcset="" />
                </div>
            </div>
        </div>
        <div class="star-rating">
            <div class="row">
                <div class="col-lg-6 col-sm-12 co-md-6">
                    <p class="Licensed">Licensed by–</p>
                    <nuxt-img src="/images/Malawi-Logo.svg" class="img-fluid " alt="" srcset="" />
                </div>
                <div class="col-lg-3 col-sm-12 co-md-3">
                    <div class="star-down">
                        <nuxt-img src="/images/Star.svg" class="img-fluid " alt="" srcset="" />&nbsp;
                        <nuxt-img src="/images/Star.svg" class="img-fluid " alt="" srcset="" />&nbsp;
                        <nuxt-img src="/images/Star.svg" class="img-fluid " alt="" srcset="" />&nbsp;
                        <nuxt-img src="/images/Star.svg" class="img-fluid " alt="" srcset="" />&nbsp;
                        <nuxt-img src="/images/Star.svg" class="img-fluid " alt="" srcset="" />
                        <div class="mt-2"><nuxt-img src="/images/apple-logo.svg" class="img-fluid " alt="" srcset="" />&nbsp; <span class="text-in-logo">4.8 Rating on App Store</span></div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 co-md-3">
                    <div class="star-down">
                        <nuxt-img src="/images/Star.svg" class="img-fluid " alt="" srcset="" />&nbsp;
                        <nuxt-img src="/images/Star.svg" class="img-fluid " alt="" srcset="" />&nbsp;
                        <nuxt-img src="/images/Star.svg" class="img-fluid " alt="" srcset="" />&nbsp;
                        <nuxt-img src="/images/Star.svg" class="img-fluid " alt="" srcset="" />&nbsp;
                        <nuxt-img src="/images/Star-half.svg" class="img-fluid " alt="" srcset="" />
                        <div class="mt-2"><nuxt-img src="/images/play-store-logo.svg" class="img-fluid " alt="" srcset="" />&nbsp; <span class="text-in-logo">4.5 Rating on Play Store</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.star-down{
    padding-top: 3rem;
    padding-bottom: 5rem;
}
.text-in-logo{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    /* line-height: 27px; */
    position: relative;
    top: 5px;
    color: #000000;
}
.star-rating{
    margin: 1rem 5rem;
}
.Licensed{
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #666666;
}
.img-fluid-1{
   z-index: 9001;
}
.style-download{
    background-image: url('/public/images/vector.svg'), linear-gradient(to right, #6246EA, #6246EA);
    border-radius: 50px;
    /* height: auto; */
    margin-top : 6rem;
    padding: 4rem 4rem 0 4rem;
    margin-bottom: 5rem;
    background-repeat: no-repeat;
    /* height: 645px; */
    background-size: cover;
}
</style>