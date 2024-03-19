<template>
  <main-content>
    <banner-image>
      <img class="w-100" src="../../../img/healthy/healthy.png" alt="" />
    </banner-image>
    <div class="space-150"></div>
    <v-container>
      <new-post></new-post>
      <div class="space"></div>
      <remarkable-post></remarkable-post>
    </v-container>
    <div class="space"></div>
    <div class="highlight">
      <img class="h-100 w-100" src="../../../img/background-music.png" alt="">
      <v-container class="item">
        <community-post></community-post>
      </v-container>
    </div>
    <div class="space"></div>
    <v-container>
      <content-composer></content-composer>
    </v-container>
  </main-content>
</template>

<script>
import NewPost from './layout/NewPost.vue'
import RemarkablePost from './layout/RemarkablePost.vue';
import CommunityPost from './layout/CommunityPost.vue';
import ContentComposer from './layout/ContentComposer.vue';
export default {
  components: {
    NewPost,
    RemarkablePost,
    CommunityPost,
    ContentComposer
  }
}
</script>

<style scoped>
.v-container {
  max-width: 1200px;
}
.w-100 {
  border-radius: 30px;
}

.space-150 {
  height: 150px;
}

.space {
  height: 50px;
}

.highlight {
  height: 500px;
  position: relative;
}

.item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>
