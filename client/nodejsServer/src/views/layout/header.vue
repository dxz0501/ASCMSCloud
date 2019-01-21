<template>
    <div class="main-header">
        <div class="main-header-font">
        </div>
    </div>
</template>
<script>
import aa from '../../config/index';
console.log(aa);
export default {
    data() {
        return {
            activeIndex: "1"
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>


<style>
.main-header {
    height: 20px;
    text-align: center;
    background-color:mediumseagreen;
}
.main-header-font {
    color:white;
    line-height: 20px;
    font-size: 25px;
    font-weight: bolder;
}
</style>