<script lang="ts">
	let { tag = 'section', class: className = '', children, ...rest } = $props();
	export { className as class };
</script>

<svelte:element this={tag} {...rest} class={`py-10 md:px-6 md:py-14 lg:py-16 ${className}`}>
	<div class="mx-auto w-full max-w-7xl px-4">{@render children()}</div>
</svelte:element>
