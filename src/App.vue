<template>
    <navbar></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import NavbarPage from "@/components/Navbar/NavbarPage";

export default {
    components: {
        navbar: NavbarPage,
    },
};

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}
</style>