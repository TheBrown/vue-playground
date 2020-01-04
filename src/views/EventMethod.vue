<template>
	<div app="demo2">
		<h1>Event and Method</h1>
		<button v-on:click="clickMe">ClickMe</button>
		<button v-on:click="clickMe2('Welcome to Vuejs')">ClickMe2</button>
		<button @click="clickMe2('Welcome Bobby')">ClickMe3</button>
		<h3>{{getTimestamp()}}</h3>
	</div>
</template>

<script>
    export default {
        name: "EventMethod",
		mounted() {
            this.initial()
        },
        methods: {
            initial() {
				// eslint-disable-next-line no-console
              console.log("Initialization...")
			},
            clickMe() {
                alert("hi")
			},
			clickMe2(message) {
                alert(message)
			},
			getTimestamp() {
                return Date()
			}
		}
    }
</script>

<style scoped>

</style>