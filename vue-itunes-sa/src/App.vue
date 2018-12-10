<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-grey p-2 pl-4 pr-4">
      <div class="flex w-1/5 items-center flex-no-shrink text-white mr-6">
        <img src="./assets/vue-music_note.svg" alt="Custom Music Note design" style="width:3rem; height:auto;">
        <span class="font-thin text-3xl tracking-tight ml-2"> | Your Apple Details</span>
      </div>
      <div class="w-3/5 pl-12 block flex-grow items-stretch justify-center lg:flex lg:w-auto">
        <div class="text-lg w-full font-sans items-stretch justify-center lg:flex-grow">
          <router-link class="block w-1/5 ml-2 mr-2 mt-4 p-4 lg:inline-block lg:mt-0 text-blue-darker bg-white hover:text-white hover:bg-green rounded text-center" to="/">Home</router-link>
          <router-link class="block w-1/5 ml-2 mr-2 mt-4 p-4 lg:inline-block lg:mt-0 text-blue-darker bg-white hover:text-white hover:bg-green rounded text-center" to="/music-podcast">Music / Podcast</router-link>
          <router-link class="block w-1/5 ml-2 mr-2 mt-4 p-4 lg:inline-block lg:mt-0 text-blue-darker bg-white hover:text-white hover:bg-green rounded text-center" to="/your-account">Your Account</router-link>
          <router-link class="block w-1/5 ml-2 mr-2 mt-4 p-4 lg:inline-block lg:mt-0 text-blue-darker bg-white hover:text-white hover:bg-green rounded text-center" to="/about">About</router-link>
        </div>
      </div>
      <div class="w-1/5 items-center">
        <a href="#" class="w-full text-center inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green hover:bg-white mt-4 lg:mt-0">Select Files</a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style src="./assets/main.css">

