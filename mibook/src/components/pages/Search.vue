<template>
  <div class="search">
       <!--头部导航-->
    <headerBar title="觅书" leftIcon="arrow_back" rightIcon="bookshelf" url="bookshelf"></headerBar>
    <div class="grid-container">
        <mu-text-field type="text" hintText="书名/作者" icon="search"/>
    </div>
     
  </div>
</template>

<script>

import HeaderBar from '../include/HeaderBar';

export default {
  name: 'search',
  data () {
    return {
      
    }
  },
  components: {
      headerBar: HeaderBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .grid-container{
        margin-top: 50px;
    }
</style>
