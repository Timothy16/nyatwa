<template>
  <div class=" mb-5">
    <div class="container tabs">
      <div class="tab">
        <input type="checkbox" id="chck1">
        <label class="tab-label" for="chck1">
            <div class="d-flex justify-content-between">
                <div>Is Nyatwa a bank?</div>
                <img src="/nyatwa/images/circle.svg" class="style-img" alt="" srcset="" />
            </div>
        </label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
      </div>
      <hr>
      <div class="tab">
        <input type="checkbox" id="chck2">
        <label class="tab-label" for="chck2">
            <div class="d-flex justify-content-between">
                <div>Is my money secure with Nyatwa?</div>
                <img src="/nyatwa/images/circle.svg" class="style-img" alt="" srcset="" />
            </div>
        </label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
      <hr>
        <div class="tab">
            <input type="checkbox" id="chck3">
            <label class="tab-label" for="chck3">
                <div class="d-flex justify-content-between">
                    <div>How much does Nyatwa charge per transaction?</div>
                    <img src="/nyatwa/images/circle.svg" class="style-img" alt="" srcset="" />
                </div>
            </label>
            <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
            </div>
        </div>
        <hr>
        <div class="tab">
            <input type="checkbox" id="chck4">
            <label class="tab-label" for="chck4">
                <div class="d-flex justify-content-between">
                    <div>What is the maximum amount my account can hold?</div>
                    <img src="/nyatwa/images/circle.svg" class="style-img" alt="" srcset="" />
                </div>
            </label>
            <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
            </div>
        </div>
        <hr>
        <div class="tab">
            <input type="checkbox" id="chck5">
            <label class="tab-label" for="chck5">
                <div class="d-flex justify-content-between">
                    <div>What is card creation fee?</div>
                    <img src="/nyatwa/images/circle.svg" class="style-img" alt="" srcset="" />
                </div>
            </label>
            <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
            </div>
        </div>
        <hr>
        <div class="tab">
            <input type="checkbox" id="chck6">
            <label class="tab-label" for="chck6">
                <div class="d-flex justify-content-between">
                    <div>What is the maximum amount I can spend using my card in a month?</div>
                    <img src="/nyatwa/images/circle.svg" class="style-img" alt="" srcset="" />
                </div>
            </label>
            <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
$midnight: #fff;

// General
.style-img{
    width: 30px;
    height: 30px;
}

h2 {
  margin: 0 0 .5em;
  font-weight: normal;
}
.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
// Layout
.row {
  display:flex;
  .col {
    flex:1;
    &:last-child {
      margin-left: 1em;
    }
  }
}
/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;

}
.tab {
  width: 100%;
  color: #141414;
  overflow: hidden;
  &-label {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 43px;

    color: #141414;
    width: 100%;
    
    padding: 1em;
    background: $midnight;
    cursor: pointer;
    /* Icon */
    &:hover {
        background: #fff;
    }
    &::after {
    
      width: 1em;
      height: .6em;
      border: 1px solid #141414;
      text-align: center;
      transition: all .2s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: #141414;
    background: white;
    transition: all .2s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
        background: #fff;
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: #000;
    color: #fff;

    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}
@media screen and (max-width : 578px) {
  .tab-label {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>