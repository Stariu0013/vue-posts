<template>
    <h1>Posts list</h1>
    <custom-button class="new-post-button"  @click="this.$emit('openModal', true)">Create new post</custom-button>
    <custom-modal v-model:isShowModal="isShowModal">
        <post-form @create="createPost" />
    </custom-modal>
    <post-list :posts="posts" @removePost="removePost" @openModal="openModal" v-if="!isPostsLoading" />
    <h2 v-else>Posts are loading...</h2>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";
import PostForm from "@/components/Posts/PostForm.vue";

export default {
    mounted() {
        this.fetchPosts();
    },
    data() {
        return {
            posts: [],
            isShowModal: false,
            isPostsLoading: false,
        };
    },
    components: {
        PostForm, PostList,
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.isShowModal = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        openModal() {
            this.isShowModal = true;
        },
        closeModal() {
            this.isShowModal = false;
        },
        fetchPosts() {
            this.isPostsLoading = true;
            fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
                .then(res => res.json())
                .then(res => {
                    this.posts = res;
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.isPostsLoading = false;
                });
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    padding: 20px;
}
</style>