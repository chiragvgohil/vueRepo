<template>
  <div>
    <layout/>
    <span style="padding: 10px; color: yellow; border: 1px solid red">

      <slot>anil</slot>
    </span>
  </div>
</template>


<script>
  import Layout from "./Layout";
  export default {
    name: 'SlotComponent',
    components: { Layout },
  }
</script>
