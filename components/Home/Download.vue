<template>
  <div style="background-color: #fff;">
    <div class="container">
        <div class="style-download">
            <div class="row">
                <div class="col-lg-7">
                    <div class="text-enter-1">
                        <p class="wait-for-it">What are you waiting for?</p>
                        <h1 class="download-text">Download the App to Get Started</h1>
                        <div class="mt-5">
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-download-hero"><span class="pic-up"><nuxt-img src="/images/DeviceMobileCamera.svg" class="img-fluid" alt="" srcset="" /></span>&nbsp; Download the app</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <!-- <nuxt-img src="/images/phone-download.svg" class="img-g" alt="" srcset="" /> -->
                </div>
            </div>
        </div>
        <div class="star-rating">
            <div class="row">
                <div class="col-lg-6 col-sm-12 co-md-6">
                    <p class="Licensed">Licensed by–</p>
                    <nuxt-img src="/images/Malawi-Logo.svg" class="img-fluid" alt="" srcset="" />
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
.img-g{
    width: 700px;
    position: relative;
    left: -200px;
    /* top: -80px; */
}
.text-enter-1{
    /* padding-left: 5rem;
    padding-top: 4rem; */
    padding: 5rem 0 5rem 3rem;
}
</style>