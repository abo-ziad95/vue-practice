<template>
  <form @submit.prevent="onSave">
    <AppInputControl v-model="editedPost.author">Author Name</AppInputControl>
    <AppInputControl v-model="editedPost.title">Title</AppInputControl>
    <AppInputControl v-model="editedPost.thumbnailLink">thumbnailLink</AppInputControl>
    <AppInputControl control-type="textarea" v-model="editedPost.content">Author Name</AppInputControl>
    <AppButton type="submit">Save</AppButton>
    <AppButton type="button" btn-style="cancel" @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
  import AppInputControl from "../../../components/UI/AppControlInput";
  import AppButton from "../../../components/UI/AppButton";
  export default {
    name: "AdminPostForm",
    data() {
      return {
        editedPost:{
          author: '',
          title: '',
          thumbnailLink: '',
          content: ''
        }
      }
    },
    methods: {
      onSave(){

      },
      onCancel(){
        this.route.push('/admin')
      },
    },
    components: {
      AppInputControl,
      AppButton
    }
  }
</script>

<style scoped>

</style>
