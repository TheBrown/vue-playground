<template>
	<div>
		<h1>Compute</h1>
		<h2>{{firstname}}</h2>
		<h2>{{lastname}}</h2>
		<h2>{{fullname}}</h2>
		<h1 style = "background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
		<h1>Random No from method: {{getrandomno1()}}</h1>
		<h1>Random No from method : {{getrandomno1()}}</h1>
		<h1  style = "background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
		<h1  style = "background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
		<h1  style = "background-color:gray;">Random No from computed
			property: {{getrandomno}}</h1>
		<h1>Random No from method: {{getrandomno1()}}</h1>
		<h1>Random No from method: {{getrandomno1()}}</h1>
	</div>
</template>

<script>
    export default {
        name: "Compute",
		methods: {
            getrandomno1() {
                return Math.random()
			},
		},
		computed: {
            fullname() {
              return this.firstname + " " + this.lastname
			},
            getrandomno() {
                return Math.random()
            }
		},
		data() {
            return {
                firstname: "Saleumsack",
				lastname: "KEOBOUALAY"
			}
		}
    }

</script>

<style scoped>

</style>