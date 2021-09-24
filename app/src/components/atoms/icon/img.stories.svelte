<script lang='ts'>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Icon from './img.svelte';
  import { mockEmojiThumbsUpSvgUrl } from '../../../mocks/emoji/thumbs-up';
</script>

<Meta
  title='atoms/icon'
  component={Icon}
  argTypes={{
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    decoding: {
      control: { type: 'select', options: ['async', 'auto', 'sync'] },
    },
  }}
/>

<Template let:args>
  <Icon {...args} />
</Template>

<Story
  name='Emoij'
  args={{
    src: mockEmojiThumbsUpSvgUrl,
    alt: 'Emoij',
    width: 200,
    height: 200,
  }}
/>
