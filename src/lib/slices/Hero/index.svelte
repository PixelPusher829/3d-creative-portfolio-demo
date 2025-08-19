<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import Scene from './Scene.svelte';

	type Props = SliceComponentProps<Content.HeroSlice>;

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="bg-slate-900 px-4 md:px-6"
>
	<div class="mx-auto w-full max-w-7xl">
		<div class="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
			<div
				class="relative z-10 row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0"
			>
				<Scene />
			</div>
			<div class="col-start-1 md:row-start-1">
				<h1
					class="mb-2 text-[clamp(3rem,20vmin,13rem)] leading-none font-extrabold tracking-tighter text-nowrap md:mb-8"
				>
					<span class="block text-slate-300">{slice.primary.first_name}</span>
					<span class="-mt-[.2em] block text-slate-500">{slice.primary.last_name}</span>
				</h1>
				<span
					class="block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold tracking-[.2em] text-transparent uppercase md:text-4xl"
					>{slice.primary.tag_line}</span
				>
			</div>
		</div>
	</div>
</section>

<style>
	@reference "tailwindcss";
</style>
