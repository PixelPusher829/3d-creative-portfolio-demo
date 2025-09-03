<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import { formatDate } from '$lib/formatDate';
	import type { PageProps } from './$types';
	import type { Content } from '@prismicio/client';

	const { page }: { page: Content.BlogpostDocument | Content.ProjectDocument } = $props();
	const formattedDate = formatDate(page.data.date);
</script>

<Bounded tag="article">
	<div class="rounded-2xl border-slate-800 bg-slate-900/80 px-4 py-10 md:px-8 md:py-10">
		<h1 class="mb-6 text-7xl">{page.data.title}</h1>
		<div class="flex gap-3 text-yellow-400">
			{#each page.tags as tag}
				<span class="text-xl font-bold">{tag}</span>
			{/each}
		</div>
		<p class="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">{formattedDate}</p>
		<div class="prose prose-lg prose-invert mx-auto mt-12 w-full max-w-none md:mt-20">
			<SliceZone slices={page.data.slices} {components} />
		</div>
	</div>
</Bounded>
