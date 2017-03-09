<template>
    <div class="header-bar">
        <mu-appbar :title="title" :zDepth=2 class="top-fixed">
            <mu-icon-button :icon="leftIcon" :url="url" slot="left" @click="linkTo"/>
            <mu-icon-button :icon="rightIcon" slot="right" @click="letShow"/> 
        </mu-appbar>

        <mu-appbar :zDepth="1" class="top-fixed search-box" v-if="!show">
            <mu-icon value="search" color="#2fbcd3" slot="left"/>
            <mu-text-field hintText="输入书名"/>
            <span slot="right" class="cancle" @click="letHide">取消</span>
        </mu-appbar>
    </div>  
</template>

<script>
import Router from 'vue-router'
const router = new Router();

export default {
  name: 'headerBar',
  props: ['title','leftIcon','rightIcon', 'url'],
  data () {
    return {
       show: true,
    }
  },
   methods: {
    linkTo(){
      router.push({path: this.url})
    },
    letShow(){
        this.show = false;
        
    },
    letHide(){
      this.show = true;
    }
  }
   
}
</script>

<!--注意：这里使用 scoped的话，即使此组件作为子组件分配给其他组件，在其他组件中这里的样式也无效-->
<style lang="scss">
.mu-appbar{
    height: 40px;
    background-color: #2fbcd3;
}

.top-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}
.mu-appbar-title{
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.mu-text-field{
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    min-height: 40px;
}
.search-box{
    background-color: #fff; 
}
.cancle{
    color: #2fbcd3;
    cursor: pointer;
}
</style>