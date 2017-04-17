<template>
  <div class="bookdetail">
    <!--头部导航-->
    <headerBar :title="bookDetail.name" leftIcon="arrow_back" rightIcon="home" @leftClick="turnBack" @rightClick="turnTo('/')"></headerBar>

    <!--主体部分-->
    <mu-card class="grid-container">
  
      <mu-card-media>
        <img :src="bookDetail.image" />
      </mu-card-media>
      <mu-card-title :title="bookDetail.name" :subTitle="bookDetail.author" />
      <mu-card-text class="content">
        简介：{{bookDetail.content}}
      </mu-card-text>
      <mu-card-actions>
        <mu-raised-button class="raised-button" label="免费阅读" icon="import_contacts" secondary/>
        <mu-raised-button class="raised-button" label="加入书架" icon="add" primary/>
      </mu-card-actions>
    </mu-card>

  </div>
</template>

<script>
  import Router from 'vue-router'
  const router = new Router();
  import { mapGetters, mapActions } from 'vuex'
  import * as utils from '../../utils';


  // 引入子组件
  import HeaderBar from '../include/HeaderBar';


  export default {
    name: 'bookdetail',
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters({
        bookDetail: 'bookdetail'
      }),
    },
    methods: {
      ...mapActions([
        'getBookdetail'
      ]),
      turnTo(page, query) {
        router.push({ path: page, query: query })
      },
      turnBack() {
        window.history.back();
      }
    },
    created() {
      let id = utils.getQueryString('bookId');
      this.$store.dispatch('getBookdetail', id)
    },
    components: {
      headerBar: HeaderBar
    },


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .grid-container {
    margin-top: 40px;
    padding: 10px 0 30px;
  }
  
  .mu-appbar {
    height: 40px;
    background-color: #2fbcd3;
  }
  
  .mu-appbar-title {
    line-height: 40px;
    font-size: 16px;
  }
  
  .content {
    text-align: left;
  }
  
  .mu-card-media {
    padding: 20px 30px 0;
  }
  
  .raised-button {
    border-radius: 5px;
    font-size: 12px;
    &:first-child {
      margin-right: 20px;
    }
  }
</style>