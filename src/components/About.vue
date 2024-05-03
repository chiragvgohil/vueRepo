<template>
  <div>
    <Layout/>
    <div class="bg-gradient-to-r from-teal-400 to-yellow-200 h-screen ">
      <div class="card ">
        <div class="content">
          <div class="front shadow-xl">
            <img width="100%"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWUbDvub4AnmvUxt0R73KtUftAhuNM-DF15SYE7i3D4xJIZ8Fyli8PySrvZngxs9ARGw&usqp=CAU"
                 alt="">
          </div>
          <div class="back shadow-xxl">
            <img width="100%"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtieUq4tS6Ph8KE3bar3TwpplRVwOqN80b_A&s"
                 alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Layout from './Layout.vue';

  export default {
    name: 'About',
    data() {
      return {
        msg: 0,
      };
    },
    components: { Layout }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import 'https://fonts.googleapis.com/css?family=Lily+Script+One';


  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin: -150px;
    float: left;
    perspective: 500px;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .card:hover .content {
    transform: rotateY(180deg);
    transition: transform 0.5s;
  }

  .front,
  .back {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    line-height: 300px;
    color: #03446A;
    text-align: center;
    font-size: 60px;
    border-radius: 5px;
    backface-visibility: hidden;
  }

  .back {
    background: #03446A;
    color: white;
    transform: rotateY(180deg);
  }
</style>
