<template>
  <div class="bookshelf">
    <!--头部导航-->
    <HeaderBar title="觅书" leftIcon="bookshelf" rightIcon="search" url="bookshelf"></HeaderBar>

    <!--主体部分-->
    <div class="gridlist-container">
      <mu-list-item>
        <div class="search" @click="linkToSearch">
          <div class="search-inner">书名/作者</div>
          <mu-icon class="mi-search-icon" value="search" color="#a8a8a8"/>
        </div>
      </mu-list-item>
        

     <mu-tabs :value="activeTab" @change="handleTabChange" class="ms-tabs">
        <mu-tab value="recommend" title="推荐"/>
        <mu-tab value="rank" title="排行"/>
        <mu-tab value="category" @active="handleActive" title="分类"/>
    </mu-tabs>

      <div v-if="activeTab === 'recommend'" class="tab-container">
        <!--<mu-flexbox :gutter="10">
          <mu-flexbox-item class="mi-flexbox-item" v-for="tile in categoryList" :key="tile.bookId" align="center" @click.native="linkToBookDetail(tile.bookId)">
            <div class="paper">
              <img :src="tile.image" alt="">
            </div>
            <p class="book-title" >{{tile.title}}</p>
            <p class="book-author">{{tile.author}}</p>
          </mu-flexbox-item>
        </mu-flexbox>-->
      </div>
      <div v-if="activeTab === 'rank'" class="tab-container">
        <div class="rank-list">
          <div class="rank-item" v-for="rankItem in rankList">
            <div class="rank-item-left">
              <p class="rank-item-title">{{rankItem.title}}</p>
            </div>
            <div class="rank-item-body">
              <div class="rank-books">
                <div class="rank-book" v-for="book in rankItem.books">
                  {{book}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 'category'" class="tab-container">
        <!--<mu-sub-header>全部分类</mu-sub-header>-->
        <mu-list v-for="categoryItem in categoryList">  
           <mu-list-item  :title="categoryItem.title" titleClass="tal" describeTextClass="tal">
            <mu-avatar :src="categoryItem.image" slot="leftAvatar"/>
            <span slot="describe">
              {{categoryItem.description}}
            </span>
            
          </mu-list-item>
           <mu-divider inset/>
        </mu-list>
      </div>
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

 function fetchItem(store) {
    return store.dispatch('FETCH_ITEMS', {
      ids: [store.state.route.params.id]
    })
  }
  function fetchItemComments(store) {
    return store.dispatch('FETCH_ITEM_COMMENTS', {
      id: store.state.route.params.id
    })
  }




export default {
  name: 'home',
  data () {
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
            books: ['aaa','bbb','ccc']
          }, {
            bookId: "456",
            image: book2,
            title: '新书榜',
            books: ['aaa','bbb','ccc']
          }, {
            bookId: "789",
            image: book3,
            title: '男生榜',
            books: ['aaa','bbb','ccc']
          }, {
            bookId: "789",
            image: book3,
            title: '女生榜',
            books: ['aaa','bbb','ccc']
          }
       ]
    }
  },
  components: {
    HeaderBar
  },
  //  methods: {
  //   handleTabChange (val) {
  //     this.activeTab = val
  //   },
  //   handleActive () {
  //     // window.alert('tab active')
  //   },
  //   linkToSearch(){
  //     router.push({path: 'search'})
  //   }
    
  // },
  // computed: {
  //     item () {
  //       return this.$store.state.items[this.$route.params.id]
  //     }
  // },
  // beforeMount () {
  //     fetchItem(this.$store)
  //     fetchItemComments(this.$store).then(() => {
  //       this.displayComments = this.$store.state.comments[this.$route.params.id]
  //     })
  // }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
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
  .ms-tabs{
    background-color: #fff;

  }
  .ms-tabs button{
    color: #000;
    min-height: 30px;
    padding: 6px 0;
  }
  .tab-container{
    width: 100%;
  }
  
  .rank-item{
    display: flex;
    background-color: #2196F3;
    border-radius: 5px;
    margin: 8px 0;
    color: #fff;
    align-items: center;

    &:first-child{
      margin-top: 10px;
    }
    .rank-item-left{
      flex: .5;
      .rank-item-title{
        font-size: 18px;
        margin: 0;
      }
    }
    .rank-item-body{
      flex: 1;
      text-align: left;
      border-radius: 0 5px 5px 0;
      padding: 10px;
      background-color: #FF4081;
      
    }
  }

  .search{
      box-shadow: 0 0 4px #ddd;
      border-radius: 5px;
      width: 80vw;
      height: 28px;
      position: relative;
      .search-inner{
          height: 28px;
          line-height: 28px;
          color: #a8a8a8;
      }
      .mi-search-icon{
          position: absolute;
          top: 2px;
          right: 8px;
          /*width: 28px;
          height: 28px;*/
          /*background: url('./assets/images/search.png') no-repeat;  */
          /*background-size: 28px;*/
     }

      
  }
  
</style>

<style>
.tal{
    text-align: left;
}
.mu-avatar{
  width: 50px;
  height: 50px;
}
.mu-item-left{
  width: 50px;
}



</style>
