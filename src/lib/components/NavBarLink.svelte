<script lang="ts">
	import { page } from '$app/state';
	import { asLink, type KeyTextField, type LinkField } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';

	let {
		field,
		label,
		onLinkClick,
		type
	}: {
		field: LinkField;
		label: KeyTextField;
		onLinkClick: (event: MouseEvent) => void;
		type: 'desktop' | 'mobile';
	} = $props();

	const path = $derived(asLink(field));
	const isActive = $derived(path && page.url.pathname.includes(path));
</script>

{#if type === 'desktop'}
	<PrismicLink
		class="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
		{field}
		onclick={onLinkClick}
		aria-current={isActive ? 'page' : undefined}
	>
		<span
			class={`absolute inset-0 z-0 h-full bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? 'translate-y-6' : 'translate-y-8'}`}
		></span>
		<span class="relative">
			{label}
		</span>
	</PrismicLink>
{:else}
	<PrismicLink
		class="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900"
		{field}
		onclick={onLinkClick}
		aria-current={isActive ? 'page' : undefined}
	>
		<span
			class={`absolute inset-0 z-0 h-full bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isActive ? 'translate-y-6' : 'translate-y-20'}`}
		></span>
		<span class="relative">
			{label}
		</span>
	</PrismicLink>
{/if}
