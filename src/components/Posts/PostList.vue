<template>
    <h1>Posts list</h1>
    <div v-if="posts.length > 0">
        <TransitionGroup name="posts-list">
            <post-item v-for="post of posts" :post="post" :key="post.id" @removePost="this.$emit('removePost', post)" />
        </TransitionGroup>
    </div>
    <h2 v-else class="no-posts-text">
        Posts list is empty
    </h2>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.no-posts-text {
    color: red;
}

.new-post-button {
    margin: 10px 0;
}

.posts-list-item {
    display: inline-block;
    margin-right: 10px;
}

.posts-list-enter-active,
.posts-list-leave-active {
    transition: all .5s ease;
}

.posts-list-enter-from,
.posts-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.posts-list-move {
    transition: all .5s ease;
}
</style>