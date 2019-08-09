<template>
  <section class="featured-posts">
    <PostPreview id="1" title="title1" preview="text1" background="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <PostPreview id="2" title="title2" preview="text2" background="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <PostPreview id="3" title="title3" preview="text3" background="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  </section>
</template>

<script>
  import PostPreview from '@/components/Posts/PostPreview'
  export default {
    name: "PostList",
    components: {
      PostPreview
    }
  }
</script>

<style scoped>
  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
