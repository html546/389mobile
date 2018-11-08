<template>
    <div class="wrapper">
        <p class="text-center">语言选择:</p>
        <p class="text-center">
            <a href="javascript:;">简体中文</a>
            <a href="javascript:;">English</a>
        </p>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  margin-top: 70px;
  p {
    color: #fff;
    text-align: center;
    color: #6b6e70;
    margin: 0 0 10px;
  }
  p:nth-child(2) a{
    color: #fff;
  }
}
</style>