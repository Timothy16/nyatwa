<template>
  <div style="background-color: #000000;">
    <footer class="container footer-style">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
                <img src="/nyatwa/images/Logo-footer.svg" class="img-fluid logo-nav-r" alt="" srcset="" />
                <p class="logo-text pt-3">Nyatwa helps you send and receive money fast, safe and easy.</p>
            </div>
            <div class="col-lg-3 col-md-2 col-6 footer-p footer-d-m-n">
                <h6 class="header-footer">Quick Links</h6>
                <ul>
                    <li><NuxtLink to="/company">Company</NuxtLink></li>
                    <li><NuxtLink to="/student-ambassador">Student Ambassador</NuxtLink></li>
                    <li><NuxtLink to="/get-support">Get Support</NuxtLink></li>
                </ul>
               
            </div>
            <div class="col-lg-3 col-md-2 col-6 footer-p footer-d-m-n">
                <h6 class="header-footer">Resources</h6>
                <ul>
                    <!-- <li>Blog</li> -->
                    <li><NuxtLink to="/faq">FAQs</NuxtLink></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 col-12 footer-p">
                <h6 class="header-footer legal-f">Legal</h6>
                <ul>
                    <li>
                        <NuxtLink to="https://nyatwa.notion.site/NYATWA-TERMS-AND-CONDITIONS-d4a8aa3ec6ee4e3dbc0d0f89d910c1df" target="_blank">
                            Terms of Service
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://nyatwa.notion.site/NYATWA-PRIVACY-POLICY-a9e979bbee6c4a3693b2e0252da08941" target="_blank">
                            Privacy Policy
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="social-media">
            <NuxtLink to="https://twitter.com/nyatwa_app" target="_blank">
                <img src="/nyatwa/images/twitter.svg" class="img-fluid footer-logo" alt="" srcset="" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </NuxtLink>
            <NuxtLink to="https://www.instagram.com/nyatwa_app/" target="_blank">
                <img src="/nyatwa/images/instagram.svg" class="img-fluid footer-logo" alt="" srcset="" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </NuxtLink>
            <NuxtLink to="https://linkedin.com/company/nyatwa" target="_blank">
                <img src="/nyatwa/images/linkdin.svg" class="img-fluid footer-logo" alt="" srcset="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </NuxtLink>
            <!-- <img src="/nyatwa/images/blog.svg" class="img-fluid" alt="" srcset="" /> -->
        </div>
        <div class="line-footer">
            <img src="/nyatwa/images/line.svg" class="img-fluid" alt="" srcset="" />
        </div>
        <div class="copy-right">Copyright © {{ new Date().getFullYear() }} Paychangu Limited</div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
li a{
    color: #fff;
    padding: 0;
    margin: 0;
    text-decoration: none;
    font-style: normal;
    font-weight: 100 !important;
    font-size: 1em !important;
}
a{
    text-decoration: none;
}
</style>