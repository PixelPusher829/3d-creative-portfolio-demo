<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';
	import ContentList from './ContentList.svelte';

	type Props = {
		slice: Content.ContentIndexSlice;
		items: Content.BlogpostDocument[] | Content.ProjectDocument[];
	};

	const { slice, items }: Props = $props();
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h1 class="mb-10">{slice.primary.heading}</h1>
	{#if isFilled.richText(slice.primary.description)}
		<div class="prose prose-xl prose-invert mb-10">
			<PrismicRichText field={slice.primary.description} />
		</div>
	{/if}
	<ContentList
		fallbackItemImage={slice.primary.fallback_item_image}
		{items}
		viewMoreText={slice.primary.view_more_text}
	></ContentList>
</Bounded>
