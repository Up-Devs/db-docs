<template>
	<footer class="bg-discord-red-560">
		<div class="max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-200">
			<strong><router-link to="/">Up-Devs.DB</router-link></strong>
			<p class="mb-4">An useful data-base for your projects. Helpful for storing your datas.</p>
			<p class="mb-4">Website originally created by the discord.js team</p>
			<Stats class="mb-4" />
			<p class="text-xs break-words-legacy">
				commit: {{ gitCommit }}<br />
				built at: {{ builtAt }}
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Stats from './Stats.vue';
declare const GIT_COMMIT_HASH: string;
declare const BUILT_AT: string;
const gitCommit = ref(GIT_COMMIT_HASH);
const builtAt = ref(new Date(BUILT_AT).toUTCString());
</script>
