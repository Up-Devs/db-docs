<template>
	<div class="bg-discord-red-500 py-20">
		<div class="max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12">
			<Logo class="filter drop-shadow-lg my-6" />
			<InstallButton />
		</div>
	</div>

	<div
		class="
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			px-6
			mx-auto
			pb-8
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
		"
	>
		<div class="col-span-full">
			<h2>About</h2>
			<p>
				Up-Devs.DB is a powerful Node.js module which can be used saving your datas in data-bases very easily.
				
			</p>
			<p>
				Currently only supports <img src="https://i.imgur.com/QT0aT7z.png" height="17" width="17" alt="Class icon"> <a href="/docs/main/main/class/JsonDB" rel="noopener">JSON database</a>, but MongoDB is coming soon!
			</p>
		</div>
		<div>
			<h2>Why?</h2>
			<ul>
				<li>Easy to use!</li>
				<li>Has extra methods/properties!</li>
				<li>Similar to <a href="https://www.npmjs.com/package/quick.db" target="_blank" rel="noopener">Quick.DB</a> and <a href="https://www.npmjs.com/package/quickmongo" target="_blank" rel="noopener">QuickMongo</a>!</li>
			</ul>
		</div>
		<div>
			<h2>Statistics</h2>
			<Stats />
			<p class="text-center">... and growing!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '~/store';
import MainSource from '~/data/MainSource';
import Logo from '~/components/Logo.vue';
import InstallButton from '~/components/InstallButton.vue';
import Stats from '~/components/Stats.vue';
const store = useStore();
const docs = computed(() => store.state.docs);
if (!docs.value) {
	void store.dispatch('fetchDocs', { inputSource: MainSource });
	void store.dispatch('fetchTags', { currentSource: MainSource });
}
</script>
