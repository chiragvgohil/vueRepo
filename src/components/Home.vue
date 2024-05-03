<template>
  <div>
    <Layout/>
    <button :style="{backgroundColor:'hsl('+$data.color+',95%,46%)'}" @click="$data.color+=100" class="py-2 px-4 mx-3 rounded text-white font-old">
      Change my bg
    </button>
  </div>
</template>

<script>
  import Layout from './Layout.vue';

  export default {
    name: 'Home',
    data() {
      return {
        msg: 0,
        color: 100
      };
    },
    components: { Layout },
    methods: {
      changeColor() {
        if (this.$data.color === 'pink'){
          this.$data.color = 'red'
        }else {
          this.$data.color = 'pink'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
