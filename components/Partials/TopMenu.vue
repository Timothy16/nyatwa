<template>
    <div style="" class="fixed-top">
        <!-- #F4F4FF -->
        <!-- <DownloadModal :is-opened="isOpened" @toggle="(value) => isOpened = value"/> -->
         
        <div class="container header-down">
            <nav class="navbar navbar-expand-lg bg-header">
                <div class="container-fluid">
                    <NuxtLink class="navbar-brand animate__animated animate__fadeInLeft animate__slow " to="/">
                        <img src="/nyatwa/images/Logo-Main.svg" class="img-fluid logo-nav-r" alt="" srcset="" />
                    </NuxtLink>
                    <button class="navbar-toggler" style="border: none;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <!-- <span class="navbar-toggler-icon"></span> -->
                    <img src="/nyatwa/images/List.svg" class="img-fluid" alt="" srcset="" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NuxtLink class="nav-link" aria-current="page" to="/company" :class="{'activeClass' : checkUrl == '/company'}">Company</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/student-ambassador" :class="{'activeClass' : checkUrl == '/student-ambassador'}">Student Ambassador</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/faq" :class="{'activeClass' : checkUrl == '/faq'}">FAQs</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/get-support" :class="{'activeClass' : checkUrl == '/get-support'}">Get Support</NuxtLink>
                            </li>
                        
                        </ul>
                        <!-- <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> --> 
                        <!-- <div @click="isOpened = true" class="download-btn"><span class="pic-up"><img src="/nyatwa/images/DeviceMobileCamera.svg" class="img-fluid" alt="" srcset="" /></span>&nbsp; Download the app</div> -->
                        <div data-bs-toggle="modal" data-bs-target="#exampleModal" class="download-btn"><span class="pic-up"><img src="/nyatwa/images/DeviceMobileCamera.svg" class="img-fluid" alt="" srcset="" /></span>&nbsp; Download the app</div>
                    </div>
                </div>
            </nav>
        </div>
  </div>
</template>

<script>
export default {
    computed : {
         checkUrl(){
            return this.$route.path
        },
    }
}
</script>

<style scoped>
.activeClass{
    color: #6246EA !important;
}
</style>