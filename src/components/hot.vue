<template>
  <div class="hot">
    <div v-for="c in list" :key="c.id" class="card"> 
      <Card v-bind:allData="c"/>      
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import { ajax } from '../utility';
import Card from './card.vue';
export default {
  name: 'Hot',
  data () {
    return {
      list: [],
    }
  },
  components: {
    Card: Card
  },
  methods: {
    fetchData: function() {
      ajax($, 'http://api.douban.com//v2/movie/in_theaters').then(res => {
          let subjects = res.subjects;
          if(res.subjects && res.subjects.length){
            subjects.map(item => {
              this.list.push(item);
            })
          }
      }).fail(err => {
        console.log(err);
      })
    }
  },
  created(){
    this.fetchData();
  },
  watch:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hot{
    margin-top: 16px;
  }
  .card{
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 16px;
    width: 270px;
    height: 500px;
  }
</style>
