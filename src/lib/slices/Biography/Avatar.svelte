<script lang="ts">
	import type { ImageField } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let { image, className = '' }: { image: ImageField; className: string } = $props();

	let component: HTMLDivElement;

	onMount(() => {
		gsap.fromTo(
			'.avatar',
			{
				opacity: 0,
				scale: 1.4
			},
			{
				opacity: 1,
				scale: 1,
				duration: 1.3,
				ease: 'power3.inOut'
			}
		);
	});

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});

	function handleMouseMove(e: MouseEvent) {
		if (!component) return;

		const componentRect = component.getBoundingClientRect();
		const componentCenterX = componentRect.left + componentRect.width / 2;

		let componentPercent = {
			x: (e.clientX - componentCenterX) / componentRect.width / 2
		};

		let distFromCenterX = 1 - Math.abs(componentPercent.x);

		gsap
			.timeline({ duration: 0, overwrite: 'auto', ease: 'power3.inOut' })
			.to(
				'.avatar',
				{
					rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x)
				},
				0
			)
			.to(
				'.highlight',
				{
					opacity: distFromCenterX - 0.7,
					x: -10 + 20 * componentPercent.x
				},
				0
			);
	}
</script>

<div class={`relative h-full w-full ${className}`} bind:this={component}>
	<div class="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0">
		<PrismicImage
			field={image}
			class="avatar-image h-full w-full object-cover "
			imgixParams={{ q: 90 }}
		/>
		<div
			class="highlight absolute inset-0 w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
		></div>
	</div>
</div>

<style>
	.avatar {
		perspective: 500px;
		perspective-origin: 150% 150%;
	}
</style>
