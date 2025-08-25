<script lang="ts">
	import { type LinkField } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import IconArrow from '~icons/ic/baseline-arrow-outward';

	let {
		linkField,
		showIcon = true,
		className = ''
	}: { linkField: LinkField; showIcon: boolean; className: string } = $props();

	export { className as class };

	const buttonText = linkField.text as string;
</script>

<PrismicLink
	field={linkField}
	class={`group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold text-slate-900 transition-transform ease-out hover:scale-105${className}`}
>
	<span
		class={'absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0'}
	></span>
	<span class="relative flex items-center justify-center gap-2">
		{buttonText}
		{#if showIcon}
			<IconArrow />
		{/if}</span
	>
</PrismicLink>
