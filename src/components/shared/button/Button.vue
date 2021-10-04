<template>
    <button @click="confirmAction()" class="button button-warning" :type="type">{{ name }}</button>

</template>

<script>
    export default {
        props: ["type", "name"],

        methods: {
            confirmAction() {
                if( confirm("Deseja confirmar a ação") ){
                    this.$emit("confirmedAction")
                }
            }
        }
    }
</script>

<style scoped>
    .button {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .button-warning {
        background: firebrick;
        color: white;
    }

    .button-default {
        background: darkcyan;
        color: white;
    }

</style>