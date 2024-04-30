<template>
    <div  >
      <nav class="bg-gray-800 p-4 fixed top-0 w-full">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="text-white text-xl font-semibold">Logo</a>

        <!-- Menu -->
        <ul class="flex space-x-4">
            <li><a href="#/home" class="text-white hover:text-gray-400">Home</a></li>
            <li><a href="#/about" class="text-white hover:text-gray-400">About</a></li>
            <li><a href="#" class="text-white hover:text-gray-400">Services</a></li>
            <li><a href="#" class="text-white hover:text-gray-400">Contact</a></li>
        </ul>
    </div>
</nav>
    </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      msg:0,
    }
  }
}
</script>