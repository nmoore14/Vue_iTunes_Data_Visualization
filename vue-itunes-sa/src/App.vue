<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-grey p-2 pl-4 pr-4">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <img src="./assets/vue-music_note.svg" alt="Custom Music Note design" style="width:3rem; height:auto;">
        <span class="font-thin text-3xl tracking-tight ml-2"> | Vue ~ Apple Details</span>
      </div>
      <div class="w-full block flex-grow items-center justify-center lg:flex lg:w-auto">
        <div class="text-lg font-sans justify-center items-center lg:flex-grow">
          <router-link class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark hover:text-white mr-4" to="/">Home</router-link>
          <router-link class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark hover:text-white mr-4" to="/music-podcast">Music / Podcast</router-link>
          <router-link class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark hover:text-white mr-4" to="/your-account">Your Account</router-link>
          <router-link class="block mt-4 lg:inline-block lg:mt-0 text-blue-dark hover:text-white mr-4" to="/about">About</router-link>
        </div>
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Select Files</a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style src="./assets/main.css">
