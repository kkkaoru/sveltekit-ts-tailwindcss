<script lang="ts">
  import type { ImgDecodingType, ImgLoadingType } from './type';

  export let src: string;
  export let alt: string;
  export let width: number;
  export let height: number;
  export let decoding: ImgDecodingType = 'async';
  export let loading: ImgLoadingType = 'lazy';
</script>
<img src={src} alt={alt} decoding={decoding} loading={loading}  width={width} height={height} />
