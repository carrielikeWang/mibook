<template>
  <div class="bookdetail">
    <!--头部导航-->
    <headerBar :title="title" leftIcon="arrow_back" rightIcon="" url="/bookshelf"></headerBar>

    <!--主体部分-->
    <mu-card class="grid-container">
      <!--<mu-card-header title="Myron Avatar" subTitle="sub title">
        <mu-avatar :src="myron" slot="avatar"/>
      </mu-card-header>-->
      <mu-card-media>
        <img :src="img" />
      </mu-card-media>
      <mu-card-title :title="title" :subTitle="author"/>
      <mu-card-text class="content">
        简介：{{content}}
      </mu-card-text>
      <mu-card-actions>
        <mu-raised-button class="raised-button" label="免费阅读" icon="import_contacts" secondary/>
        <mu-raised-button class="raised-button" label="加入书架" icon="add" primary/>
      </mu-card-actions>
    </mu-card>

    




  </div>
</template>

<script>

// 引入子组件
import HeaderBar from '../include/HeaderBar';

import book1 from '../../assets/images/book1.jpg'

export default {
  name: 'home',
  data () {
    return {
       title: "三生三世十里桃花",
       author: "唐七公子",
       img: book1,
       content: "散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！"
    }
  },
  components: {
    headerBar: HeaderBar
  },
  methods: {

  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
  .grid-container{
    margin-top: 40px;
    padding: 10px 0 30px;
  } 
  .mu-appbar{
    height: 40px;
    background-color: #2fbcd3;
  }
  .mu-appbar-title{
    line-height: 40px;
    font-size: 16px;
  }
  .content{
    text-align: left;
  } 

  .mu-card-media{
    padding: 20px 30px 0;
  }
  .raised-button{
    border-radius: 5px;
    font-size: 12px;

    &:first-child{
      margin-right: 20px;
    }
  }

  
</style>
