<template>
    <div v-if="posts.length > 0">
        <h1>Posts list</h1>
        <custom-button class="new-post-button" @click="this.$emit('openModal', true)">Create new post</custom-button>
        <post-item v-for="post of posts" :post="post" :key="post.id" @removePost="this.$emit('removePost', post)" />
    </div>
    <h2 v-else class="no-posts-text">
        Posts list is empty
    </h2>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.no-posts-text {
    color: red;
}

.new-post-button {
    margin: 10px 0;
}
</style>