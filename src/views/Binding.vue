<template>
	<div>
		<h2>Binding</h2>
		<img v-bind:src="imgUrl">
		<a href="https://saleumsack.com">My Website</a>
		<div :class="[errorClass, important]">Saleumsack</div>
		<div :style="isActive ? newStyle : '' ">Watch me!</div>
		<button @click="isActive = !isActive">Active/InActive</button>
	</div>
</template>

<script>
    export default {
        name: "Binding",
		data() {
            return {
                imgUrl: "https://www.bcel.com.la/bcel/bcelweb-datas/slide-show/imgs/bcel_web_file_62_32cf52101497471084a86ce9e1e4753d.jpg",
				errorClass: "error",
				important: "important",
				newStyle: {
                    backgroundColor: 'greenyellow',
					color: 'White'
				},
				isActive: false
			}
		}
    }
</script>

<style scoped>
	img	{
		width: 100%;
	}
	.error {
		background-color: cornflowerblue;
		color: white;
	}

	.important {
		font-weight: bold;
	}
</style>