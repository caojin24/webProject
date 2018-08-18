<template>
  <div class="card">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="img" class="image" :title="title">
      <div style="padding: 14px;">
        <span class="title">{{title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{time}}</time>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    allData: {
      type: Object,
      default: {},
    }
  },
  data() {
    return {
      cardData: this.allData
    }
  },
  computed: {
    img: function() {
      return this.cardData.images ? this.cardData.images.medium : '';
    },
    title: function() {
      return this.cardData.title
    },
    time: function() {
      return this.cardData.year
    }
  },
  watch:{

  },
  created() {
    console.log(this.cardData);
  }
}
</script>

<style scoped>
  .card{
    display: inline-block;
    text-align: left;
    cursor: pointer;
  }
  .image {
    width: 100%;
    display: block;
    height: 387px;
  }
  .title{
    font-size: 16px;
  }
  .time{
    font-size: 14px;
  }
</style>
