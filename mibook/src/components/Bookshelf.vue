<template>
  <div class="home">
    <!--头部导航-->
    <headerBar title="书架" icon="shop" url="/"></headerBar>
    
    <!--主体部分-->
    <div class="gridlist-container">
      <mu-grid-list :padding="20" :cols="3" :cellHeight="160">
        <mu-sub-header>图书展示</mu-sub-header>
          <mu-grid-tile v-for="tile in list" :key="tile.bookId" :titleBarClass="titleBarClass" v-on:click="linkToBookDetail">
            <img :src="tile.image"/>
            <span slot="title"><b>{{tile.title}}</b></span>
            <span slot="subTitle">{{tile.author}}</span>
            <!--<mu-icon-button icon="cloud_download" slot="action"/>-->
            <!--<mu-checkbox class="demo-checkbox w32" uncheckIcon="favorite_border" checkedIcon="favorite" slot="action"/>-->
          </mu-grid-tile>
        
      </mu-grid-list>
    </div>




  </div>
</template>

<script>
import Router from 'vue-router'
const router = new Router();
// 引入子组件
import HeaderBar from './include/HeaderBar';

import book1 from '../assets/images/book1.jpg'
import book2 from '../assets/images/book2.jpg'
import book3 from '../assets/images/book3.jpg'


export default {
  name: 'home',
  
  data () {
    return {
       title: "书架",
       titleBarClass: "title-bar-class",
       show: true,
       list: [{
        bookId: "123",
        image: book1,
        title: '三生三世十里桃花',
        author: '唐七公子'
      }, {
        bookId: "456",
        image: book2,
        title: '三生三世十里桃花',
        author: '唐七公子'
      }, {
        bookId: "789",
        image: book3,
        title: '三生三世十里桃花',
        author: '唐七公子'
      }]
    }
  },
  components: {
    headerBar: HeaderBar
  },
  methods: {
    linkToBookDetail(){
      router.push({path: 'bookdetail',params: {bookId: "123"}})
    },
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
 /*bookshelf*/
  .gridlist-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
    padding: 8px;
  }
  
  .w32{
    width: 32px;
  }
  .mu-grid-tile-title-container{
    margin-left: 10px;
  }
  .title-bar-class{
    height: 36px;
    text-align: left;
    padding-left: 8px;
  }
  .mu-grid-tile-title{
    font-size: 12px;
  }
  
  
  
</style>
