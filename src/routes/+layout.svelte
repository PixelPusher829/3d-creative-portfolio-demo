<script>
	import '../app.css';
	import '@fontsource-variable/urbanist';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';

	let { children } = $props();
</script>

<svelte:head>
	<title>{page.data.title}</title>
	{#if page.data.meta_description}
		<meta name="description" content={page.data.meta_description} />
	{/if}
	{#if page.data.meta_title}
		<meta name="og:title" content={page.data.meta_title} />
	{/if}
	{#if page.data.meta_image}
		<meta name="og:image" content={page.data.meta_image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>
<header></header>
<main>
	{@render children()}
</main>
<div class="background-gradient absolute inset-0 -z-50 max-h-screen"></div>
<div
	class="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('noisetexture.jpg')] opacity-20 mix-blend-soft-light"
></div>
<footer></footer>
<PrismicPreview {repositoryName} />
