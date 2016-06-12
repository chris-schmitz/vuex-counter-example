<template>
	<div class="app-container">
		<h1>{{ name }}</h1>
		<display></display>
		<control></control>
	</div>
</template>

<script>
	import Display from './Display.vue'
	import Control from './Control.vue'


	export default {
		components:{
			Control, Display
		},
		vuex:{
			getters:{
				count: function(state) {
					return state.count
				}
			}
		},
		data () {
			return {
				name: 'Hello World vuex counter'
			}
		},
		computed: {
			funnyCount: function (){
				return this.count + " lol!"
			}
		}
	}
</script>

<style>
	body {
		font-family: Helvetica, sans-serif;
	}
</style>
