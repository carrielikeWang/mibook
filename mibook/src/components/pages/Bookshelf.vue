<template>
  <div class="bookshelf">
    <!--头部导航-->
    <headerBar title="书架" leftIcon="shop" rightIcon="search" @rightClick="turnTo('search')"  @leftClick="turnTo('/')" ></headerBar>
    
    <!--主体部分-->

    <div class="grid-container">
      <mu-flexbox :gutter="10">
        <mu-flexbox-item class="mi-flexbox-item" v-for="tile in list" :key="tile.bookId" align="center" @click.native="turnTo('/bookdetail',{bookId: tile.bookId})">
          <div class="paper">
            <img :src="tile.image" alt="">
          </div>
          <p class="book-title" >{{tile.title}}</p>
          <p class="book-author">{{tile.author}}</p>
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
  </div>
</template>

<script>
import Router from 'vue-router'
const router = new Router();
// 引入子组件
import HeaderBar from '../include/HeaderBar';


import book1 from '../../assets/images/book1.jpg'
import book2 from '../../assets/images/book2.jpg'
import book3 from '../../assets/images/book3.jpg'


export default {
  name: 'bookshelf',
  data () {
    return {
       title: "书架",
       titleBarClass: "title-bar-class",
       show: true,
       list: [
         {
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
          }
        ]
    }
  },
  components: {
    headerBar: HeaderBar
  },
  methods: {
    turnTo(page,query){
      router.push({path: page,query: query})
    },
    turnBack(){
      window.history.back();
    }
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
 /*bookshelf*/
  .grid-container{
    margin-top: 50px;
  }

  .paper {
    display: inline-block;
    min-height: 100px;
    width: 100%;
    text-align: center;
    box-sizing: inherit;
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);

    img{
      width: 100%;
      max-width: 100%;
      min-height: 100px;
    }

  }
  .mi-flexbox-item{
    padding: 10px;
  }

  .book-title{
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
      line-height: 30px;
      text-align: left;      
  }

  .book-author{
      font-size: 12px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
      text-align: left;
  }
  
  
  
</style>
