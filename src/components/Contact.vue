<template>
  <div>

    <SlotComponent><span class="text-red">from contact</span></SlotComponent>
  </div>
</template>

<script>
  import Layout from './Layout.vue';
  import SlotComponent from "./SlotComponent";

  export default {
    name: 'Contact',
    data() {
      return {
        msg: 0,
        color: 100
      };
    },
    components: { Layout, SlotComponent },
    methods: {
      changeColor() {
        if (this.$data.color === 'pink') {
          this.$data.color = 'red'
        } else {
          this.$data.color = 'pink'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 5em;
    font-weight: 900;
    color: #e10600;
    position: relative;
    transition: all 1s ease;
    text-align: center;
  }

  .container__star {
    transition: all .7s ease-in-out;
  }

  .first {
    position: absolute;
    top: 20px;
    left: 50px;
    transition: all .7s ease-in-out;
  }

  .svg-icon {
    position: absolute;
    z-index: 1;
  }

  .star-eight {
    background: red;
    width: 100px;
    height: 100px;
    position: relative;
    text-align: center;
    animation: rot 3s infinite;
  }

  .star-eight::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100px;
    background: black;
    transform: rotate(135deg);
  }

  .container:hover .container__star {
    transform: rotateX(70deg) translateY(250px);
    box-shadow: 0px 0px 120px -100px #e4e727;
  }

  .container:hover .svg-icon {
    animation: grow 1s linear infinite;
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(340deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes grow {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-5deg);
    }

    75% {
      transform: rotate(5deg);
    }

    100% {
      transform: scale(1) rotate(0deg);
    }
  }
</style>
