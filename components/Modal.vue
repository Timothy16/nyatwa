<template>
  <div class="">
    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog pad-none">
        <div class="modal-content modal-w-n">
            <!-- <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> -->
            <div class="modal-body modal-p-n">
                <div class="background-bg ">
                    <div class="d-flex justify-content-end p-2" style="cursor: pointer;" data-bs-dismiss="modal" aria-label="Close">
                        <nuxt-img src="/images/close-circle.svg" class="img-fluid" alt="" srcset="" />
                    </div>
                </div>
                <div class="text-center">
                    <div class="img-up">
                        <nuxt-img src="/images/scan.svg" class="img-fluid" alt="" srcset="" />
                        <div class="text-scan mb-3">Scan the QR Code to download Pera Wallet</div>
                        <p>Start moving money freely</p>
                        <div class="app-down">
                            <nuxt-img src="/images/play-store.svg" class="img-fluid" alt="" srcset="" /> &nbsp;&nbsp;
                            <nuxt-img src="/images/app-store.svg" class="img-fluid" alt="" srcset="" />
                        </div>
                    </div>
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
.background-bg{
    background-image: url('/images/download-bg-c.svg'), linear-gradient(to right, #6246EA, #6246EA);
    height: 192px;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.pad-none{
    top: 5vw;
}
.modal-w-n{
    width: 573px !important;
    height: 621px;
}
.modal-p-n{
    padding: 0;
}
.modal-content{
    border-radius: 22px;
}
.img-up{
    position: relative;
    top: -100px;
    width: 80%;
    margin: auto;
}
.text-scan{
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 43px;
    text-align: center;
    color: #141414;
   
}
.img-up p{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #666666;
}
.app-down{
    margin: 5rem 0 0 0;
}
</style>