<script>
    module.exports = {
    	vuex:{
    		getters: {
    			count: state => state.count
    		}
    	},
    	computed: {
    		funnyCount: function (){
    			return this.count + ", lol!"
    		}
    	}
    }
</script>

<template>
	<div class="display-container">
		<h2>Count: <small>{{ count }}</small></h2>
		<h2>Count, but funny: <small>{{ funnyCount }}</small></h2>
	</div>
</template>

<style lang="">
</style>