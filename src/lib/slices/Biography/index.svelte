<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';
	import Avatar from './Avatar.svelte';

	type Props = SliceComponentProps<Content.BiographySlice>;

	const { slice }: Props = $props();
</script>

<Bounded
	as="section"
	class=""
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="grid md:grid-cols-[2fr,1fr] gap-x-8 gap-y-6">
		<h2>{slice.primary.heading}</h2>
		<div class="prose prose-slate prose-invert prose-xl col-start-1">
			<PrismicRichText field={slice.primary.description} />
		</div>
		<Button className="" linkField={slice.primary.cta_button} showIcon={true} />
		<Avatar
			image={slice.primary.avatar}
			className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
		/>
	</div>
</Bounded>
