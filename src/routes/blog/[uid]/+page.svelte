<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import type { PageProps } from './$types';
	import Bounded from '$lib/components/Bounded.svelte';
	import { formatDate } from '$lib/formatDate';

	const { data }: PageProps = $props();
	const formattedDate = formatDate(data.page.data.date);
</script>

<Bounded tag="article">
	<div class="rounded-2xl border-slate-800 bg-slate-900/80 px-4 py-10 md:px-8 md:py-10">
		<h1 class="text-7xl mb-6">{data.page.data.title}</h1>
		<div class="flex gap-3 text-yellow-400">
			{#each data.page.tags as tag}
				<span class="text-xl font-bold ">{tag}</span>
			{/each}
		</div>
		<p class="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">{formattedDate}</p>
		<div class="mx-auto prose prose-lg prose-invert mt-12 max-w-none w-full md:mt-20">
			<SliceZone slices={data.page.data.slices} {components} />
		</div>
	</div>
</Bounded>
