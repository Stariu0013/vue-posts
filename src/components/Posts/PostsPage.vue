<template>
    <custom-input
        v-model="searchQuery"
        placeholder="Search..."
    ></custom-input>
    <div class="app__btns">
        <custom-button class="new-post-button" @click="openModal">Create new post</custom-button>
        <custom-select
            v-model="selectedSort"
            :options="sortOptions"
        />
    </div>
    <custom-modal v-model:isShowModal="isShowModal">
        <post-form @create="createPost" />
    </custom-modal>
    <post-list :posts="sortedAndSearchPosts" @removePost="removePost" v-if="!isPostsLoading" />
    <h2 v-else>Posts are loading...</h2>
    <!--    <div class="pages-wrapper">-->
    <!--        <div-->
    <!--            v-for="pageNumber in totalPagesCount"-->
    <!--            :key="pageNumber"-->
    <!--            :class="{-->
    <!--                'active-page': pageNumber === currentPage-->
    <!--            }"-->
    <!--            class="page"-->
    <!--            @click="changePage(pageNumber)"-->
    <!--        >-->
    <!--            {{ pageNumber }}-->
    <!--        </div>-->
    <!--    </div>-->
    <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";
import PostForm from "@/components/Posts/PostForm.vue";
import CustomSelect from "@/components/UI/CustomSelect";
import axios from "axios";

export default {
    mounted() {
        this.fetchPosts();
    },
    data() {
        return {
            posts: [],
            isShowModal: false,
            isPostsLoading: false,
            searchQuery: "",
            currentPage: 1,
            limit: 10,
            totalPagesCount: 0,
            sortOptions: [
                { value: "title", name: "By title" },
                { value: "body", name: "By description" },
            ],
            selectedSort: this.sortOptions?.[0].value,
        };
    },
    components: {
        CustomSelect,
        PostForm, PostList,
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
            });
        },
        sortedAndSearchPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.isShowModal = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        changePage(newPage) {
            this.currentPage = newPage;
        },
        openModal() {
            this.isShowModal = true;
        },
        closeModal() {
            this.isShowModal = false;
        },
        fetchPosts() {
            this.isPostsLoading = true;
            axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _limit: this.limit,
                    _page: this.currentPage,
                },
            })
                .then(res => {
                    this.totalPagesCount = Math.ceil(res.headers["x-total-count"] / this.limit);
                    this.posts = res.data;
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.isPostsLoading = false;
                });
        },
        loadMorePosts() {
            this.currentPage += 1;
            axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _limit: this.limit,
                    _page: this.currentPage,
                },
            })
                .then(res => {
                    this.totalPagesCount = Math.ceil(res.headers["x-total-count"] / this.limit);
                    this.posts = [...this.posts, ...res.data];
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
    // watch: {
    //     currentPage() {
    //         this.fetchPosts();
    //     },
    // },
};
</script>

<style>
.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

.pages-wrapper {
    display: flex;
    gap: 5px;
}

.page {
    padding: 5px;
    border: 1px solid black;
}

.active-page {
    border: 2px solid teal;
}

.observer {
    width: 100%;
    height: 5px;
}
</style>