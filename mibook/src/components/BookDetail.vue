<template>
  <div class="bookdetail">
    <!--头部导航-->
    <mu-appbar :title="title" :zDepth=2 class="top-fixed">
      <mu-icon-button icon="bookshelf" slot="left"/>
      <mu-icon-button icon="search" slot="right"/>
    </mu-appbar>

    <!--主体部分-->
    <mu-card class="md50">
      <!--<mu-card-header title="Myron Avatar" subTitle="sub title">
        <mu-avatar :src="myron" slot="avatar"/>
      </mu-card-header>-->
      <mu-card-media>
        <img :src="img" />
      </mu-card-media>
      <mu-card-title :title="title" :subTitle="author"/>
      <mu-card-text>
        简介：散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
        找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
      </mu-card-text>
      <mu-card-actions>
        <mu-flat-button label="免费阅读" class="bgred"/>
        <mu-flat-button label="加入书架" class="bgdefault"/>
      </mu-card-actions>
    </mu-card>




  </div>
</template>

<script>
import book1 from '../assets/images/book1.jpg'

export default {
  name: 'home',
  data () {
    return {
       title: "三生三世十里桃花",
       author: "唐七公子",
       img: book1
    }
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .mu-appbar{
    height: 40px;
    background-color: #2fbcd3;
  }
  .mu-appbar-title{
    line-height: 40px;
    font-size: 16px;
  }
  .gridlist-demo-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .top-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .md50{
    margin-top: 50px;
    padding-bottom: 30px;
  }
  .bgred{
    background-color: #e4393c;
    color: #fff;
    border-radius: 5px;
  }
  .bgdefault{
     background-color: #e6e6e6;
     border-radius: 5px;
  }

  
</style>
