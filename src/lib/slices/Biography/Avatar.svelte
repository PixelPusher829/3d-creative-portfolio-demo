<script lang="ts">
	import type { ImageField } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	let { image, className = '' }: { image: ImageField; className: string } = $props();
</script>

<div class={`relative h-full w-full ${className}`}>
	<div class="avatar aspec-square overflow-hidden rounded-3xl border-2 border-slate-700">
		<PrismicImage
			field={image}
			class="avatar-image obj-fill h-full w-full "
			imgixParams={{ q: 90 }}
		/>
	</div>
</div>

<style>
    .avatar {
        perspective: 500px;
        perspective-origin: 150% 150%;
    }
</style>