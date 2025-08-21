<script lang="ts">
	import type { Content } from '@prismicio/client';
	import type { SliceComponentProps } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import IconCircle from '~icons/ic/sharp-circle';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	type Props = SliceComponentProps<Content.TechListSlice>;

	const { slice }: Props = $props();

	let components: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: components,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 4
			}
		});

		tl.fromTo(
			'.tech-row',
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400);
				}
			},
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400);
				},
				ease: 'power1.inOut'
			}
		);
	});
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	bind:this={components}
>
	<Bounded as="div" class="">
		<h2>{slice.primary.heading}</h2>
	</Bounded>

	{#each slice.primary.item as { tech_name, tech_color }}
		<div
			class="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
			aria-label={tech_name || undefined}
		>
			{#each Array(15) as _, index}
				<span
					class="tech-name text-8xl font-extrabold tracking-tighter uppercase"
					style="color: {index === 7 && tech_color ? tech_color : 'inherit'}"
				>
					{tech_name}
				</span>
				<span class="text-3xl">
					<IconCircle />
				</span>
			{/each}
		</div>
	{/each}
</section>
