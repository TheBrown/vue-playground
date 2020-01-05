<template>
	<div>
		<h2>Home</h2>

		<!--	MVVM	-->
		<h1>v-model</h1>
		<input v-model="message" type="text" placeholder="Enter your message">
		<div>{{message}}</div>
		<br>
		<button @click="onReset">Reset</button>
		<hr>
	</div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>