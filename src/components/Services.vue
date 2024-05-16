<template>
  <div>
    <Layout/>
    <div class="mt-[100px] -z-10">
      <div class="relative   sm:max-w-xl sm:mx-auto">
        <div
          class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Add User</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input autocomplete="off" id="first_name" name="first_name" type="text" v-model="allInputs.first_name"
                         class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                         placeholder="Email address" required />
                  <small class="hidden  first_name">First name is required</small>
                  <label for="first_name"
                         class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">First
                    name</label>
                </div>
                <div class="relative">
                  <input autocomplete="off" id="last_name" name="last_name" type="text" v-model="allInputs.last_name"
                         class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                         placeholder="Email address" required />
                  <small class="hidden last_name">Last name is required</small>
                  <label for="last_name"
                         class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last
                    name</label>
                </div>
                <div class="relative">
                  <input autocomplete="off" id="email" name="email" type="text" v-model="allInputs.email"
                         class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                         placeholder="Email address" required/>
                  <small class="hidden email">Email name is required</small>

                  <label for="email"
                         class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email </label>
                </div>

                <div class="relative float-end">
                  <button v-if=" toggle" class="bg-cyan-500 text-white rounded-md px-4 py-1" @click="addUsers()">Add
                  </button>
                  <button v-else class="bg-cyan-500 text-white rounded-md px-4 py-1" @click="updatedUser()">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    table-->

    <table class=" divide-y mt-[100px] divide-gray-200 container mx-auto ">
      <thead>
      <tr class="row">
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
      </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="(item,index) in list" :key="index">
        <td class="px-6 py-4 whitespace-nowrap">{{item.first_name}}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{item.last_name}}</td>
        <td class="px-6 py-4 whitespace-nowrap">{{item.email}}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <button @click="UpdateUsers(index)"
                  class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
            Edit
          </button>
          <button @click="deleteUser(index)"
                  class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
            Delete
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Layout from './Layout.vue';
  import axios from "axios"

  export default {

    name: 'Services ',
    data() {
      return {
        id: 0 ,
        toggle: true,
        myArray: [
          { id: 1, name: 'Object 1' },
          { id: 2, name: 'Object 2' },
          { id: 3, name: 'Object 3' }
        ],
        list: [],
        allInputs: {
          first_name: '',
          last_name: '',
          email: '',
        }
      };
    },
    components: { Layout },
    mounted() {

      // Retrieve the array from localStorage when the component is mounted
      const storedArray = localStorage.getItem('myArray');
      if (storedArray) {
        // Parse the JSON string back into an array of objects
        this.list = JSON.parse(storedArray);
      }
    },
    methods: {
      addUsers() {

        if ( this.allInputs.first_name === '' ||  this.allInputs.last_name === '' ||  this.allInputs.email === ''){
          let first_name = document.querySelector('#first_name').value.trim()
          let last_name = document.querySelector('#last_name').value.trim()
          let email = document.querySelector('#email').value.trim()

          if (first_name === ''){
            document.querySelector('.email').classList.remove('showElement');
            document.querySelector('.first_name').classList.add('showElement');
          }else if(last_name === ''){
            document.querySelector('.first_name').classList.remove('showElement');
            document.querySelector('.last_name').classList.add('showElement');
          }else if(email === ''){
            document.querySelector('.last_name').classList.remove('showElement');
            document.querySelector('.email').classList.add('showElement');
          }

         }else{
          document.querySelector('.email').classList.remove('showElement');
          document.querySelector('.last_name').classList.remove('showElement');
          document.querySelector('.first_name').classList.remove('showElement');

          this.list.push(this.allInputs);
          this.allInputs = {
            first_name: '',
            last_name: '',
            email: '',
          }
        }

        localStorage.setItem('myArray', JSON.stringify(this.list));

      },

      deleteUser(index) {
        this.list.splice(index, 1);
        this.addUsers();
      },

      UpdateUsers(index) {
        this.toggle = false
        this.list[index] = this.list[index]
        this.allInputs.first_name = this.list[index].first_name;
        this.allInputs.last_name = this.list[index].last_name;
        this.allInputs.email = this.list[index].email;
        this.id = index;
      },

      updatedUser(){
        this.list[this.id] = this.allInputs;
        localStorage.setItem('myArray', JSON.stringify(this.list));
        this.allInputs = {
          first_name: '',
          last_name: '',
          email: '',
        }
        this.toggle = true;
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .showElement{
    display: block;
    color: red;
  }
</style>
