<template>
  <div class="flex w-screen home">
    <music-hit class="w-1/3 m-1 rounded"></music-hit>
    <podcast-hit class="w-1/3 m-1 rounded"></podcast-hit>
    <account-hit class="w-1/3 m-1 rounded"></account-hit>
  </div>
</template>

<script>
// @ is an alias to /src
import MusicHit from "@/components/MusicHit.vue";
import PodcastHit from "@/components/PodcastHit.vue";
import AccountHit from "@/components/AccountHit.vue";
import GetFiles from "@/components/GetFiles.vue";

export default {
  name: "home",
  components: {
    MusicHit,
    PodcastHit,
    AccountHit
  }
};
</script>
