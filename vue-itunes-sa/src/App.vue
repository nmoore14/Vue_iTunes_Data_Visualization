<template>
  <div id="app">
    <ul class="list-reset flex">
      <li class="mr-6">
        <a class="text-blue hover:text-blue-darker" href="#">Active</a>
      </li>
      <li class="mr-6">
        <a class="text-blue hover:text-blue-darker" href="#">Link</a>
      </li>
      <li class="mr-6">
        <a class="text-blue hover:text-blue-darker" href="#">Link</a>
      </li>
      <li class="mr-6">
        <a class="text-grey-light cursor-not-allowed" href="#">Disabled</a>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<style>
</style>
