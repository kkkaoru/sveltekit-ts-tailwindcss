import { render } from '@testing-library/svelte';
import { mockEmojiThumbsUpSvgUrl } from '@/mocks/emoji/thumbs-up';
import Icon from './img.svelte';

describe('shows proper heading when rendered', () => {
  it('should be matched snapshot', () => {
    const { container } = render(Icon, {
      src: mockEmojiThumbsUpSvgUrl,
      alt: 'test',
      width: 128,
      height: 128,
    });
    expect(container).toMatchSnapshot();
  });
});
