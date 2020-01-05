<template>
	<div>
		<!--	Interpolation	-->
		<h1>{{title}}</h1>
		<h2>{{contents}}</h2>
		<p>{{count}}</p>
		<button @click="onClickAdd">Add</button>
		<hr>

		<!--	MVVM	-->
		<h1>v-model</h1>
		<input v-model="message" type="text" placeholder="Enter your message">
		<div>{{message}}</div>
		<button @click="onReset">Reset</button>
		<hr>
		<div>
			<router-link to="/">Home </router-link>
			<router-link to="/about">About </router-link>
			<router-link to="/eventandmethod">Event and Method </router-link>
			<router-link to="/data">Data</router-link>
			<router-view></router-view>

		</div>
	</div>
</template>

<script>
	export default {
		// eslint-disable-next-line no-mixed-spaces-and-tabs
	    name: "app",
		data() {
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	        return {
				title: "Bobby 2020",
				contents: "My new year resolution",
				count: 0,
				message: ""
			}
		},
		methods: {
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	        onClickAdd() {
                this.count = this.count + 1
			},
			onReset() {
				// eslint-disable-next-line no-mixed-spaces-and-tabs
	            this.message =  ""
			}

		}
	}
</script>

<style>
	html {
		margin: auto;
		text-align: center;
	}

	a {
		text-decoration: none;
	}
</style>
