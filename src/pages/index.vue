<template>
	<div class="bg-discord-green-500 py-20">
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
				Up-Devs.DB is a powerful Node.js module which can be used for interact with the 
				<a href="https://developer.brawlstars.com/#/" target="_blank" rel="noopener"
			        >official <img src="https://i.pinimg.com/474x/e8/44/db/e844db91a58d5ab88730e97b60704460.jpg" height="15" width="15" alt="Brawl Stars logo" style="border-radius:%50;"> Brawl Stars API <heroicons-outline-external-link class="h-5 w-5 inline-block mb-1" aria-hidden="true"
				/></a>
				, which also allows you to access
				<a href="https://brawlapi.com/" target="_blank" rel="noopener"
					><img src="https://cdn.brawlify.com/front/Star.svg" height="17" width="19" alt="BrawlAPI logo"> BrawlAPI <heroicons-outline-external-link class="h-5 w-5 inline-block mb-1" aria-hidden="true"
				/></a>
				very easily. It has so many extra methods that will help you code more Brawl! And with it, you can build a Brawl Stars project so much easier!
				
			</p>
			<p>
				This package has 100% coverage of the official Brawl Stars API. <em>It receives new Brawl Stars features shortly after they arrive in the API.</em>
			</p>
		</div>
		<div>
			<h2>Why?</h2>
			<ul>
				<li>Easy to use!</li>
				<li>Supports %100 of the Brawl Stars API!</li>
				<li>Has extra props/methods with <a href="https://brawlapi.com/" target="_blank" rel="noopener"
					><img src="https://cdn.brawlify.com/front/Star.svg" height="17" width="19" alt="BrawlAPI logo"> BrawlAPI <heroicons-outline-external-link class="h-5 w-5 inline-block mb-1" aria-hidden="true"
				/></a>!</li>
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
