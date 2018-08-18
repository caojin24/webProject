<template>
  <div class="hello">
    <p>{{msg}}</p>
    <p>{{count}}</p>
    <p>{{c}}</p>
    <p>{{doneTodos}}</p>
    <el-button type="warning" icon="el-icon-check" circle @click="increment"></el-button>
    <el-button type="warning" icon="el-icon-minus" circle @click="decrease"></el-button>    
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'vuex test',
      count: this.$store.state.count
    }
  },
  computed: {
    ...mapState({
      c: state => state.count
    }),
    ...mapGetters({
      doneTodos: 'doneTodos'
    })
  },
  methods: {
    ...mapActions([
      'increment',
      'decrease'
    ]),
  },
  created(){
    
  },
  watch:{
    count: (val, oldval) => {
      console.log(val,oldval)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    color: red;
  }
</style>
