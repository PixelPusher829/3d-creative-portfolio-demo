<script lang="ts">
	import { isFilled } from '@prismicio/client';
	import Button from './Button.svelte';
	import NavBarLink from './NavBarLink.svelte';
	import IconMenu from '~icons/ic/baseline-menu';
	import IconClose from '~icons/ic/baseline-close';

	let { settings } = $props();

	let open = $state(false);

	function onLinkClick() {
		open = false;
	}
</script>

<header class="relative top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
	<nav>
		<div
			class="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl"
		>
			<div class="flex items-center justify-between">
				<a
					href="/"
					aria-label="Homepage"
					class="text-xl font-extrabold tracking-tighter text-slate-900"
				>
					{settings.data.name}
				</a>
				<button
					aria-expanded={open}
					aria-label="Open Menu"
					onclick={() => (open = true)}
					class="block p-2 text-2xl text-slate-800 md:hidden"
				>
					<IconMenu/>
				</button>
			</div>
			<!-- Mobile Nav -->
			<ul
				class={`fixed inset-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pt-14 pr-4 transition-transform duration-300 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
			>
				<li>
					<button
						aria-expanded={open}
						aria-label="Close Menu"
						onclick={() => (open = false)}
						class="fixed top-3 right-4 block p-2 text-2xl text-slate-800 md:hidden"
					>
						<IconClose/>
					</button>
				</li>
				{#each settings.data.nav_item as { link }}
					<li class="first:mt-8">
						<NavBarLink field={link} {onLinkClick} type="mobile" />
					</li>
				{/each}
				{#if isFilled.link(settings.data.cta_link)}
					<Button
						linkField={settings.data.cta_link}
						className="ml-3"
						showIcon={true}
					/>
				{/if}
			</ul>
			<!-- Desktop Nav -->
			<ul class="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
				{#each settings.data.nav_item as { link }}
					<li>
						<NavBarLink field={link} {onLinkClick} type="desktop" />
					</li>
				{/each}
				{#if isFilled.link(settings.data.cta_link)}
					<Button
						linkField={settings.data.cta_link}
						className=""
						showIcon={true}
					/>
				{/if}
			</ul>
		</div>
	</nav>
</header>
