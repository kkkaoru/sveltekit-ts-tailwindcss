<script lang='ts'>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import TopTemplate from './index.svelte';
  import { mockIconProps, mockTopTitle } from '../../../mocks/templates/top';
</script>

<Meta
  title='templates/top'
  component={TopTemplate}
/>

<Template let:args>
  <TopTemplate {...args} />
</Template>

<Story
  name='TopTemplate'
  args={{
    icon: mockIconProps,
    title: mockTopTitle,
  }}
/>
