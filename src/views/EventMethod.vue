<template>
	<div app="demo2">
		<h1>Event and Method</h1>
		<button v-on:click="clickMe">ClickMe</button>
	</div>
</template>

<script>
    export default {
        name: "EventMethod",
		methods: {
            clickMe() {
                alert("hi")
			}
		}
    }
</script>

<style scoped>

</style>