<template>
  <div class="app">
    <p>主页</p>
    <div class="nav">
      <el-col :span="4"><router-link :to="{ path: 'hot' }"  active-class="active" exact>正在热映</router-link></el-col>
      <el-col :span="4"><router-link :to="{ path: 'now' }"  active-class="active" >即将上映</router-link></el-col>
      <el-col :span="4"><router-link :to="{ path: 'top' }"  active-class="active">Top250</router-link></el-col>
      <el-col :span="4"><router-link :to="{ path: 'praise' }" active-class="active">口碑</router-link></el-col>
      <el-col :span="4"><router-link :to="{ path: 'new' }"  active-class="active">新片榜</router-link></el-col>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    
  },
  created(){
    
  },
  watch:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav{
    overflow: hidden;
    margin-bottom: 16px;
  }
  a{ 
    text-decoration:none; 
    color:#333; 
  } 
  .active{
    color: red;
  }
</style>
