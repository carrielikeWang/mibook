<template>
  <div class="category">
    <!--头部导航-->
    <HeaderBar title="分类" leftIcon="arrow_back" rightIcon="home" @leftClick="turnBack" @rightClick="turnTo('/')"></HeaderBar>

    <!--主体部分-->

    <div class="grid-container">
      <h3 class="container-title">{{category.categoryName}}</h3>

      <Media v-for="bookItem in category.list" key="bookItem.bookId" :imgSrc="bookItem.image" :title="bookItem.title" :author="bookItem.author" 
        :description="bookItem.description" @clickHandle="turnTo('bookdetail',{bookId: bookItem.bookId})"></Media>
    </div>
  </div>
</template>

<script>
  import Router from 'vue-router'
  const router = new Router();
  import { mapGetters, mapActions } from 'vuex'
  // 引入子组件
  import HeaderBar from '../include/HeaderBar';
  import Media from '../include/Media';
  import * as utils from '../../utils';
  


  export default {
    name: 'category',
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters({
        category: 'category'
      }),
    },
    methods: {
      ...mapActions([
        'getCategory'
      ]),
      turnTo(page, query) {
        router.push({ path: page, query: query })
      },
      turnBack() {
        window.history.back();
      }
    },
    created() {
      let id = utils.getQueryString('categoryId');
      console.log(id);
      this.$store.dispatch('getCategory', id)
    },
    components: {
      HeaderBar,
      Media
    },


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /*bookshelf*/
  
  .grid-container {
    margin-top: 50px;
    .container-title {
      text-align: left;
      padding: 10px 15px;
      border-bottom: 1px solid #ddd;
      box-sizing: content-box;
      margin-bottom: 0;
    }
  }
  
  .paper {
    display: inline-block;
    min-height: 100px;
    width: 100%;
    text-align: center;
    box-sizing: inherit;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
    img {
      width: 100%;
      max-width: 100%;
      min-height: 100px;
    }
  }
  
  .mi-flexbox-item {
    padding: 10px;
  }
  
  .book-title {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    line-height: 30px;
    text-align: left;
  }
  
  .book-author {
    font-size: 12px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    text-align: left;
  }
</style>