<script lang="ts">
	import ContentBody from '$lib/components/ContentBody.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<ContentBody page={data.page} />
