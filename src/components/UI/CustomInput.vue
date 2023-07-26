<template>
    <input type="text" :value="modelValue" @input="updateValue" class="input" />
</template>
<script>
export default {
    name: "custom-input",
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateValue(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>
<style scoped>
.input {
    padding: 10px 15px;
    border: 1px solid grey;
}
</style>