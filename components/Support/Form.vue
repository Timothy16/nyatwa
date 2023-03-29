<template>
  <div>
    <div class="form-field">
        <div class="inputwrapper" data-required="*">
            <input type="text" class="form-control-plaintext class-bor"  placeholder="Full name">
        </div>
        <div class="inputwrapper2" data-required="*">
            <input type="text" class="form-control-plaintext class-bor"  placeholder="Email Address ">
        </div>
        <input type="text" class="form-control-plaintext class-bor"  placeholder="Phone Number">
        
        <div class="inputwrapper3" data-required="*">
            <select class="form-control-plaintext class-bor" aria-label="Default select example">
                <option selected>How can we help you?</option>
                <option value="Suggest Features">Suggest Features</option>
                <option value="Report Bug">Report Bug</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Enquiry ">Enquiry</option>
            </select>
        </div>

        <textarea name="" id="" placeholder="Type your message" class="form-control-plaintext class-bor text-a"></textarea>

        <button class="btn-send-message w-100">Send Message</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>