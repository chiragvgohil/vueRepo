<template>
  <div>
    <Layout/>
    <ul class="mt-10 bg-red-500">
      <li v-for="item in items" :key="item.id">
        <input type="text" v-model="item.name" @change="updateItem(item)">
      </li>
    </ul>
  </div>
</template>

<script>
  import Layout from './Layout.vue';

  export default {
    name: 'About',
    data() {
      return {
        msg: 0,
        variable2: 'Bar',
        items: []
      };
    },
    created() {
      // Retrieve the array from localStorage when the component is created
      const storedItems = localStorage.getItem('myddArray');
      if (storedItems) {
        this.items = JSON.parse(storedItems);
      }
    },
    methods: {
      updateItem(updatedItem) {
        // Find the index of the item to update
        const index = this.items.findIndex(item => item.id === updatedItem.id);
        if (index !== -1) {
          // Update the item in the array
          this.items.splice(index, 1, updatedItem);
          // Save the updated array back to localStorage
          localStorage.setItem('myddArray', JSON.stringify(this.items));
        }
      }
    },
    watch: {

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
