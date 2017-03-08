<template>
  <div class="bookshelf">
    <!--头部导航-->
    <headerBar title="觅书" icon="bookshelf" url="bookshelf"></headerBar>

    <!--主体部分-->
    <div class="gridlist-container">
     <mu-tabs :value="activeTab" @change="handleTabChange" class="ms-tabs">
        <mu-tab value="tab1" title="言情"/>
        <mu-tab value="tab2" title="职场"/>
        <mu-tab value="tab3" @active="handleActive" title="女生"/>
      </mu-tabs>
      <div v-if="activeTab === 'tab1'">
        <h2>Tab One</h2>
        <p>
          言情
        </p>
      </div>
      <div v-if="activeTab === 'tab2'">
        <h2>Tab Two</h2>
        <p>
          职场
        </p>
      </div>
      <div v-if="activeTab === 'tab3'">
        <h2>Tab Three</h2>
        <p>
          女生
        </p>
      </div>
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
       activeTab: 'tab1',
       show: true
    }
  },
  components: {
    headerBar: HeaderBar
  },
   methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      // window.alert('tab active')
    },
    
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
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

  

  
</style>
