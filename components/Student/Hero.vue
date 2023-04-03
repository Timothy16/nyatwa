<template>
    <div style="background-color: #fff;">
        <div class="container">
            <div class="header-student-w" >
                <h2 class="header-student">Earn cash as a Nyatwa Ambassador.</h2>
                <div class="student-p-w">
                    <p>Do you already tell your friends about Nyatwa? Well, it’s time to get rewarded.</p>
                </div>
                <div class="mt-4 mb-3 center-on-mobile">
                    <button class="btn-apply-student"><span class="pic-up"></span>&nbsp; Apply</button>
                </div>
            </div>
            <div class="student-group d-none d-sm-none d-md-block">
                <div class="row">
                    <div class="col-8">
                        <nuxt-img src="/images/group-student.svg" class="img-h w-100" alt="" srcset="" />
                    </div>
                    <div class="col-lg-4 col-4">
                        <nuxt-img src="/images/student.svg" class="img-h w-100" alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div class="student-group d-sm-block d-md-none">
                <div class="row g-1">
                    <div class="col-lg-8 col-8">
                        <nuxt-img src="/images/group-student.svg" class="img-h w-100" alt="" srcset="" />
                    </div>
                    <div class="col-lg-4 col-4">
                        <nuxt-img src="/images/student.svg" class="img-h w-100" alt="" srcset="" />
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
.img-h{
    height: 100%;
}
</style>