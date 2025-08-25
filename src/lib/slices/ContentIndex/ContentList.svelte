<script lang="ts">
	import {
		asImageSrc,
		isFilled,
		type Content,
		type ImageField,
		type KeyTextField,
		type PrismicDocument
	} from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import type { Action } from 'svelte/action';
	import IconArrow from '~icons/ic/baseline-arrow-outward';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	const {
		items,
		fallbackItemImage,
		viewMoreText = 'Read more'
	}: {
		items: Content.BlogpostDocument[] | Content.ProjectDocument[] | undefined;
		fallbackItemImage: ImageField;
		viewMoreText: KeyTextField;
	} = $props();

	let lastMousePos = { x: 0, y: 0 };
	let currentIndex: number | undefined = $state();

	const contentImages = $state(
		items?.map((item) => {
			const image = isFilled.image(item.data.hover_image)
				? item.data.hover_image
				: fallbackItemImage;
			return asImageSrc(image, {
				fit: 'crop',
				w: 220,
				h: 320,
				exp: -10
			});
		})
	);

	const onItemEnter: Action<HTMLElement, number> = (node, index) => {
		gsap.fromTo(
			node,
			{
				opacity: 0,
				y: 20
			},
			{
				opacity: 1,
				y: 0,
				duration: 1.3,
				ease: 'elastic.out(1, 0.3)',
				stagger: 0.2,
				scrollTrigger: {
					trigger: node,
					start: 'top bottom-=200px',
					end: 'bottom center',
					toggleActions: 'play none none reverse'
				}
			}
		);
		const imageUrl = contentImages?.[index];
		if (imageUrl) {
			const image = new Image();
			image.src = imageUrl;
		}

		return {
			destroy() {}
		};
	};

	const handleMouseMove = (e: MouseEvent) => {
		const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
		const speed = Math.abs(mousePos.x - lastMousePos.x);

		const MaxY = window.scrollY + window.innerHeight - 350;
		const MaxX = window.innerWidth - 250;

		gsap.to('.hover-reveal', {
			x: gsap.utils.clamp(0, MaxX, mousePos.x - 110),
			y: gsap.utils.clamp(0, MaxY, mousePos.y - 160),
			rotation: speed * (mousePos.x > lastMousePos.x ? 1 : -1),
			ease: 'back.out(2)',
			duration: 1.3
		});

		gsap.to('.hover-reveal', {
			opacity: currentIndex === undefined ? 0 : 1,
			visibility: 'visible',
			ease: 'power3.out',
			duration: 2
		});


		lastMousePos = mousePos;
	};

	const onMouseEnter = (index: number) => {
		currentIndex = index;
	};

	const onMouseLeave = () => {
		currentIndex = undefined;
	};
</script>

<svelte:window onmousemove={handleMouseMove} />

<ul class="b-slate-100 grid border-b" onmouseleave={onMouseLeave}>
	{#each items || [] as post, index (post.id + index)}
		<li
			class="content-list-item opacity-0"
			use:onItemEnter={index}
			onmouseenter={() => onMouseEnter(index)}
		>
			<PrismicLink
				document={post as PrismicDocument<Record<string, any>, string, string>}
				class="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
			>
				<div class="flex flex-col">
					<span class="mb-2 text-3xl font-bold">{post.data.title}</span>
					<div class="flex gap-3 text-yellow-400">
						{#each post.tags as tag}
							<span class="text-lg font-bold">{tag}</span>
						{/each}
					</div>
				</div>
				<span class="ml-auto flex items-center gap-2 text-2xl font-medium md:ml-0">
					{viewMoreText}
					<IconArrow />
				</span>
			</PrismicLink>
		</li>
	{/each}
</ul>

<!-- Hover Element -->
<div
	class="hover-reveal pointer-events-none absolute top-0 left-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-100 transition-[background] duration-300"
	style={contentImages?.[currentIndex]
		? `background-image: url(${contentImages[currentIndex]})`
		: ''}
></div>
