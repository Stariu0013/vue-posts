<template>
    <form class="form" @submit.prevent>
        <custom-input class="input" type="text" placeholder="Title" v-model="post.title" />
        <custom-input class="input" type="text" placeholder="Description" v-model="post.body" />

        <custom-button @click="createPost">Add</custom-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            },
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: "",
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 15px;

    width: 100%;

    padding: 10px;

    border: 1px solid lightgrey;

    margin-bottom: 25px;
}

.formButtom {
    width: 100px;
}
</style>