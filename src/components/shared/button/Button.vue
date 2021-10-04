<template>
    <button @click="confirmAction()" class="button" :class="buttonStyle" :type="type">{{ name }}</button>

</template>

<script>
    export default {
        // props: ["type", "name", "confirmationRequired", "buttonClass"],
        props: {
            type: {
                required: true,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            confirmationRequired: Boolean,
            buttonClass: String
        },

        methods: {
            confirmAction() {
                if(this.confirmationRequired) {
                    if(confirm("Deseja confirmar a ação")){
                        this.$emit("confirmedAction");
                    }
                    return;
                }
                this.$emit("confirmedAction");
            }
        },

        computed: {
            buttonStyle() {
                console.log(this.buttonClass)
                if(this.buttonClass == "default" || !this.buttonClass) return "button-default";
                if(this.buttonClass == "warning") return "button-warning";
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