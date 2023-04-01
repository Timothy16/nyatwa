<template>
  <div>
    <div class="popup" v-if="props.isOpened">
            <div class="blocker" @click="setIsOpened(false)"></div>
                <div class="contents shadow pb-3">
                    <div cass="">
                        
                    </div>                           
                </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  isOpened: Boolean
});
 
const emit = defineEmits(['toggle']);
 
function setIsOpened(value) {
  emit('toggle', value);
}
</script>

<style>
.popup { display: block; }
.popup.close { display: none; }
.blocker {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: ' ';
    z-index : 100;
    background: rgba(0,0,0,.5);
}
.popup .contents {
    border: 1px solid #ccc;
    border-radius: 20px;
    width: 569px;
    height: 466px;
    /* display: flex; */
    z-index : 9001;
    align-items: center;
    justify-content: center;
    /* text-align: center; */
    background: #FFF;
    position: fixed;
    top: 50vh;
    left: 50vw;
    padding: .1rem .5rem;
    transform: translate(-50%, -50%);
}
</style>