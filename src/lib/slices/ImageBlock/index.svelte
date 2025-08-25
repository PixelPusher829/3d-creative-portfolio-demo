<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage, type SliceComponentProps } from '@prismicio/svelte';

	type Props = SliceComponentProps<Content.ImageBlockSlice>;

	const { slice }: Props = $props();
</script>

<PrismicImage
	field={slice.primary.image}
	class="not-prose md:my14 my-10 h-full w-full rounded-md lg:my-16"
/>
