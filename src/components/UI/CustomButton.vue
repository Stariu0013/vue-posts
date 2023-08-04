<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
        buttonText: {
            type: String,
        },
    },
    name: "custom-button",
};
</script>
<style>
.btn {
    width: fit-content;
    padding: 10px;
    border: 1px solid teal;
    border-radius: 5px;
    color: teal;
    outline: none;
    cursor: pointer;
}
</style>
