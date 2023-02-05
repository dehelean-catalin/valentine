<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<div class="wrapper">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>

		<RouterView />
	</div>
</template>

<style scoped>
.wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
}
nav {
	padding: 20px;
}

nav a.router-link-exact-active {
	color: black;
}
nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	color: black;
}
nav a:hover {
	color: rgb(77, 76, 76);
}
</style>
