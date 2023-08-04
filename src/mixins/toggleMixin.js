export default {
    props: {
        isShowModal: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        closeModal() {
            this.$emit("update:isShowModal", false);
        },
    },
};