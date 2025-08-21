<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ExperienceSlice>;

	const { slice }: Props = $props();
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="">
	<h2>{slice.primary.heading}</h2>
	{#each slice.primary.item as item}
		<div class="ml-t max-width-prose mt-8 md:mt-16 md:ml-12">
			<h3>
				{item.title}
			</h3>
			<p class="tracking-light mt-1 flex items-center gap-1 text-2xl font-semibold text-slate-400">
				<span>
					{item.time_period}
				</span>
				{' '}
				<span class="text-4xl font-extralight" aria-hidden="true">/</span>
				{' '}
				<span>
					{item.institution}
				</span>
			</p>
			<div class="prose prose-lg prose-slate prose-invert mt-4">
				<PrismicRichText field={item.description} />
			</div>
		</div>
	{/each}
</Bounded>
