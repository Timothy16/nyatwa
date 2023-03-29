<template>
  <div style="background-color: #000000;">
    <footer class="container footer-style">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
                <nuxt-img src="/images/Logo-footer.svg" class="img-fluid" alt="" srcset="" />
                <p class="logo-text pt-3">Nyatwa helps you send and receive money fast, safe and easy.</p>
            </div>
            <div class="col-lg-3 col-md-2 col-6 footer-p">
                <h6 class="header-footer">Quick Links</h6>
                <ul>
                    <li>Company</li>
                    <li>Student Ambassador</li>
                    <li>Get Support</li>
                </ul>
               
            </div>
            <div class="col-lg-3 col-md-2 col-6 footer-p">
                <h6 class="header-footer">Resources</h6>
                <ul>
                    <li>Blog</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 col-12 footer-p">
                <h6 class="header-footer">Legal</h6>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div class="social-media">
            <nuxt-img src="/images/twitter.svg" class="img-fluid" alt="" srcset="" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <nuxt-img src="/images/instagram.svg" class="img-fluid" alt="" srcset="" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <nuxt-img src="/images/linkdin.svg" class="img-fluid" alt="" srcset="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <nuxt-img src="/images/blog.svg" class="img-fluid" alt="" srcset="" />
        </div>
        <div class="line-footer">
            <nuxt-img src="/images/line.svg" class="img-fluid" alt="" srcset="" />
        </div>
        <div class="copy-right">Copyright © {{ new Date().getFullYear() }} Paychangu Limited</div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>