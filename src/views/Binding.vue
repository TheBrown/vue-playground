<template>
	<div>
		<h2>Binding</h2>
		<img v-bind:src="imgUrl">
		<a href="https://saleumsack.com">My Website</a>
	</div>
</template>

<script>
    export default {
        name: "Binding",
		data() {
            return {
                imgUrl: "https://www.bcel.com.la/bcel/bcelweb-datas/slide-show/imgs/bcel_web_file_62_32cf52101497471084a86ce9e1e4753d.jpg",
			}
		}
    }
</script>

<style scoped>
	img	{
		width: 100%;
	}
</style>