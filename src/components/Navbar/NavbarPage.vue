<template>
    <div class="navbar">
        <h1>Vue 3</h1>

        <div class="navbar__btns">
            <custom-button class="navbar__btn" @click="$router.push('/')">Main</custom-button>
            <custom-button class="navbar__btn" @click="$router.push('/posts')">Posts</custom-button>
        </div>
    </div>
</template>

<script>

</script>

<style>
.navbar {
    display: flex;
    align-items: center;
    padding: 0 20px;

    width: 100%;
    height: 50px;
    background: lightgrey;
    box-shadow: 2px 2px 4px grey;
}

.navbar__btns {
    margin-left: auto;
}

.navbar__btn {
    margin-left: 20px;
}

</style>