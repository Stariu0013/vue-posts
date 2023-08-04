<template>
    <div class="post">
        <div>
            <p><strong>Title</strong> - {{ post.id }}. {{ post.title }}</p>
            <p><strong>Description</strong> - {{ post.body }}</p>
        </div>

        <div class="post_btns">
            <custom-button>EDIT</custom-button>
            <custom-button @click="this.$emit('removePost', post)">REMOVE</custom-button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
.post {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border: 3px solid teal;
    margin-bottom: 15px;
}

.post_btns {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-left: 20px;
}
</style>