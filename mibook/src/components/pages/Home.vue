<template>
  <div class="bookshelf">
    <!--头部导航-->
    <HeaderBar title="觅书" rightIcon="bookshelf" @rightClick="turnTo('bookshelf')"></HeaderBar>

    <!--主体部分-->
    <div class="gridlist-container">
      <mu-list-item>
        <div class="search" @click="turnTo('search')">
          <div class="search-inner">书名/作者</div>
          <mu-icon class="mi-search-icon" value="search" color="#a8a8a8" />
        </div>
      </mu-list-item>


      <mu-tabs :value="activeTab" @change="handleTabChange" class="ms-tabs">
        <mu-tab value="recommend" title="推荐" />
        <mu-tab value="rank" title="排行" />
        <mu-tab value="category" @active="handleActive" title="分类" />
      </mu-tabs>

      <div v-if="activeTab === 'recommend'" class="tab-container">
        待续...
      </div>
      <div v-if="activeTab === 'rank'" class="tab-container">
        <div class="rank-list">
          <div class="rank-item" v-for="rankItem in rankList" :key="rankItem.bookId">
            <div class="rank-item-left">
              <p class="rank-item-title">{{rankItem.title}}</p>
            </div>
            <div class="rank-item-body">
              <div class="rank-books">
                <div class="rank-book" v-for="(book, index) in rankItem.books" :key="index">
                  {{book}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 'category'" class="tab-container">
        <Media v-for="categoryItem in categories.list" key="categoryItem.categoryId" :imgSrc="categoryItem.image" :title="categoryItem.name"
          :description="categoryItem.description" @clickHandle="turnTo('category',{categoryId: categoryItem.categoryId})"></Media>
      </div>
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


  import book1 from '../../assets/images/book1.jpg'
  import book2 from '../../assets/images/book2.jpg'
  import book3 from '../../assets/images/book3.jpg'


  export default {
    name: 'home',
    data() {
      return {
        activeTab: 'recommend',
        show: true,
        categoryList: [
          {
            bookId: "123",
            image: book1,
            title: '小说',
            description: '世界名著，作品集'
          }, {
            bookId: "456",
            image: book2,
            title: '文学',
            description: '文学'
          }, {
            bookId: "789",
            image: book3,
            title: '传记',
            description: '传记'
          }, {
            bookId: "789",
            image: book3,
            title: '历史',
            description: '传记'
          }, {
            bookId: "789",
            image: book3,
            title: '言情',
            description: '传记'
          }
        ],
        rankList: [
          {
            bookId: "123",
            image: book1,
            title: '总排行',
            books: ['aaa', 'bbb', 'ccc']
          }, {
            bookId: "456",
            image: book2,
            title: '新书榜',
            books: ['aaa', 'bbb', 'ccc']
          }, {
            bookId: "789",
            image: book3,
            title: '男生榜',
            books: ['aaa', 'bbb', 'ccc']
          }, {
            bookId: "789",
            image: book3,
            title: '女生榜',
            books: ['aaa', 'bbb', 'ccc']
          }
        ]
      }
    },

    computed: {
      ...mapGetters({
        categories: 'categories'
      }),
    },
    methods: {
      ...mapActions([
        'getCategories'
      ]),
      turnTo(page, query) {
        router.push({ path: page, query: query })
      },
      turnBack() {
        window.history.back();
      },
      handleTabChange(val) {
        this.activeTab = val
      },
      handleActive() {
        this.activeTab = "category"
      },
      
    },
    beforecreate(){
      //开始loading动画
    },
    created() {
      //结束loading动画 还做一些初始化，实现函数自执行 完成了 data 数据的初始化，el没有
      this.$store.dispatch('getCategories')
    },
    beforemount() {
      //完成了 el 和 data 初始化 
    },
    // 组件挂载后
    mounted() {
      //在这发起后端请求，拿回数据，配合路由钩子做一些事情
    },
    beforeDestory(){
      //您确定删除吗？
    },
    //子组件
    components: {
      HeaderBar,
      Media
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .gridlist-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
    padding: 8px;
  }
  
  .w32 {
    width: 32px;
  }
  
  .ms-tabs {
    background-color: #fff;
  }
  
  .ms-tabs button {
    color: #000;
    min-height: 30px;
    padding: 6px 0;
  }
  
  .tab-container {
    width: 100%;
  }
  
  .rank-item {
    display: flex;
    background-color: #2196F3;
    border-radius: 5px;
    margin: 8px 0;
    color: #fff;
    align-items: center;
    &:first-child {
      margin-top: 10px;
    }
    .rank-item-left {
      flex: .5;
      .rank-item-title {
        font-size: 18px;
        margin: 0;
      }
    }
    .rank-item-body {
      flex: 1;
      text-align: left;
      border-radius: 0 5px 5px 0;
      padding: 10px;
      background-color: #FF4081;
    }
  }
  
  .search {
    box-shadow: 0 0 4px #ddd;
    border-radius: 5px;
    width: 80vw;
    height: 28px;
    position: relative;
    .search-inner {
      height: 28px;
      line-height: 28px;
      color: #a8a8a8;
    }
    .mi-search-icon {
      position: absolute;
      top: 2px;
      right: 8px;
    }
  }
</style>