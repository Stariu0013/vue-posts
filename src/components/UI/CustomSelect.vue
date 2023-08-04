<template>
    <select @change="changeOption">
        <option disabled value="">Select group method</option>
        <option
            @change="sortedPosts"
            v-for="option of options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: "custom-select",
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        changeOption(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>