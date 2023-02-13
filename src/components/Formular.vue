<template>
    <form class="form" ref="form">
        <div class="card__list">
            <div class="card">
                <label class="card__title" for="title">Title</label><br />
                <input name="title" type="text" maxlength="100" v-model="input.title" placeholder="title" />
            </div>
            <div class="card">
                <label class="card__title" for="text">Text</label> <br />
                <input name="text" type="text" maxlength="300" v-model="input.text" placeholder="text" /> <br />
                count text letters {{ input.text.length }} / 300<br />
            </div>
            <div class="card">
                <label class="card__title" for="date">Datum</label><br />
                <input name="date" type="date" v-model="input.date" />
            </div>
        </div>
        <button type="button" v-on:click="save()">Speichern</button><br />
    </form>
</template>

<script>
export default {
    name: 'Formular',
    data() {
        return {
            input: {
                title: "",
                text: "",
                date: ""
            }
        }
    },
    props: {
        choosedData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    watch: {
        'choosedData': function ( choosedData ) {
            this.input = choosedData;
        },
    },

    methods: {
        save() {
            if ( this.input.index != undefined )
                this.$emit( 'sendNewDataToParent', this.input );
            else
                this.$emit( 'sendDataToParent', this.input );
            this.$refs.form.reset();
            this.input.title = '';
            this.input.text = '';
            this.input.date = '';
            this.input.index = undefined;

        }
    },
    emits: ["sendDataToParent"]
}
</script>