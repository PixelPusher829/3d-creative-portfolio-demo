<script lang="ts">
	import type { KeyTextField, LinkField } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import IconArrow from '~icons/ic/baseline-arrow-outward';

	let {
		linkField,
		label,
		showIcon = true,
		className = ''
	}: { linkField: LinkField; label: KeyTextField; showIcon: boolean; className: string } = $props();

	export { className as class };
</script>

<PrismicLink
	field={linkField}
	class={`group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 px-4 py-2 font-bold transition-transform ease-out hover:scale-105${className}`}
>
	<span
		class={'absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0'}
	></span>
	<span class="relative flex items-center justify-center gap-2"
		>{label}
		{#if showIcon}
			<IconArrow />
		{/if}</span
	>
</PrismicLink>
