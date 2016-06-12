<script>
    module.exports = {
    	methods:{
    		increment: function (){
    			this.$store.dispatch('INCREMENT')
    		}
    	}
    }
</script>

<template>
	<div class="button-container">
		<button @click="increment" type="button">increment</button>
	</div>
</template>

<style lang="">
</style>