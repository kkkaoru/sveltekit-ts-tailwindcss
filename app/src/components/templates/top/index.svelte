<script lang="ts">
  import Icon from '../../atoms/icon/img.svelte';

  export let icon;
  export let title;
</script>
<h1>{title}</h1>
<Icon {...icon}/>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a>
  to read the documentation
</p>
