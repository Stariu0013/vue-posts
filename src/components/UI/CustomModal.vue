<template>
    <div class="dialog-container" v-if="isShowModal" @click="closeModal">
        <div @click.stop class="dialog-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "custom-modal",
    mixins: [toggleMixin],
};
</script>

<style>
.dialog-container {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, .5);

    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog-wrapper {
    background-color: white;
    padding: 20px;
    border: 3px solid teal;
    border-radius: 10px;
}
</style>