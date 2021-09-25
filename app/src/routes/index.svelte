<script lang="ts">
  import Icon from '../components/atoms/icon/img.svelte';
  import { mockEmojiThumbsUpSvgUrl } from '../mocks/emoji/thumbs-up';
</script>
<h1>Welcome to SvelteKit</h1>
<Icon src={mockEmojiThumbsUpSvgUrl} alt="thumbs up" width={256} height={256}/>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a>
  to read the documentation
</p>
