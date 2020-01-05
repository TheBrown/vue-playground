<template>
	<div>
		<h1>Data</h1>
		<button @click="count++">Count++</button>
		<p>{{count}}</p>
		<div>{{message}}</div>
		<div>{{isLogged}}</div>
		<input type="text" placeholder="Enter a message" v-model="message">
		<h2 v-if="message == 'Bobby'">Hurayyyyy!!! Welcome Bobby</h2>
		<div>{{account}}</div>
		<div>{{course}}</div>
		<h2>Using v-for</h2>
		<ul>
			<li v-for="(item, index) in course" :key="index">{{index + 1}}.{{item}}</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "Data",
		mounted() {
        },
        data() {
            return {
				// eslint-disable-next-line no-mixed-spaces-and-tabs
          		count: 0,
				message: "",
				isLogged: false,
				account: {
					// eslint-disable-next-line no-mixed-spaces-and-tabs
          		    username: "admin",
					password: "1234"
				},
				course: [
					// eslint-disable-next-line no-mixed-spaces-and-tabs
				    "Angular",
					"VueJS",
					"ReactJS",
					"Flutter",
					"UX/UI"
				]
			}
		},
		methods: {
		}
    }
</script>

<style scoped>
	li {
		color: red;
		list-style-type: none;
	}
	ul {
		text-align: left;
		margin: 0;
		padding: 0;
	}
</style>